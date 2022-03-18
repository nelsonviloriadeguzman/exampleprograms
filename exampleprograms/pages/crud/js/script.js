const data = {
    head:{
        title : "CRUD Data"
    },
    div:{
        headerTitle : "CRUD Data",
        headerCloseText : "Close",
        headerCloseName : document.getElementsByClassName("header-close")[0]
    },
    clickedIndexTrigger : -1,
    tableId : document.getElementById('sampleTable'),
    firstNameId : document.getElementById("firstName"),
    lastNameId : document.getElementById("lastName"),
    ageId : document.getElementById("age"),
    statusId : document.getElementById("status")
}

data.div.headerCloseName.addEventListener('click', () => {
        window.location.href = "../../index.html";
});

document.title = data.head.title;
document.getElementsByClassName("header-title")[0].innerText = data.div.headerTitle;
document.getElementsByClassName("header-close")[0].innerText = data.div.headerCloseText;

data.tableId.rows[0].cells[4].width = '160px' // GET ROW POSITION AND CELL POSITION AND ASSIGN VALUE

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('sampleForm').addEventListener('submit', upsert)
})

function upsert(e){

    e.preventDefault(); // STOP RELOADING PAGE
    let specificForm = e.target;
    let specificFormData = new FormData(specificForm) // convertFD2JSON(fd) 
    
    if (data.clickedIndexTrigger === -1){
        // INSERT NEW DATA IN TABLE
        let row = data.tableId.insertRow(-1) // GET ROW INDEX

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerText = specificFormData.get('firstName');
        cell2.innerText = specificFormData.get('lastName');
        cell3.innerText = specificFormData.get('age');
        cell4.innerText = specificFormData.get('status');
        cell5.innerHTML = `<button class="btn btnred" onClick="deleteData(this.parentElement.parentElement)">Delete</button>
                            <button class="btn btngreen" onClick="updateData(this.parentElement.parentElement)">Update</button>`;

    }else
    {
        let selectedRow = data.tableId.rows[data.clickedIndexTrigger];
        selectedRow.cells[0].innerText = specificFormData.get('firstName');
        selectedRow.cells[1].innerText = specificFormData.get('lastName');
        selectedRow.cells[2].innerText = specificFormData.get('age');
        selectedRow.cells[3].innerText = specificFormData.get('status');
    }
    clearData(); 
}

function updateData(clickedIndex){
    data.clickedIndexTrigger = clickedIndex.rowIndex
    let selectedRow = data.tableId.rows[data.clickedIndexTrigger];
    data.firstNameId.value = selectedRow.cells[0].innerText
    data.lastNameId.value = selectedRow.cells[1].innerText
    data.ageId.value = selectedRow.cells[2].innerText
    data.statusId.value = selectedRow.cells[3].innerText
}

function deleteData(clickedIndex){
    data.clickedIndexTrigger = -1;
    data.tableId.deleteRow(clickedIndex.rowIndex); // TABLE ROW COUNT START TO ONE
    clearData();
   
}

function clearData(){
    data.clickedIndexTrigger = -1;
    data.firstNameId.value = ''
    data.lastNameId.value = '';
    data.ageId.value = '';
    data.statusId.value = 'Unmarried';
}

// function convertFD2JSON(formData){
//     let obj = {};
//     for (let key of specificFormData.keys()){
//         obj[key] = specificFormData.get(key);
//     }
//     return obj;
// }