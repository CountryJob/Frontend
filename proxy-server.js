const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const PORT = 8090;

// CORS 활성화
app.use(cors());

// JSON 파싱
app.use(express.json());

// 프록시 미들웨어 설정
const proxy = createProxyMiddleware({
    target: 'http://3.37.47.88:8080',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).send('프록시 서버 에러');
    }
});

// 모든 요청을 프록시로 전달
app.use('/', proxy);

app.listen(PORT, () => {
    console.log(`프록시 서버가 http://localhost:${PORT} 에서 실행 중`);
});