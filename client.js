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
    if (newEmployeeFirstName == '' || newEmployeeLastName == '' || newEmployeeID == '' 
    || newEmployeeTitle == '' || newEmployeeAnnualSalary == '') {
        $('#completeAllFieldsWarning').empty();
        $('#completeAllFieldsWarning').append('<p class="warning">Please complete all fields!</p>');
    }
    else {
        $('#completeAllFieldsWarning').empty();
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
}

function updateTotalMonthlySalary(newEmployeeAnnualSalary) {
    totalMonthlySalary += newEmployeeAnnualSalary/12;
    console.log(totalMonthlySalary);
    console.log('function updateMonthlySalary called');
    $('#totalMonthlySalaryOutput').text('Total Monthly: $' + totalMonthlySalary);
    if (totalMonthlySalary > 20000) {
        $('#totalMonthlySalaryOutput').css('background-color', 'red');
    }
}

function clearInputs() {
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}
