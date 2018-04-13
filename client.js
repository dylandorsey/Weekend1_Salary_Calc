console.log('in js');

$(document).ready(onReady);

let totalMonthlySalary = 0;

function onReady() {
    console.log('in jquery');
    $('#submitButton').on('click', clickHandler);
}

function clickHandler() {
    console.log('addemployee clicked');
    addNewEmployee();
}

function addNewEmployee() {
    console.log('function addNewEmployee called');
    // updateTotalMonthlySalary();
    let newEmployeeFirstName = $('#firstNameInput').val();
    let newEmployeeLastName = $('#lastNameInput').val();
    let newEmployeeID = $('#idInput').val();
    let newEmployeeTitle = $('#titleInput').val();
    let newEmployeeAnnualSalary = $('#annualSalaryInput').val();
    $('#employeeInfoTable').append(                
    '<tr>' + 
        '<td>' + newEmployeeFirstName + '</td>' +
        '<td>' + newEmployeeLastName + '</td>' +
        '<td>' + newEmployeeID + '</td>' +
        '<td>' + newEmployeeTitle + '</td>' +
        '<td>' + newEmployeeAnnualSalary + '</td>' +
    '</tr>');
    updateTotalMonthlySalary(newEmployeeAnnualSalary);
    clearInputs();
}

function updateTotalMonthlySalary(newEmployeeAnnualSalary) {
    totalMonthlySalary += newEmployeeAnnualSalary/12;
    console.log(totalMonthlySalary);
    console.log('function updateMonthlySalary called');

}

function clearInputs() {
    $('#firstNameInput').empty();
    $('#lastNameInput').empty();
    $('#idInput').empty();
    $('#titleInput').empty();
    $('#annualSalaryInput').empty();
}