### Framework + build tool
- `vue3`
- `vite`
- `Google Cloud Platform`
> [!NOTE]
> No external UI libraries or styling frameworks were used for both simplicity's sake and to use vanilla HTML and CSS as much as possible.

### Dependencies
- `axios`
- `vue3-google-map`

### Installation
> [!IMPORTANT]
>For this project I decided to go with Bun instead of the more traditional NPM or PNPM.
```
git clone https://github.com/lorenzopasqualini/knt-test.git
```
```
cd knt-test
```
```
bun install
```
```
bun dev
```

### CORS
A proxy server had to be set up during development in order to handle the API request from **OpenData BCN** with a token to go along with it. Due to CORS restrictions though, the same could not be replicated for production in Vercel, and thus the API calls can only be made locally.
```js
// vite.config.js
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://opendata.bcn.cat/data/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
