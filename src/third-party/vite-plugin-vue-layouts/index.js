"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/index.ts
var _path = require('path');

// src/files.ts
var _fastglob = require('fast-glob'); var _fastglob2 = _interopRequireDefault(_fastglob);
async function getFilesFromPath(path, options) {
  const {
    exclude
  } = options;
  const files = await _fastglob2.default.call(void 0, "**/*.vue", {
    ignore: ["node_modules", ".git", "**/__*__/*", ...exclude],
    onlyFiles: true,
    cwd: path
  });
  return files;
}

// src/utils.ts
var _debug = require('debug'); var _debug2 = _interopRequireDefault(_debug);
function normalizePath(str) {
  return str.replace(/\\/g, "/");
}
var debug = _debug2.default.call(void 0, "vite-plugin-layouts");

// src/RouteLayout.ts
function getClientCode(importCode) {
  const code = `
${importCode}

export function setupLayouts(routes) {
  return routes.map((route) => {
    return { 
      path: route.path,
      component: layouts[route.meta?.layout || 'default'],
      children: [route],
    }
  })
}
`;
  return code;
}
var RouteLayout_default = getClientCode;

// src/importCode.ts

function getImportCode(files, options) {
  const imports = [];
  const head = [];
  let id = 0;
  for (const file of files) {
    const path = `/${options.layoutsDir}/${file}`;
    const parsed = _path.parse.call(void 0, file);
    const name = _path.join.call(void 0, parsed.dir, parsed.name).replace(/\\/g, "/");
    if (options.importMode(name) === "sync") {
      const variable = `__layout_${id}`;
      head.push(`import ${variable} from '${path}'`);
      imports.push(`'${name}': ${variable},`);
      id += 1;
    } else {
      imports.push(`'${name}': () => import('${path}'),`);
    }
  }
  const importsCode = `
${head.join("\n")}
export const layouts = {
${imports.join("\n")}
}`;
  return importsCode;
}

// src/index.ts
var MODULE_IDS = ["layouts-generated", "virtual:generated-layouts"];
var MODULE_ID_VIRTUAL = "/@vite-plugin-vue-layouts/generated-layouts";
function defaultImportMode(name) {
  if (process.env.VITE_SSG)
    return "sync";
  return name === "default" ? "sync" : "async";
}
function resolveOptions(userOptions) {
  return Object.assign({
    layoutsDir: "src/layouts",
    exclude: [],
    importMode: defaultImportMode
  }, userOptions);
}
function layoutPlugin(userOptions = {}) {
  let config;
  const options = resolveOptions(userOptions);
  return {
    name: "vite-plugin-layouts",
    enforce: "pre",
    configResolved(_config) {
      config = _config;
    },
    resolveId(id) {
      return MODULE_IDS.includes(id) || MODULE_IDS.some((i) => id.startsWith(i)) ? MODULE_ID_VIRTUAL : null;
    },
    async load(id) {
      if (id === MODULE_ID_VIRTUAL) {
        const layoutsDirPath = normalizePath(_path.resolve.call(void 0, config.root, options.layoutsDir));
        debug("Loading Layout Dir: %O", layoutsDirPath);
        const files = await getFilesFromPath(layoutsDirPath, options);
        const importCode = getImportCode(files, options);
        const clientCode = RouteLayout_default(importCode);
        debug("Client code: %O", clientCode);
        return clientCode;
      }
    }
  };
}
var src_default = layoutPlugin;



exports.default = src_default; exports.defaultImportMode = defaultImportMode;
