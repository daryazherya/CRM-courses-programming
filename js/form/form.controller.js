const controller = (function(modelCntr,viewCntr) {
    let DomEl = viewCntr.getDOM();
         
        DomEl.form.addEventListener('submit',function(e){
            e.preventDefault(); 
           const testData = viewCntr.formData();
            modelCntr.addRequest(testData);
            generateTestData.init();
        })
    

})(modelCntr,viewCntr);