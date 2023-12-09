const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const result = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

/* Solucion a cupones con objeto
const couponObjs = {
    'Batman': 30,
    'Superman': 25,
    'Robin': 15
};
*/

//Solucion de cupones con arrays

const couponList = [];

couponList.push({
    name: 'Batman',
    discount: 30,
});

couponList.push({
    name: 'Robin',
    discount: 25,
});

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if(!price || !inputCoupon) {
        result.innerText = 'Por favor, llena el formulario';
        return;
    } 
    
    let discount;

    function isCouponInArray(couponElement) {
        return couponElement.name == coupon;
    }


    const couponInArray = couponList.find(isCouponInArray);
    //Con arrays
    
        if(couponInArray) {
            discount = couponInArray.discount;
        } else {
            result.innerText = 'El cupón no es válido';
            return;
        }


/* Con objetos
    if(couponObjs[coupon]) {
        discount = couponObjs[coupon];
    }else {
        result.innerText = 'El cupón no es válido';
        return;
    }
*/



    const res = (price * (100 - discount)) / 100;
    result.innerText = `El precio final es: $${res}`;
}

  






