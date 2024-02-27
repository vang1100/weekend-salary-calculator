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
    
}

function deleteRemove(event){
    console.log(event.target);
    event.target.parentElement.parentElement.remove();
}

// function clearFields(){
//     document.getElementById("submitButtonForm").value = "";
// }

// clearFields();

// function calculateSalary () {
//     let totalMonthly = document.querySelector('span').innerText;
//     console.log('testing total monthly', totalMonthly);
//     return totalMonthly += annualSalary;
// }

function add(){
    let annualSalary = document.querySelector('#salary').value;
    return totalAnnualSalary += annualSalary;
}

add();
console.log('totalAnnualSalary:', totalAnnualSalary);

//document.querySelector('span').innerText = `${totalAnnualSalary / 12}`;
