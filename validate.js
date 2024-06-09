// Do not modify this file
document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.querySelector('.product-form');
    const addToCartButton = document.querySelector('.add-to-cart-button');
    const extendOffer = document.querySelector('.extend-offer');
    const ExtendSDK = window.Extend;

    if(!addToCartButton || !productForm || !extendOffer || !ExtendSDK) return;

    addToCartButton.addEventListener('click', function(event) {
        if(Extend.buttons.instance(extendOffer) && Extend.buttons.instance(extendOffer).getPlanSelection()){
            window.alert('Extend plan selected! - SUCCESS! 🎉')
        }
    });

});