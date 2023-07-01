const viewCntr = (function() {

   const DOMElements = {
        form :document.querySelector('#form'),
        formName : document.querySelector('#name'),
        formPhone : document.querySelector('#phone'),
        formEmail : document.querySelector('#email'),
        formProduct: document.querySelector('#product')
    }

    function formData () { 
        return  {
            name: DOMElements.formName.value,
            phone: DOMElements.formPhone.value,
            email: DOMElements.formEmail.value,
            product: DOMElements.formProduct.value
        }
    }


    return {
        getDOM : function () {
           return DOMElements;
        },
        formData: formData
    }


})();