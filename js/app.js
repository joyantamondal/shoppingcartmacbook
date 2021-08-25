// selected product price catch function 
function getInputValue(product){
    const productPrice = parseInt(document.getElementById(product+'-cost').innerText);
    return productPrice;
}

//total price sum 
function getTotalPrice(){
    const bestPrice = parseInt(document.getElementById('best-cost').innerText);
    const memoryPrice = getInputValue('memory');
    const storagePrice = getInputValue('storage');
    const deliveryCost =  getInputValue('delivery');
    const totalPriceSum = bestPrice+memoryPrice+storagePrice+deliveryCost;
    document.getElementById('total-cost').innerText = totalPriceSum ;
    return totalPriceSum;
}
// calculate total price without discount promocode
function CalculateTotalPrice(){
    const  totalPrice = document.getElementById('total-after-discount');  
    totalPrice.innerText = getTotalPrice();
}

// calculate total price using discount promocode
function calculateDiscountTotal(){
    const totalPrice = document.getElementById('total-after-discount');
    totalPrice.innerText = getTotalPrice();
    const userCode = document.getElementById('promo-code-input').value;
    if(userCode == 'stevekaku'){
    const  discountedPrice = getTotalPrice() - (getTotalPrice() * 20 / 100);
    totalPrice.innerText = Math.round(discountedPrice);
    document.getElementById('promo-code-input').style.display='none';
    document.getElementById('promo-code-btn').innerText= 'Applied';
    document.getElementById('promo-code-btn').disabled= true;
    }
    document.getElementById('promo-code-input').value= " ";   
}

// product extra prices 
function addPrice(extraAmountId,cost){
    const extraCost = parseInt(document.getElementById(extraAmountId).innerText=cost);
    extraCost.innerText = extraCost;
}

// memory button add event listener 
document.getElementById('memory-16gb').addEventListener('click',
function(){
    addPrice('memory-cost',180);
    CalculateTotalPrice();
});
document.getElementById('memory-8gb').addEventListener('click',
function(){
    addPrice('memory-cost',0);
    CalculateTotalPrice();
});

// storage button add event listener 
document.getElementById('storage-256gb').addEventListener('click',
function(){
    addPrice('storage-cost',0);
    CalculateTotalPrice();    
});

document.getElementById('storage-512gb').addEventListener('click',
function(){
    addPrice('storage-cost',100);
    CalculateTotalPrice();
   
});

document.getElementById('storage-1tb').addEventListener('click',
function(){
    addPrice('storage-cost',180);
    CalculateTotalPrice();
});

//// delivery cost button add event listener 
document.getElementById('delivry-free').addEventListener('click',
function(){
    addPrice('delivery-cost',0);
    CalculateTotalPrice();
});

document.getElementById('delivry-charge-20').addEventListener('click',
function(){
    addPrice('delivery-cost',20);
    CalculateTotalPrice();      
});

// promo code 
document.getElementById('promo-code-btn').addEventListener('click',
function(){
    calculateDiscountTotal();
    
});
