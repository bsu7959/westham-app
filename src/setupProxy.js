import { createProxyMiddleware } from 'http-proxy-middleware';


export default function setupProxy(app) {
  app.use(
    '/api',
    createProxyMiddleware({
        target:'https://www.whufc.com/news?category=632&page=0',
        changeOrigin: true,
    }),
  )
}
