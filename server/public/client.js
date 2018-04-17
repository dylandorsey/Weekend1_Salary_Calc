// console.log('in js');

$(document).ready(onReady);

// declare global variables
let totalMonthlySalary = 0;
let employeeArray = [];

function onReady() {
    // console.log('in jquery');
    $('#submitButton').on('click', submitClickHandler);
}// end function onReady

class Employee {
    constructor(newEmployeeFirstName, newEmployeeLastName, newEmployeeID, newEmployeeTitle, newEmployeeAnnualSalary) {
        this.firstName = newEmployeeFirstName;
        this.lastName = newEmployeeLastName;
        this.employeeID = newEmployeeID;
        this.employeeTitle = newEmployeeTitle;
        this.employeeAnnualSalary = newEmployeeAnnualSalary;
    }
}// end new Employee constructor


function submitClickHandler() {
    // console.log('addemployee clicked');
    // call function to store input data
    addNewEmployee();
}// end function submitClickHandler     

function deleteClickHandler() {
    // console.log('deletebutton clicked');
    // remove row of clicked delete button
    $(this).parent().parent().remove();
}// end function deleteClickHandler

function addNewEmployee() {
    // console.log('function addNewEmployee called');
    // store input data to variables
    let newEmployeeFirstName = $('#firstNameInput').val();
    let newEmployeeLastName = $('#lastNameInput').val();
    let newEmployeeID = $('#idInput').val();
    let newEmployeeTitle = $('#titleInput').val();
    let newEmployeeAnnualSalary = $('#annualSalaryInput').val();

    // case 1 : any of input fields are blank -> does not submit, requires complete inputs
    if (newEmployeeFirstName == '' || newEmployeeLastName == '' || newEmployeeID == ''
        || newEmployeeTitle == '' || newEmployeeAnnualSalary == '') {
        $('#completeAllFieldsWarning').empty();
        $('#completeAllFieldsWarning').append('<p class="warning">Please complete all fields!</p>');
    }
    // case 2: all input fields complete -> proceeds processing data
    else {
        // remove empty fields warning
        $('#completeAllFieldsWarning').empty();

        // construct new Employee from input data


        // push new Employee to employeeArray
        let newEmployee = new Employee(newEmployeeFirstName, newEmployeeLastName, newEmployeeID, newEmployeeTitle, newEmployeeAnnualSalary);
        employeeArray.push(newEmployee);

        // confirm new Employee logs correctly
        // console.log(employeeArray);

        // clear the employees table before appending employeeArray
        clearEmployeeTable();

        // append employeeArray to the DOM
        appendEmployeeArrayToEmployeeTable();

        // call clear inputs function
        clearInputs();

        // update total monthy salary - cannot yet handle pro-mode
        updateTotalMonthlySalary();

        // append monthly salary to the dom
        appendMonthlySalary();

        $('.deleteButton').on('click', deleteClickHandler);
    }
}

function appendEmployeeArrayToEmployeeTable() {
    for (let i = 0; i < employeeArray.length; i++) {
        $('#employeeInfoTable').append(
            '<tr id="' + employeeArray[i].employeeID + '">' +
            '<td>' + employeeArray[i].firstName + '</td>' +
            '<td>' + employeeArray[i].lastName + '</td>' +
            '<td>' + employeeArray[i].employeeID + '</td>' +
            '<td>' + employeeArray[i].employeeTitle + '</td>' +
            '<td>' + employeeArray[i].employeeAnnualSalary + '</td>' +
            '<td><button class="deleteButton">Delete</button></td>' +
            '</tr>')

    }
}

// cannot yet handle pro-mode
function updateTotalMonthlySalary() {
    // reset total monthly salary
    totalMonthlySalary = 0;
    // update total monthly salary with employeeArray data
    for (let i = 0; i < employeeArray.length; i++) {
        totalMonthlySalary += (employeeArray[i].employeeAnnualSalary) / 12;
    }
    // console.log('function updateMonthlySalary called');
}// end function updateTotalMonthlySalary

// append total monthly salary to the DOM
function appendMonthlySalary() {
    $('#out-monthly-cost').text(totalMonthlySalary.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    if (totalMonthlySalary > 20000) {
        $('#out-monthly-cost').css('background-color', 'red');
    }
}

function clearInputs() {
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}// end function clearInputs

function clearEmployeeTable() {
    $('#employeeInfoTable').empty();
}// end clearEmployeeTable
