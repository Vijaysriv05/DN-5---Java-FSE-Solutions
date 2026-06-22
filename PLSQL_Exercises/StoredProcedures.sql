/* ==========================================
   Scenario 1:
   Process Monthly Interest
   Apply 1% interest to all Savings Accounts
   ========================================== */

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN

UPDATE Accounts
SET Balance = Balance + (Balance * 0.01)
WHERE AccountType = 'Savings';

COMMIT;

DBMS_OUTPUT.PUT_LINE('Monthly Interest Applied Successfully');

END;
/

-- Execute Procedure
EXEC ProcessMonthlyInterest;


/* ==========================================
   Scenario 2:
   Update Employee Bonus
   Add bonus percentage to employees
   of a given department
   ========================================== */

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
AS
BEGIN

UPDATE Employees
SET Salary = Salary + (Salary * p_bonus_percent / 100)
WHERE Department = p_department;

COMMIT;

DBMS_OUTPUT.PUT_LINE('Bonus Updated Successfully');

END;
/

-- Execute Procedure
EXEC UpdateEmployeeBonus('IT',10);


/* ==========================================
   Scenario 3:
   Transfer Funds Between Accounts
   ========================================== */

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_source_account IN NUMBER,
    p_target_account IN NUMBER,
    p_amount IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN

SELECT Balance
INTO v_balance
FROM Accounts
WHERE AccountID = p_source_account;

IF v_balance >= p_amount THEN

UPDATE Accounts
SET Balance = Balance - p_amount
WHERE AccountID = p_source_account;

UPDATE Accounts
SET Balance = Balance + p_amount
WHERE AccountID = p_target_account;

COMMIT;

DBMS_OUTPUT.PUT_LINE('Transfer Successful');

ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

END IF;

END;
/

-- Execute Procedure
EXEC TransferFunds(1,2,500);