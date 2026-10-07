import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    define: {
        // Inject the current timestamp as a global variable
        __LAST_UPDATED__: JSON.stringify(new Date().toISOString()),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        // globals: true,
        environment: 'happy-dom',
    },
});
