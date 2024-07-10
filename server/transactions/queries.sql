-- SELECT ALL transactions
SELECT * FROM Transactions;

-- INSERT INTO transactions
INSERT INTO Transactions (name, note, amount, user_id, category_id, payment_method_id, type, date, created_at)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);

-- PATCH transactions
UPDATE Transactions SET ${updateData} WHERE id = ?;

-- UPDATE transactions
UPDATE Transactions 
SET name = ?, note = ?, amount = ?, user_id = ?, category_id = ?, payment_method_id = ?, type = ?, date = ?, created_at = ? 
WHERE id = ?;

-- DELETE FROM transactions
DELETE FROM Transactions 
WHERE id = ?;