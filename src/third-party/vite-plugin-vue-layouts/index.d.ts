import { Plugin } from 'vite';

/**
 * Plugin options.
 */
interface Options {
    /**
     * Relative path to the directory to search for page components.
     * @default 'src/layouts'
     */
    layoutsDir: string;
    /**
     * List of path globs to exclude when resolving pages.
     */
    exclude: string[];
    /**
     * Mode for importing layouts
     */
    importMode: (name: string) => 'sync' | 'async';
}
declare type UserOptions = Partial<Options>;
interface ResolvedOptions extends Options {
}

declare function defaultImportMode(name: string): "sync" | "async";
declare function layoutPlugin(userOptions?: UserOptions): Plugin;

export default layoutPlugin;
export { ResolvedOptions, UserOptions, defaultImportMode };
