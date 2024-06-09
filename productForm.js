document.addEventListener('DOMContentLoaded', function() {

    // Initial variables
    const productForm = document.querySelector('.product-form');
    const productName = document.querySelector('.product-title');
    const productPriceElement = document.querySelector('.product-price');
    const image = document.querySelector('.product-image');
    const variantSelect = document.getElementById('variant');
    let variantId;
    let productPrice;
    let category;

    // Get default selected products variantId value
    if(variantSelect.options && variantSelect.options[variantSelect.selectedIndex]){
        defaultProduct = variantSelect.options[variantSelect.selectedIndex];
        if(defaultProduct && defaultProduct.value && defaultProduct.getAttribute('data-product-price') && defaultProduct.getAttribute('data-product-category') && defaultProduct.getAttribute('data-product-name')){
            defaultProduct.setAttribute('selected', '')
            productName.innerText = defaultProduct.getAttribute('data-product-name');
            productPriceElement.innerText = `$${defaultProduct.getAttribute('data-product-price')}`;

            // Set the variantId to the default selected product
            variantId = defaultProduct.value;
            productPrice = parseInt(defaultProduct.getAttribute('data-product-price')) * 100;
            category = defaultProduct.getAttribute('data-product-category');

            // Failsafe - If there is no variantId, return
            if(!variantId || !productPrice || !category) return;

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
            if (selectedOption.getAttribute('data-image') && productName && productPriceElement) {
                image.src = selectedOption.getAttribute('data-image');
                productName.textContent = selectedOption.getAttribute('data-product-name');
                productPriceElement.textContent = `$${selectedOption.getAttribute('data-product-price')}`;
            }

            // Failsafe - If there is no price or category or variantId, return
            if(!selectedOption.getAttribute('data-product-price') || !selectedOption.getAttribute('data-product-category') || !selectedOption.value) return;

            // Get the variantId, price, and category from the selected option
            variantId = selectedOption.value;

            // Update the variantId in url
            window.history.pushState(null, null, `?variant=${variantId}`);

            productPrice = parseInt(selectedOption.getAttribute('data-product-price')) * 100;
            category = selectedOption.getAttribute('data-product-category');

            // Failsafe - If there is no variantId, return
            if(!variantId || !productPrice || !category) return;
            
        }
    });
});
