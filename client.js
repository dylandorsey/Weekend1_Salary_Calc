console.log('in js');

$(document).ready(onReady);

let totalMonthlySalary = 0;
let employeeArray = [];

function onReady() {
    console.log('in jquery');
    $('#submitButton').on('click', submitClickHandler);
}

function submitClickHandler() {
    console.log('addemployee clicked');
    addNewEmployee();
}

function deleteClickHandler() {
    console.log('deletebutton clicked');
    $(this).parent().parent().remove();
}

function addNewEmployee() {
    console.log('function addNewEmployee called');
    // updateTotalMonthlySalary();
    let newEmployeeFirstName = $('#firstNameInput').val();
    let newEmployeeLastName = $('#lastNameInput').val();
    let newEmployeeID = $('#idInput').val();
    let newEmployeeTitle = $('#titleInput').val();
    let newEmployeeAnnualSalary = $('#annualSalaryInput').val();
    // case: any of input fields are blank -> does not submit, requires complete inputs
    if (newEmployeeFirstName == '' || newEmployeeLastName == '' || newEmployeeID == '' 
    || newEmployeeTitle == '' || newEmployeeAnnualSalary == '') {
        $('#completeAllFieldsWarning').empty();
        $('#completeAllFieldsWarning').append('<p class="warning">Please complete all fields!</p>');
    }
    // case: all input fields complete -> proceeds processing data
    else {
        $('#completeAllFieldsWarning').empty();
        $('#employeeInfoTable').append(                
            '<tr>' + 
                '<td>' + newEmployeeFirstName + '</td>' +
                '<td>' + newEmployeeLastName + '</td>' +
                '<td>' + newEmployeeID + '</td>' +
                '<td>' + newEmployeeTitle + '</td>' +
                '<td>' + newEmployeeAnnualSalary + '</td>' +
                '<td><button class="deleteButton">Delete</button></td>' + 
            '</tr>');
            updateTotalMonthlySalary(newEmployeeAnnualSalary);
            clearInputs();
            $('.deleteButton').on('click', deleteClickHandler);12
        class Employee {
            constructor (newEmployeeFirstName, newEmployeeLastName, newEmployeeID, newEmployeeTitle, newEmployeeAnnualSalary){
                this.firstName= newEmployeeFirstName;
                this.lastName=newEmployeeLastName;
                this.employeeID=newEmployeeID;
                this.employeeTitle=newEmployeeTitle;
                this.employeeAnnualSalary=newEmployeeAnnualSalary;
            }
        }
        let newEmployee = new Employee(newEmployeeFirstName, newEmployeeLastName, newEmployeeID, newEmployeeTitle, newEmployeeAnnualSalary);
        employeeArray.push(newEmployee);
        console.log(employeeArray);
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



// submit button pushed
// constructs new employee
// pushes new employee to employeeArray
// displays objects from employeeArray on the DOM
// calculates salary info using data from the employeeArray
