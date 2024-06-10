# Extend-SE-Challenge
Extend take home challenge for Solution &amp; Support Engineers

## Extend SDK documentation
- <a href="https://helloextend.github.io/extend-sdk-client/" target="_blank">Extend SDK Documentation</a>
  
# Instructions
### **You will be working in only index.html and productForm.js**

### - Pull or download this repository

- Add Extend SDK Script tag and Extend.config script to the ```<head>``` of the page
- Set the Extend.config storeId to a string of ```9e85ee4a-607b-467e-b97c-0c4d9b5241d0```
- Add a div with id of ```extend-offer``` above the add to cart button
- Inside of ```productForm.js``` add the Extend SDK buttons.render call and pass in the extend-offer div you created and the already provided variables of variantId, price and category.<br/>
(If you have done this correctly Extend offers should appear on the page during first page load)
- When the product form changes, call the setActiveProduct method and pass in the extend-offer div you created and the already provided variables of variantId, price and category.<br/>
(If you have done this correctly Extend offers will update when the selected product variant on the page has changed)

Once you have confirmed Extend offers render on initial page load and the offers update when changing product variants on the page, click an Extend offer and then click the add to cart button. You should see a window alert 'success' message show up

### **Once completed, zip project and email/share it with martin.liriano@extend.com

# Optional stretch goal:
- Add a checkbox above the add to cart button with the text of 'Add Protection?'
- The Extend offer should then be displayed if the box is checked and hidden if unchecked.
