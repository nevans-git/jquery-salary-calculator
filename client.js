console.log('js is working!');

$(document).ready(readyNow);

let storeInfo = []; 

function readyNow(){
    console.log('jq is working!');

    $('#submitInfo').on('click', infoSubmitter);
    
}

// this function is supposed to submit the information put in the fields by the user
// refer to AwesomeApp.js for guidance/help
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
        console.log(collectSubmit); // logging information to console
    }
    storeInfo.push(collectSubmit);
    appendItemsToTable(); // calling function appendItemsToTable
    calculateMonthlyCost(); // calling function calculateMonthlyCost 

    // clearing the input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#employeeTitle').val('');
    $('#annualSalary').val('');
    
}

// this function adds the users data to the table 
function appendItemsToTable(){
    console.log('in appendItemsToTable: ');
    
    for (let employeeData of storeInfo){
        $('#target').append(`<td>
        ${employeeData.firstName} 
        </td>`); // adding employee's first name to the table

        $('#target').append(`<td>
        ${employeeData.lastName}
        </td>`); // adding employee's last name to the table

        $('#target').append(`<td>
        ${employeeData.employeeID}
        </td>`); // adding employee's ID to the table

        $('#target').append(`<td>
        ${employeeData.employeeTitle}
        </td>`); // adding employee's title to the table

        $('#target').append(`<td>
        ${employeeData.employeeSalary}
        </td>`); // adding employee's salary to the table 
    }
}

function calculateMonthlyCost(){
    console.log('in calculateMonthlyCost');

    // loop through storeInfo array
    let totalSalaryCost = 0;
    for(let i = 0; i < storeInfo.length; i++){
    // for each employee, add up total all the salaries entered
        totalSalaryCost += Number(storeInfo[i].employeeSalary)/12; // calculating the total monthly cost over a 12 month period

        $('#totalMonthlyCost').append(`<h3>
    Total Monthly Cost: $${totalSalaryCost}
    </h3>`); // ***** figure out how to properly display the total monthly cost
    }
    console.log('total salary cost: ', totalSalaryCost);

    if(totalSalaryCost > 20000){
        //$(this).closest('#totalMonthlyCost').toggleClass('overMonthlyCost'); // Currently trying to figure out how to get totalMonthlyCost to appear red
        $('#totalMonthlyCost').addClass('.overMonthlyCost');
    }

    let displayTotalSalaryCost = $('#totalMonthlyCost');
    //displayTotalSalaryCost.empty();
    //displayTotalSalaryCost.append(totalSalaryCost);
    
    
   
}

