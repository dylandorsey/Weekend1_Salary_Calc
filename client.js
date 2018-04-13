console.log('in js');

$(document).ready(onReady);

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
    updateTotalMonthlySalary();
}

function updateTotalMonthlySalary() {
    console.log('function updateMonthlySalary called');

}