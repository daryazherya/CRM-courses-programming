const modelCntr = (function() {

    let data = checkData();

    const filter = {
        product: 'all',
        status: 'all'
    }
    
    
    function checkData() {
        if(localStorage.getItem('request')) {
            return  JSON.parse(localStorage.getItem('request'));
        } else {
            return [];
        }
    };

    function changeFilterProduct(props,value){
        const currentFilter = (filter[props] = value);
        return {...filter,product: currentFilter};
    }


    function changeFilterStatus(props,value){
        const currentFilter = (filter[props] = value);
        return {...filter,status: currentFilter};
    }

    function filterRequests(currentFilter) {
        let tasks;

        if(currentFilter.product !== 'all') {
            tasks = data.filter(
                (request) => request.product === currentFilter.product
            );

        } else if(currentFilter.product === 'all') {
            tasks = [...data];
        }


        if(currentFilter.status !== 'all') {
            tasks = tasks.filter(
                (request) => request.status === currentFilter.status
            );
        }
        return tasks;
    }
    
    function addRequest (obj) {
        let ID = 0;

        if(data.length >= 1) {
            ID = data[data.length - 1].id + 1;
        } else {
            ID = 0;
        }

        const newObj = {
            ...obj,
            id: ID,
            date : new Date(),
            time: new Date(),
            status: "new"
        }
        data.push(newObj);
        saveToLS('request',data);
    }

    function saveToLS (key,dataLS) {
        localStorage.setItem(key,JSON.stringify(dataLS));
    }

    function findTask(id){
        const req = data.find(el => el.id == id);
        return req;
    }
    function reloadTasks(editData){

        const request = findTask(editData.id);

        request.name = editData.name;
        request.phone = editData.phone;
        request.email = editData.email;
        request.status= editData.status;
        request.product = editData.product;

        saveToLS('request',data);
    }

    function parseData (key) {
         return JSON.parse(localStorage.getItem(key));
    }

    function showStatusNew() {
        const newData = data.filter((i) => {
            if(i.status == 'new'){
                return i
            }
        })
        return newData
    }

    return {
        getData: function () {
            return data
        },
        addRequest: addRequest,
        saveToLS: saveToLS,
        findTask: findTask,
        reloadTasks: reloadTasks,
        parseData: parseData,
        checkData: checkData,
        changeFilterProduct: changeFilterProduct,
        filterRequests: filterRequests,
        changeFilterStatus: changeFilterStatus,
        showStatusNew: showStatusNew
        
    }

})();