const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./transactions/transactions.routes');

const app = express();
const port = 3000;

app.use(cors()); // 使用 cors 中間件來允許所有來源的請求
app.use(bodyParser.json()); // 解析 application/json
app.use(routes); // 使用分離的路由

// 聽取指定的 port
app.listen(port, () => {
    console.log(`Budget app backend listening at http://localhost:${port}`);
});
