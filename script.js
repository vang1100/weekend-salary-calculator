console.log('hello world');

let totalAnnualSalary=0;

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

let annualSalary = document.querySelector('#salary').value;

totalAnualSalary += Number(annualSalary);

console.log('totalAnualSalary:', totalAnualSalary);

document.querySelector('span').innerText = `${totalAnualSalary / 12}`;


