console.log('hello js');

// this button will submit the values from the input fields


// let fName = document.querySelector('#fName-input').value;
// let employeeData = document.querySelector('#employeeData');

let total = 0;
let monthly = 0;



function submitForm(event){
    event.preventDefault();
   // console.log('checking button');

    let fName = document.querySelector('#fName-input').value;
    let lName = document.querySelector('#lName-input').value;
    let id = document.querySelector('#id-input').value;
    let title = document.querySelector('#title-input').value;
    let salary = document.querySelector('#aSalary-input').value;
    let employeeData = document.querySelector('#employeeData');
    //let totalAnnualSalary = 0;

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

    

    total += Number(salary);
    //console.log(total);
    monthly = total/12;
    console.log(monthly);
 
    let totalDiv = document.querySelector('#total');

    totalDiv.innerHTML = `
    <h1>Total Monthly: ${monthly}</h1>
    `;

    document.querySelector('#fName-input').value = '';
    document.querySelector('#lName-input').value = '';
    document.querySelector('#id-input').value = '';
    document.querySelector('#title-input').value = '';
    document.querySelector('#aSalary-input').value = '';


    turnRed();
}

// this function will delete the rows

function deleteRow(event){
   // console.log('testing delete button', event);

   let deleteParent = event.target.parentElement;

   let deleteRow = deleteParent.parentElement;

  // console.log(deleteRow);

  deleteRow.remove();
}


function turnRed(){

    let background = document.querySelector('footer').classList.add('over-budget');
    
    if(monthly > 20000 ) {
        return  background;
    }
}


