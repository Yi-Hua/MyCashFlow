const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // 使用 cors 中間件來允許所有來源的請求
app.use(bodyParser.json()); // 解析 application/json

// 假設你的記帳資料結構是一個簡單的物件陣列
let expenses = [
    { id: 1, description: 'Lunch', amount: 15.75 },
    { id: 2, description: 'Transportation', amount: 30.00 },
];

// GET endpoint: 取得所有記帳項目
app.get('/api/expenses', (req, res) => {
    res.json(expenses);
});

// POST endpoint: 新增一筆記帳項目
app.post('/api/expenses', (req, res) => {
    const { description, amount } = req.body;
    const id = expenses.length + 1;
    const newExpense = { id, description, amount };
    expenses.push(newExpense);
    res.status(201).json(newExpense);
});

// 聽取指定的 port
app.listen(port, () => {
    console.log(`Budget app backend listening at http://localhost:${port}`);
});
