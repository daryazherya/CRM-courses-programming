const editView = (function() {

    const DOMElements =  {
        editForm: document.querySelector("#form"),
        editNum: document.querySelector("#number"),
        editDate: document.querySelector("#date"),
        editProduct: document.querySelector("#product"),
        editName: document.querySelector("#name"),
        editEmail: document.querySelector("#email"),
        editPhone: document.querySelector("#phone"),
        editStatus: document.querySelector("#status")

    }

    function renderDataUser(obj){
        DOMElements.editNum.textContent = obj.id;
        DOMElements.editDate.textContent = `${timer(obj.date,"date")} ${timer(obj.time,"time")}`;
        DOMElements.editName.value = obj.name;
        DOMElements.editPhone.value = obj.phone;
        DOMElements.editEmail.value = obj.email;
        DOMElements.editProduct.value = obj.product;
        DOMElements.editStatus.value = obj.status;
    }

    function timer(string,name) {
        if(name === "date") {
            return new Date(string).toLocaleDateString()
        } else if (name === "time") {
             return new Date(string).toLocaleTimeString()
        }
    }
            
       
    function getDataEdit () {
        return  {
            id: parseInt(DOMElements.editNum.textContent),
            name: DOMElements.editName.value,
            phone: DOMElements.editPhone.value,
            email: DOMElements.editEmail.value,
            product: DOMElements.editProduct.value,
            status: DOMElements.editStatus.value
    }
}
    

    return {
        getDOM : function (){
            return DOMElements
        },
        renderDataUser: renderDataUser,
        getDataEdit:  getDataEdit
    }

})();

