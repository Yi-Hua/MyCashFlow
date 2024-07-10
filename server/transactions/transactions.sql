CREATE TABLE Transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    category_id INTEGER,
    payment_method_id INTEGER,
    name VARCHAR(255),
    note VARCHAR(255),
    amount REAL,
    type TEXT NOT NULL CHECK(type IN ('income', 'expense')),
    date TEXT,
    created_at TEXT
);
