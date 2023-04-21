import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    '**/*.mp4', // inclure tous les fichiers au format .mov dans les ressources
    '**/*.svg', // inclure tous les fichiers au format .svg dans les
  ],
})
