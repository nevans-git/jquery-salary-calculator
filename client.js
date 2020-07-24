console.log('js is working!');

$(document).ready(readyNow);

function readyNow(){
    console.log('jq is working!');

    $('#submitInfo').on('click', infoSubmitter);
    
}

function infoSubmitter(){
    console.log('info submitted!');
    let collectSubmit = {
        firstName: $('#firstName').val(), // collecting first name
        lastName: $('#lastName').val(), // collecting last name
        employeeID: $('#employeeID').val(), // collecting employee ID
        employeeTitle: $('#employeeTitle').val(), // collecting employee title
        employeeSalary: $('#annualSalary').val(), // collecting employee annual salary 
    };

    // preventing user from entering no item
    if(collectSubmit.firstName === '' || collectSubmit.lastName === '' || collectSubmit.employeeID === '' || collectSubmit.employeeTitle === '' || collectSubmit.employeeSalary === ''){
        alert('Please enter all fields');
    } else {
        console.log(collectSubmit);
    }
}
