const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const db = require('./transactions.db');

// keys
const transactionKeys = ['name', 'note', 'amount', 'user_id', 'category_id', 'payment_method_id', 'type', 'date', 'created_at'];

// Read the Queries SQL file
const sqlFilePath = path.join(__dirname, 'queries.sql'); // path
const sqlQueries = fs.readFileSync(sqlFilePath, 'utf8')
    .split(';')
    .reduce((acc, sql, index) => {
        const trimmedSql = sql.trim();
        if (trimmedSql) {
            const key = ['getAll', 'post', 'patch', 'put', 'delete'][index];
            acc[key] = trimmedSql;
        }
        return acc;
    }, {});

// GET endpoint: get all transactions
router.get('/api/transactions', (req, res) => {
    db.all(sqlQueries.getAll, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// POST endpoint: create a transaction
router.post('/api/transactions', (req, res) => {
    const data = req.body;
    const values = transactionKeys.map(key => data[key]);

    const stmt = db.prepare(sqlQueries.post);
    stmt.run(values, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: this.lastID, ...data });
    });
    stmt.finalize();
});

// PATCH endpoint: partially update a transaction
router.patch('/api/transactions/:id', (req, res) => {
    const { id } = req.params;
    const data = req.body;

    if (Object.keys(data).length === 0) {
        res.status(400).json({ error: "No fields to update" });
        return;
    }

    const updateFields = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(data), id];

    const sqlPatch = sqlQueries.patch.split('${updateData}').join(updateFields)
    const stmt = db.prepare(sqlPatch);

    stmt.run(values, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id, ...data });
    });
    stmt.finalize();
});

// PUT endpoint: update a transaction
router.put('/api/transactions/:id', (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const values = transactionKeys.map(key => data[key]);

    const stmt = db.prepare(sqlQueries.put);
    stmt.run(values, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id, ...data });
    });
    stmt.finalize();
});

// DELETE endpoint: delete a transaction
router.delete('/api/transactions/:id', (req, res) => {
    const { id } = req.params;
    const stmt = db.prepare(sqlQueries.delete);
    stmt.run(id, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(204).end();
    });
    stmt.finalize();
});

module.exports = router;
