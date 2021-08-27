
function totalValue(fixed,specific,id1,id2){
     const oneId = document.getElementById(id1 + '-extra').innerText;
     const oneIdValue = parseFloat(oneId);

     const secondId = document.getElementById(id2 + '-extra').innerText;
     const secondIdValue = parseFloat(secondId);
     console.log(parseFloat(fixed) + specific + oneId + secondId);
     document.getElementById('total-price').innerText = fixed + specific + oneIdValue + secondIdValue;
    //  bonous-total
     document.getElementById('bonous-total').innerText = fixed + specific + oneIdValue + secondIdValue;
}

function getValue(id,check,value){
    let getId = document.getElementById(id + '-extra')
    const fixedValueText = document.getElementById('best-price').innerText;
    const fixedValue = parseFloat(fixedValueText);

    if(check==1){
        if(value==0){
            getId.innerText = 0;
            getId = 0;
        }
        else if(value==180){
            getId.innerText = 180;
            getId = 180;
        }
        totalValue(fixedValue,getId,'storage-cost','delivery-charge');
    }
    else if(check==2){
        if(value==0){
            getId.innerText=0;
            getId = 0;
        }
        else if(value==100){
            getId.innerText = 100;
            getId = 100;
        }
        else if(value==180){
            getId.innerText = 180;
            getId = 180;
        }

        totalValue(fixedValue,getId,'memory-cost','delivery-charge');
    }
    else if(check==3){
        if(value==0){
            getId.innerText = 0;
            getId = 0;
        }
        else if(value==20){
            getId.innerText = 20;
            getId = 20;
        }

        totalValue(fixedValue,getId,'memory-cost','storage-cost');
    }

}


// all about memory
document.getElementById('memory-8gb').addEventListener('click',function(){
    
    getValue('memory-cost',1,0);
    
});

document.getElementById('memory-16gb').addEventListener('click',function(){
    
    getValue('memory-cost',1,180);
});

// all about storage
document.getElementById('storage-256gb').addEventListener('click',function(){
    
    getValue('storage-cost',2,0);
  
});

document.getElementById('storage-512gb').addEventListener('click',function(){
   
    getValue('storage-cost',2,100);
});

document.getElementById('storage-1tb').addEventListener('click',function(){
    
    getValue('storage-cost',2,180);
});

//all about delivery charge
document.getElementById('free-delivery').addEventListener('click',function(){
    
    getValue('delivery-charge',3,0);
  
});

document.getElementById('charge-delivery').addEventListener('click',function(){
    
    getValue('delivery-charge',3,20);

});

// all about promo code
document.getElementById('promo-button').addEventListener('click',function(){
     const promoInput = document.getElementById('promo-input');
     const promoValue = promoInput.value;

     if(promoValue.toLowerCase()=='stevekaku'){
        const totalPrice = document.getElementById('bonous-total');
        const totalPriceText = totalPrice.innerText;

        // const bonousTotalPrice = document.getElementById('bonous-total');

        let totalValue = parseFloat(totalPriceText);
       
        totalValue -= totalValue * .20;
        totalPrice.innerText = totalValue;
        // bonousTotalPrice.innerText = totalValue;
     }
     else{
         const showMsg = document.getElementById('show');
         showMsg.style.display = 'block';
     } 
});