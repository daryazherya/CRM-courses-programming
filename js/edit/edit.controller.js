const editCntr = (function (modelCntr,editView){

    const userDataId = modelCntr.parseData('edit');
    const data = modelCntr.findTask(userDataId);
    editView.renderDataUser(data);

    editView.getDOM().editForm.addEventListener('submit',function(e){
            e.preventDefault();
            const editData = editView.getDataEdit();
            modelCntr.reloadTasks(editData);
    })


})(modelCntr,editView);