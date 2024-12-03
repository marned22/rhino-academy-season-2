## Customer Discount Calculator

Create a program that calculates the final price of a product after applying discounts. Use multiple functions to determine eligibility, calculate the discount amount, and return the final price.

### Steps:

1. Write a function `isEligibleForDiscount(customerType)` that checks if a customer is eligible for a discount:
    - `customerType === "premium"` → Eligible (the function should return true).
    - `customerType === "regular"` → Not eligible (the function should return false).
2. Write a function `calculateDiscount(price, percentage)` that calculates the discount amount based on the price and percentage.
3. Write a function `finalPrice(price, discountAmount)` that returns the price after applying the discount.
4. Combine these functions in a single program.
