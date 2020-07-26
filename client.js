console.log('js is working!');

$(document).ready(readyNow);

let storeInfo = []; // emplty global array

// this function is initializing Jquery
function readyNow(){
    console.log('jq is working!');

    $('#submitInfo').on('click', infoSubmitter);

    $('#target').on('click', '.deleteBtn', deleteEmployee);
    
}

// this function is supposed to submit the information put in the fields by the user
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

    $('#target').empty();
    
    
    // clearing the input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#employeeTitle').val('');
    $('#annualSalary').val('');

    $('#target').append(`<tr>
    <td>First Name</td>
    <td>Last Name</td>
    <td>ID</td>
    <td>Title</td>
    <td>Salary</td>
    </tr>`);

    for (let employeeData of storeInfo){
        $('#target').append(`
        <tr>
        <td>${employeeData.firstName}</td>
        <td> ${employeeData.lastName}</td> 
        <td>${employeeData.employeeID} </td> 
        <td>${employeeData.employeeTitle}</td> 
        <td>${employeeData.employeeSalary}</td>
        <td><button class="deleteBtn">Delete</button></td>
        </tr>`
        ); // adding employee's first name to the table
    }
}

function deleteEmployee(){
    console.log('in deleteEmployee');

    $(this).closest('tr').remove(); 
}

function calculateMonthlyCost(){
    console.log('in calculateMonthlyCost');

    // loop through storeInfo array
    let totalSalaryCost = 0;
    for(let i = 0; i < storeInfo.length; i++){
    // for each employee, add up total all the salaries entered
        totalSalaryCost += Number(storeInfo[i].employeeSalary)/12; // calculating the total monthly cost over a 12 month period
        $('#totalMonthlyCost').empty();

        if(totalSalaryCost > '20000'){
            console.log('monthly cost is over $20,000!');
            
            $('#totalMonthlyCost').append(`
            <h3 class="overMonthlyCost"> Total Monthly Cost: $${totalSalaryCost.toFixed(2)}</h3>`);  
        }
        else{
            $('#totalMonthlyCost').append(`Total Monthly Cost: $${totalSalaryCost.toFixed(2)}`)
        }
    }
    console.log('total salary cost: ', totalSalaryCost);
}

