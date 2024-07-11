const fs = require('fs');
const path = require('path');
const express = require('express');
const { dir } = require('console');

const router = express.Router();

// 讀取 routes 目錄中的所有 .routes.js 文件，並動態載入
function loadRoutes(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            loadRoutes(fullPath); // 讀取子目錄
        } else if (file.endsWith('.routes.js')) {
            console.log(`Loading route: ${file}`);
            const route = require(fullPath);
            router.use(route);
        }
    });
};

// 從當前目錄開始加載路由
loadRoutes(__dirname);

module.exports = router;