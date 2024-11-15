import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import removeConsole from 'vite-plugin-remove-console';

export default defineConfig({
    css : {
        preprocessorOptions : {
            scss : {
                api: 'modern-compiler'
            }
        }
    },
    plugins: [
        vue(),
        removeConsole()
    ],
    resolve: {
        alias: {
          '@': fileURLToPath( new URL('./src', import.meta.url) )
        }
    }
});