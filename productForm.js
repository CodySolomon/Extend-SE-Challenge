document.addEventListener('DOMContentLoaded', function() {

    // Initial variables
    const productForm = document.querySelector('.product-form');
    const productName = document.querySelector('.product-title');
    const image = document.querySelector('.product-image');
    const extendOffer = document.querySelector('.extend-offer');
    const variantSelect = document.getElementById('variant');
    let variantId;

    // Get default selected products variantId value
    if(variantSelect.options && variantSelect.options[variantSelect.selectedIndex]){
        defaultProduct = variantSelect.options[variantSelect.selectedIndex];
        if(defaultProduct && defaultProduct.value) {
            defaultProduct.setAttribute('selected', '')
            productName.innerText = defaultProduct.getAttribute('data-product-name');

            // Set the variantId to the default selected product
            variantId = defaultProduct.value;

            // Failsafe - If there is no variantId, return
            if(!variantId) return;
            
        }
    }

    // Attach event listener to the product form
    productForm.addEventListener('change', function(event) {
        // Clear all selected attributes and set the new one
        Array.from(variantSelect.options).forEach(option => option.removeAttribute('selected'));

        // Get the selected option
        const selectedOption = event.target.selectedOptions[0];

        // Failsafe - If there is no selected option, return
        if(!selectedOption) return;
        
        // Set the selected attribute to the selected option
        if (selectedOption) {
            selectedOption.setAttribute('selected', '');
            
            // Update the displayed product image and name
            if (selectedOption.getAttribute('data-image') && productName) {
                image.src = selectedOption.getAttribute('data-image');
                productName.textContent = selectedOption.getAttribute('data-product-name');
            }

            // Get the variantId of the current selected option
            variantId = selectedOption.value;

        }
    });
});
