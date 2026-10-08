function addStudent(){

    let id = document.getElementById("studentId").value;
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let semester = document.getElementById("semester").value;

    if(id == "" || name == "" || email == ""){

        alert("Please fill all details");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = email;
    row.insertCell(3).innerHTML = course;
    row.insertCell(4).innerHTML = semester;

    row.insertCell(5).innerHTML =
        '<button class="delete" onclick="deleteStudent(this)">Delete</button>';

    updateTotal();

    document.getElementById("studentForm").reset();

    alert("Student added successfully!");
}


function deleteStudent(button){

    let row = button.parentNode.parentNode;

    row.remove();

    updateTotal();
}


function updateTotal(){

    let table = document.getElementById("studentTable");

    let total = table.rows.length;

    document.getElementById("total").innerHTML = total;
}


function searchStudent(){

    let search = document.getElementById("search").value.toLowerCase();

    let table = document.getElementById("studentTable");

    let rows = table.getElementsByTagName("tr");

    for(let i = 0; i < rows.length; i++){

        let name = rows[i].cells[1].innerHTML.toLowerCase();

        if(name.includes(search)){
            rows[i].style.display = "";
        }
        else{
            rows[i].style.display = "none";
        }
    }
}
