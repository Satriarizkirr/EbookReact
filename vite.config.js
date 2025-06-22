import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // TAMBAHKAN BAGIAN INI UNTUK MENGUBAH PORT
  server: {
    port: 3000, // <-- Anda bisa pilih nomor port lain yang Anda suka, misal 3001, 5000, 8080, dll.
  }
})