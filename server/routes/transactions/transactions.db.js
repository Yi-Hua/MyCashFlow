const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) console.error('Error opening database:', err.message); 
    else console.log('Connected to in-memory SQlite database.');
});

// Read SQL
const schemaPath = path.join(__dirname, 'transactions.sql');
let schema;
try { schema = fs.readFileSync(schemaPath, 'utf8');} 
catch (err) { process.exit(1); } // read schema fair 

// run db
db.serialize(() => {
    db.exec(schema, (err) => {
        if (err) console.error('Error executing schema:', err.message); 
        else console.log('Transactions Table created successfully!');
    });
});

module.exports = db;
