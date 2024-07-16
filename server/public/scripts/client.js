console.log('hello js');

// this button will submit the values from the input fields


// let fName = document.querySelector('#fName-input').value;
// let employeeData = document.querySelector('#employeeData');



function submitForm(event){
    event.preventDefault();
    console.log('checking button');

    let fName = document.querySelector('#fName-input').value;
    let lName = document.querySelector('#lName-input').value;
    let id = document.querySelector('#id-input').value;
    let title = document.querySelector('#title-input').value;
    let salary = document.querySelector('#aSalary-input').value;
    let employeeData = document.querySelector('#employeeData');

    //console.log('first name', fName);
    employeeData.innerHTML += `
    <tr>
        <td>${fName}</td>
        <td>${lName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${salary}</td>
        <td><button data-testid="submitButton" onClick="deleteRow(event)">Delete</button></td>
    
    </tr>
    `;
}

// this function will delete the rows

function deleteRow(event){
   // console.log('testing delete button', event);

   let deleteParent = event.target.parentElement;

   let deleteRow = deleteParent.parentElement;

  // console.log(deleteRow);

  deleteRow.remove();
}