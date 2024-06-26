const express = require('express');
const app = express();
const path = require('path');

// Serve the Angular app's build files
__dirname = '/Users/wadehuang/Yiva/yivaApp/MyCashFlow/angular-app';
// dist/angular-app/browser
app.use(express.static(path.join(__dirname, 'dist/angular-app/browser')));

// API route
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from Express!' };
  res.json(data);
});

// Catch-all route to serve the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-app/browser', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});