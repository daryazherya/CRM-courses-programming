const tableView = (function() {

    const DOMElements =  {
        table: document.querySelector(".table"),
        tableBody : document.querySelector('#tbody'),
        tableRows : document.getElementsByTagName('tr'),
        productSelect: document.querySelector("#productSelect"),
        allStatuses: document.querySelector("#topStatusBar"),
        listLeftPanel: document.querySelector(".left-panel__navigation"),
        badgeNew: document.querySelector("#badge-new")

    }

    const statusObj = {
        all: "Все",
        new: "Новая",
        inwork: "В работе",
        complete: "Завершена"
    }

    const productObj = {
        "course-php": 'Курс по PHP',
        "course-html": 'Курс по HTML',
        "course-wordpress": 'Курс по WordPress',
        "course-vue": 'Курс по Vue',
        "course-js": 'Курс по JavaScript'
    }


    function renderData(data) {
        DOMElements.tableBody.innerHTML = "";  

        const statusClass = {
            new: 'badge-danger',
            inwork: 'badge-warning',
            complete: 'badge-success'
        }


        data.forEach(function(item) {
           

            let html = `
            <tr data-id="${item.id}">
                <th  scope="row">${item.id}</th>
                <td>${new Date(item.date).toLocaleDateString()}</td>
                <td>${productObj[item.product]}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>
                    <div class="badge badge-pill ${statusClass[item.status]}">${statusObj[item.status]}</div>
                </td>
                <td>
                    <a data-item ="correct" href="edit.html">Редактировать</a>
                </td>
            </tr>
    `; 

        DOMElements.tableBody.insertAdjacentHTML('beforeend',html)
    
        
        })
       
    }

   

    return {
        getDOM: function () {
            return DOMElements
        },
        renderData: renderData,
      
    }
 
})();