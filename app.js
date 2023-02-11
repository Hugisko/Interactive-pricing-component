const viewsArray = [10,50,100,500,1];
const priceArray = [8,12,16,24,36];
const slider = document.querySelector('.slider');
const fullBar = document.querySelector('.full-bar');
const checkToggle = document.querySelector('.check-input');
const viewValue = document.querySelector('.views-value');
const priceValue = document.querySelector('.price-value');
let value = slider.value;
let price = priceArray[value-1];

priceValue.textContent = (`$${price}.00`);
viewValue.textContent = (`${viewsArray[value-1]}K`);

checkToggle.addEventListener('change', () => {
    price = priceArray[value-1];
    if(checkToggle.checked){
        price -= (price / 4);
    }
    priceValue.textContent = (`$${price}.00`);
    viewValue.textContent = (`${viewsArray[value-1]}K`);
});


slider.addEventListener('input', () => {
    value = slider.value;
    price = priceArray[value-1];
    if(checkToggle.checked){
        price -= (price / 4);
    }

    switch(value) {
        case '1':
            fullBar.style.width = '0%';
            break;
        case '2':
            fullBar.style.width = '25%';
            break;
        case '3':
            fullBar.style.width = '50%';
            break;
        case '4':
            fullBar.style.width = '75%';
            break;
        case '5':
            fullBar.style.width = '100%';
            break;            
    }
     
    viewValue.textContent = (value === '5') ? (`${viewsArray[value-1]}M`) : (`${viewsArray[value-1]}K`);
    priceValue.textContent = (`$${price}.00`);
});




