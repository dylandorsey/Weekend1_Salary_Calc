console.log('in js');

$(document).ready(onReady);

// declare global variables
let totalMonthlySalary = 0;
let employeeArray = [];


function onReady() {
    console.log('in jquery');
    $('#submitButton').on('click', submitClickHandler);
}// end function onReady

function submitClickHandler() {
    console.log('addemployee clicked');
    addNewEmployee();
}// end function submitClickHandler

// !this function needs to interact with employeeArray
function deleteClickHandler() {
    console.log('deletebutton clicked');
    $(this).parent().parent().remove();
}// end function deleteClickHandler

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
        // remove empty fields warning
        $('#completeAllFieldsWarning').empty();
        
        // construct new Employee from input data
        class Employee {
            constructor (newEmployeeFirstName, newEmployeeLastName, newEmployeeID, newEmployeeTitle, newEmployeeAnnualSalary){
                this.firstName= newEmployeeFirstName;
                this.lastName=newEmployeeLastName;
                this.employeeID=newEmployeeID;
                this.employeeTitle=newEmployeeTitle;
                this.employeeAnnualSalary=newEmployeeAnnualSalary;
            }
        }// end new Employee constructor

        // push new Employee to employeeArray
        let newEmployee = new Employee(newEmployeeFirstName, newEmployeeLastName, newEmployeeID, newEmployeeTitle, newEmployeeAnnualSalary);
        
        employeeArray.push(newEmployee);

        // confirm new Employee logs correctly
        console.log(employeeArray);

        $('#employeeInfoTable').empty();

        // append employeeArray to the DOM
        for (let i = 0; i < employeeArray.length; i++) {
            $('#employeeInfoTable').append(                
                '<tr>' + 
                    '<td>' + employeeArray[i].firstName + '</td>' +
                    '<td>' + employeeArray[i].lastName + '</td>' +
                    '<td>' + employeeArray[i].employeeID + '</td>' +
                    '<td>' + employeeArray[i].employeeTitle + '</td>' +
                    '<td>' + employeeArray[i].employeeAnnualSalary + '</td>' +
                    '<td><button class="deleteButton">Delete</button></td>' + 
                '</tr>');
        }

        //BASE MODE TABLE APPEND
        // $('#employeeInfoTable').append(                
        //     '<tr>' + 
        //         '<td>' + newEmployeeFirstName + '</td>' +
        //         '<td>' + newEmployeeLastName + '</td>' +
        //         '<td>' + newEmployeeID + '</td>' +
        //         '<td>' + newEmployeeTitle + '</td>' +
        //         '<td>' + newEmployeeAnnualSalary + '</td>' +
        //         '<td><button class="deleteButton">Delete</button></td>' + 
        //     '</tr>');

        // clear inputs
        clearInputs();
        
        // ! this function needs revision to work from employeeArray
        updateTotalMonthlySalary(newEmployeeAnnualSalary);


        $('.deleteButton').on('click', deleteClickHandler);
    }
}

// !convert this function to work from data stored in the employeeArray
function updateTotalMonthlySalary(newEmployeeAnnualSalary) {
    totalMonthlySalary += newEmployeeAnnualSalary/12;
    console.log(totalMonthlySalary);
    console.log('function updateMonthlySalary called');
    $('#totalMonthlySalaryOutput').text('Total Monthly: $' + totalMonthlySalary);
    if (totalMonthlySalary > 20000) {
        $('#totalMonthlySalaryOutput').css('background-color', 'red');
    }

}// end function updateTotalMonthlySalary

function clearInputs() {
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}// end function clearInputs




// displays objects from employeeArray on the DOM
// calculates salary info using data from the employeeArray
