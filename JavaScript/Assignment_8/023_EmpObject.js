let company = {
employees: [],
addEmployee(emp){
this.employees.push(emp);
}
};
company.addEmployee({name:"Rahul", id:1});
company.addEmployee({name:"Amit", id:2});
console.log(company.employees);