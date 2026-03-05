

// destructring on objects

let obj = {
    name: "Rahul",
    address: "Saket nagar",
    empId : "SPL34",
    designation: "developer",
    project:{
        name: "e-commerce"
    }
}


let {designation, empId, project:{name},} = obj;

console.log(designation, empId, name)