import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createHead } from '@vueuse/head';
import { setupLayouts } from 'layouts-generated';
import generatedRoutes from 'pages-generated';
import App from './App.vue';
import './styles/tailwind.css';
import './styles/main.css';

const routes = setupLayouts(generatedRoutes);
console.log(routes);

const router = createRouter({
	history: createWebHistory(),
	routes
});

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);

app.mount('#app');
