// Your code here
function createEmployeeRecord(empData) {
    const empObj = {
        firstName: empData[0], 
        familyName: empData[1],
        title: empData[2],
        payPerHour: empData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return empObj;
}

function createEmployeeRecords(empData) {
    return empData.map(emp => createEmployeeRecord(emp));
}

function createTimeInEvent(empObj, stamp) {
    let date = stamp.split(" ");
    let hour = stamp.split(" ");
    empObj.timeInEvents.push( {
        type : "TimeIn",
        hour: parseInt(hour[1]),
        date: date[0]
    })
    return empObj
}

function wagesEarnedOnDate(empObj,stamp){
    let empHour =  empObj.payPerHour * hoursWorkedOnDate(empObj , stamp);
    return empHour
  }
  
  
function allWagesFor(empObj) {
    let allDates = empObj.timeInEvents.map(time => time.date);
    let allPayments = allDates.reduce((acc, curr) => {
        return acc + wagesEarnedOnDate(empObj , curr);
    }, 0);
    return allPayments;
}

const calculatePayroll = (empData) => {
    return empData.reduce((acc, curr) => acc + allWagesFor(curr), 0);
} 

const findEmployeeByFirstName = (empData, fName) => {
    return empData.find(emp => emp.firstName === fName);
} 
