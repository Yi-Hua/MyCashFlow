CREATE TABLE IF NOT EXISTS PaymentMethods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    method_name VARCHAR(255) NOT NULL,
    method_type VARCHAR(255) NOT NULL CHECK (method_type IN ('cash', 'bank', 'credit_card')),
    balance DECIMAL(10, 2) NOT NULL,
    cashback_rate DECIMAL(5, 2),
    cashback_type VARCHAR(255) CHECK (cashback_type IN ('cash', 'points')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);