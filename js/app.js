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
    document.getElementById('promo-code-btn').innerText='Promo Applied';
    }
    document.getElementById('promo-code-input').value= " ";   
}

// product extra prices 
function addPrice0(extraAmount0){
    const extraCost = parseInt(document.getElementById(extraAmount0).innerText='0');
    extraCost.innerText = extraCost;
}
function addPrice180(extraAmount180){
    const extraCost = parseInt(document.getElementById(extraAmount180).innerText='180');
    extraCost.innerText = extraCost;
}
function addPrice100(extraAmount100){
    const extraCost = parseInt(document.getElementById(extraAmount100).innerText='100');
    extraCost.innerText = extraCost;
}
function addDeliveryCost20(deliveryCost20){
    const deliveryCost = parseInt(document.getElementById(deliveryCost20).innerText='20');
    deliveryCost.innerText = deliveryCost;
}
// memory button add event listener 
document.getElementById('memory-16gb').addEventListener('click',
function(){
    addPrice180('memory-cost');
    CalculateTotalPrice();
});
document.getElementById('memory-8gb').addEventListener('click',
function(){
    addPrice0('memory-cost');
    CalculateTotalPrice();
});

// storage button add event listener 
document.getElementById('storage-256gb').addEventListener('click',
function(){
    addPrice0('storage-cost');
    CalculateTotalPrice();    
});

document.getElementById('storage-512gb').addEventListener('click',
function(){
    addPrice100('storage-cost');
    CalculateTotalPrice();
   
});

document.getElementById('storage-1tb').addEventListener('click',
function(){
    addPrice180('storage-cost');
    CalculateTotalPrice();
});

//// delivery cost button add event listener 
document.getElementById('delivry-free').addEventListener('click',
function(){
    addPrice0('delivery-cost');
    CalculateTotalPrice();
});

document.getElementById('delivry-charge-20').addEventListener('click',
function(){
    addDeliveryCost20('delivery-cost');
    CalculateTotalPrice();      
});

// promo code 
document.getElementById('promo-code-btn').addEventListener('click',
function(){
    calculateDiscountTotal();
    
});
