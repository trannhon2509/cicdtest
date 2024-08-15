import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cicdtest/', // Thay <REPO_NAME> bằng tên repository của bạn
  plugins: [react()],
})
