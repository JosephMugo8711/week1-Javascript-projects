//monthly PAYE 

//DOM Manipulation
const form = document.querySelector('form#salaryForm');
const salary = document.getElementById('basicSalary');
const allowance = document.getElementById('allowance');
const htmlNssf = document.getElementById('nssf')
const htmlNhif = document.querySelector('p#nhif')
const payee = document.getElementById('paye')
const htmlNet = document.getElementById('mynet')


//console.log(input)

//listening to submit button on the form
form.addEventListener('submit', (event) =>{
    //The event listener has a default of sending content to the browser
    //to prevent this we use preventDefault
    event.preventDefault();//prevents reloading on submission
    //takes value from salary input and stores in basic variable
    const basic = salary.value; 
    //event.target
    console.log(basic)
    //takes variable basic and passes it to other functions
    calcNetSalary(basic)});

// this function calculates the user's net salary

//Net salary is what an employee takes home after adding allowances and 
//subtracting the required deductions.
  //passes the basic variable to other functions
  // I can pass any name to our function
function calcNetSalary(input){
    const nssf = nssfDeduction(input);
    const nhif = nhifDeduction(input);
    const payeTax = checkPayee(input);
    //parseFloat changes string to float
    // grossSalary = allowance + salary
    const grossSalary = parseFloat(input) + parseFloat(allowance.value);
    // This is the total amount received after deductions
    const netSalary = grossSalary - payeTax -nssf -nhif;
    // loads content to the DOM
    // 
    htmlNet.innerHTML = `Net Salary: ${netSalary}`
    //console.log(netSalary, 'netSalary', grossSalary, ' grossSalary');
    //console.log('nssf',nssf, ' nhif', nhif,' payeTax', payeTax)
   // console.log(allowance.value, ' allowance', input, ' input')
}



//remember input is gross input
//Takes in the  salary as basic and calculates the payee
//I can change the name of the function as long as all variables use the same name in invocation parameter
function checkPayee(input){
    if(input >=0 && input <= 24000){ 
    //AMount deducted on his/her salary according the salary
        let payeeValue = 0.1*input      
       // return payee.textContent = `PAYE: ${payeeValue}`
        payee.innerHTML = `PAYE: ${payeeValue}`
        return payeeValue
    }else if(input >24000 && input <= 32333){ 
        let payeeValue = 0.25*input     
        //return payee.textContent = `PAYE: ${payeeValue}`
        payee.innerHTML = `PAYE: ${payeeValue}`
        return payeeValue
    }else if(input > 32333){ 
        let payeeValue = 0.30*input       
     //   return payee.textContent= `PAYE: ${payeeValue}`
        payee.innerHTML = `PAYE: ${payeeValue}`
        return payeeValue
    }

}


//Takes in the salary and and calculates the nhif deductions
function nhifDeduction(input){
    if(input>0 && input<=5999){
        let value = 150
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=6000 && input<=7999){
        let value = 300
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=8000 && input<=11999){
        let value = 400
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=12000 && input<=14999){
        let value = 500
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=15000 && input<=19999){
        let value = 600
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=20000 && input<=24999){
        let value = 750
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=25000 && input<=29999){
        let value = 850
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=30000 && input<=34999){
        let value = 900
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=35000 && input<=39999){
        let value = 950
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=40000 && input<=44999){
        let value = 1000
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=45000 && input<=49999){
        let value = 1100
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=50000 && input<=59999){
        let value = 1200
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=60000 && input<=69999){
        let value = 1300
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=70000 && input<=79999){
        let value = 1400
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=80000 && input<=89999){
        let value = 1500
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=90000 && input<=99999){
        let value = 1600
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=100000){
        let value = 1700
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }
}


//takes in the salary and calculates the nssf 
function nssfDeduction(input){
    const deduction = input*0.06
   // return htmlNssf.textContent = `NSSF: ${deduction}`
    htmlNssf.innerHTML = `NSSF: ${deduction}`
    return deduction
}