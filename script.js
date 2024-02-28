console.log('hello world');

let salaryCombined = 0;
let monthlySalary = 0;

function submitForm(event){
    console.log('submit');
    event.preventDefault();
    let employeeTable = document.querySelector('#peopleData');
    let firstNameVal = document.querySelector('#firstName').value;
    let lastNameVal = document.querySelector('#lastName').value;
    let id = document.querySelector('#idNum').value;
    let jobTitle = document.querySelector('#position').value;
    let annualSalary = document.querySelector('#salary').value;
    //console.log(firstName);

    employeeTable.innerHTML += `
    <tr>
        <td>${firstNameVal}</td>
        <td>${lastNameVal}</td>
        <td>${id}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button onClick="deleteRemove(event)" class="remove-button">Remove</button></td>
    </tr>
    `
    clearFields();

let totalMonthly = document.querySelector('#total-monthly');

salaryCombined += Number(annualSalary);
 console.log('Combined salary:', salaryCombined);
monthlySalary = salaryCombined / 12;
// appeneding the monthly pay to the DOM
totalMonthly.innerHTML = `
<p>Total Monthly: $${monthlySalary}</p>
`
}




function deleteRemove(event){
    console.log(event.target);
    event.target.parentElement.parentElement.remove();
}

function clearFields(){
 document.getElementById("firstName").value = "";
 document.getElementById("lastName").value = "";
 document.getElementById("idNum").value = "";
 document.getElementById("position").value = "";
 document.getElementById("salary").value = "";
}



