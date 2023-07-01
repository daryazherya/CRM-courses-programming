const generateTestData = (function(){
    const GenerateTestItem = function(fullname,num,email,product){
        this.fullname = fullname;
        this.num = num;
        this.email = email;
        this.product = product;
    }

    const dataItems= [
       new GenerateTestItem('Василий Олейников','8-966-567-23-32','first@gmail.ru','course-js'),
       new GenerateTestItem('Мария Кожевникова','8-926-541-20-40','second@gmail.ru','course-js'),
       new GenerateTestItem('Петр Радзинский','8-930-507-21-33','third@gmail.ru','course-vue'),
       new GenerateTestItem('Кирилл Осадчий','8-942-529-28-92','fourth@gmail.ru','course-wordpress'),
       new GenerateTestItem('Лариса Резник','8-977-267-85-62','fifth@gmail.ru','course-html'),
       new GenerateTestItem('Юлия Донченко','8-941-568-00-12','sixth@gmail.ru','course-php')
    ]



    function randomItem(max) {
         const randomNumber = Math.floor(Math.random() * max)
        return dataItems[randomNumber];
    }


    function insertInUI () {
        const item = randomItem(dataItems.length);
        return {
        name: document.querySelector('#name').value = item.fullname,
        phone: document.querySelector('#phone').value = item.num,
        email: document.querySelector('#email').value = item.email,
        product: document.querySelector('#product').value = item.product,
        }
    }


    return {
        init: insertInUI 
    }
    


})();

generateTestData.init();