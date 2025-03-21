import glsl from 'vite-plugin-glsl';

export default {
  base: '/water-animation/',
  build: {
    sourcemap: true
  },
  plugins: [glsl()]
} 