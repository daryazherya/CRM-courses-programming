const tableCntr = (function(modelCntr,tableView) {

    const data = modelCntr.getData();
    tableView.renderData(data);
    
    const tableDOMELements = tableView.getDOM();
    const number = modelCntr.showStatusNew();
    tableDOMELements.badgeNew.textContent = number.length;
    
    tableDOMELements.table.addEventListener('click',function(e) {
        // e.preventDefault()
            if(e.target.hasAttribute("data-item")) {
                
            const id = e.target.closest('tr').getAttribute('data-id');
                    modelCntr.saveToLS('edit',id)
                }
             }) 

    tableDOMELements.productSelect.addEventListener('change',function (e) {
        const currentFilter = modelCntr.changeFilterProduct('product',this.value);
        const filteredReq = modelCntr.filterRequests(currentFilter);
        tableView.renderData(filteredReq);
       
    })

    tableDOMELements.allStatuses.addEventListener('click',(e)=>{
        const currentFilter = modelCntr.changeFilterStatus('status',e.target.dataset.value);
         const filteredReq = modelCntr.filterRequests(currentFilter); 
        tableView.renderData(filteredReq);
        
    })

    tableDOMELements.listLeftPanel.addEventListener('click',(e)=>{
        const currentFilter = modelCntr.changeFilterStatus('status',e.target.dataset.value);
        const filteredReq = modelCntr.filterRequests(currentFilter); 
        tableView.renderData(filteredReq);
    })

})(modelCntr,tableView)