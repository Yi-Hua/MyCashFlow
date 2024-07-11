-- SELECT ALL PaymentMethods
SELECT * FROM PaymentMethods;

-- INSERT INTO PaymentMethods
INSERT INTO PaymentMethods (
  user_id,
  method_name,
  method_type,
  balance,
  cashback_rate,
  cashback_type
 )
VALUES (?, ?, ?, ?, ?, ?);

-- PATCH PaymentMethods
UPDATE PaymentMethods SET ${updateData} WHERE id = ?;

-- PUT PaymentMethods
UPDATE PaymentMethods
SET user_id = ?,
 method_name = ?,
 method_type = ?,
 balance = ?,
 cashback_rate = ?,
 cashback_type = ?,
 created_at = ?,
WHERE id = ?;

-- DELETE FROM PaymentMethods
DELETE FROM PaymentMethods
WHERE id = ?;