var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }

}

//retrieve data
function readFormData(){
    var formData = {};
    formData['s_id'] = document.getElementById("s_id").value;
    formData['name']= document.getElementById("name").value;
    formData['age']= document.getElementById("age").value;
    formData['major']= document.getElementById("major").value;
    formData['province']= document.getElementById("province").value;
    return formData;
    
}

//insert data
function insertNewRecord(data){
    var table = document.getElementById("myTableData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.s_id;

    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.name;
    
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.age;

    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.major;

    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.province;

    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = "<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>"

    
    
}

//edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('s_id').value = selectedRow.cells[0].innerHTML;
    document.getElementById('name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('age').value = selectedRow.cells[2].innerHTML;
    document.getElementById('major').value = selectedRow.cells[3].innerHTML;
    document.getElementById('province').value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData){ 
    selectedRow.cells[0].innerHTML = formData.s_id;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.major;
    selectedRow.cells[4].innerHTML = formData.province;


}

function onDelete(td){
    if(confirm("Do you want to delete this record? ")){
        row = td.parentElement.parentElement;
        document.getElementById('myTableData').deleteRow(row.rowIndex);
    }

}

function deleteRecord(){ //works but need to specify the ID of where to delete then connect to the onDelete function
    onDelete();
    
}


