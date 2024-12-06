function isEligibleForDiscount(customerType) {
    if(customerType === "premium") {
        console.log('Eligible');
        return true;
    } else(customerType === "regular"); {
        console.log('Not eligible');
        return false;
    }
}

function calculateDiscount(price, percentage) {
    return discountAmount = price * percentage / 100
}

function finalPrice(price, discountAmount) {
    return price - discountAmount
}

function customer(customerType, price, percentage){
    const discountAmount = calculateDiscount(price, percentage);
    const finalPriceValue = finalPrice(price, discountAmount);
    if(isEligibleForDiscount(customerType)){
        console.log(`Price: $${price}`);
        console.log(`Discount Amount: $${discountAmount}`);
        console.log(`Final Price: $${finalPriceValue}`);
    } else {
        console.log('You dont have a discount ');
    }
}

customer("regular",500, 25)
customer("premium",1000, 25)