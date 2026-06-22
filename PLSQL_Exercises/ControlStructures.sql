/* Scenario 1:
   Apply 1% discount to loan interest rates
   for customers above 60 years old
*/

DECLARE
v_age NUMBER;
BEGIN

FOR cust IN (
        SELECT CustomerID, DOB
        FROM Customers
    ) LOOP

        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12);

        IF v_age > 60 THEN

UPDATE Loans
SET InterestRate = InterestRate - 1
WHERE CustomerID = cust.CustomerID;

END IF;

END LOOP;

COMMIT;

DBMS_OUTPUT.PUT_LINE('Interest rate discount applied successfully.');

END;
/

/* ==========================================
   Scenario 2:
   Set VIP status for customers whose
   balance is greater than 10000
   ========================================== */

ALTER TABLE Customers
    ADD IsVIP VARCHAR2(5);

BEGIN

FOR cust IN (
        SELECT CustomerID, Balance
        FROM Customers
    ) LOOP

        IF cust.Balance > 10000 THEN

UPDATE Customers
SET IsVIP = 'TRUE'
WHERE CustomerID = cust.CustomerID;

ELSE

UPDATE Customers
SET IsVIP = 'FALSE'
WHERE CustomerID = cust.CustomerID;

END IF;

END LOOP;

COMMIT;

DBMS_OUTPUT.PUT_LINE('VIP status updated successfully.');

END;
/

/* ==========================================
   Scenario 3:
   Send reminders for loans due
   within next 30 days
   ========================================== */

BEGIN

FOR loan_rec IN (
        SELECT c.Name,
               l.LoanID,
               l.EndDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE
                            AND SYSDATE + 30
    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || loan_rec.Name
            || ' has Loan ID '
            || loan_rec.LoanID
            || ' due on '
            || TO_CHAR(loan_rec.EndDate,'DD-MON-YYYY')
        );

END LOOP;

END;
/