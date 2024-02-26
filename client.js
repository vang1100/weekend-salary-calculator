console.log('hello world');

function submitForm(event){
    console.log('submit');
    event.preventDefault();
    let employeeTable = document.querySelector('#peopleData');
    let firstNameVal = document.querySelector('#firstName').value;
    console.log(firstName);

    employeeTable.innerHTML += `
    <tr>
        <td>${firstNameVal}<td>
        <td><button onClick="deleteRemove(event)" class="remove-button">Remove</button></td>
    </tr>
    `
}