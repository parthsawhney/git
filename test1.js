var Employee = function() {
    this.kind = "engineer" ;
}
Employee.prototype.salary = 500 ;
var t = new Employee() ;
console.log(Employee.prototype) ;
console.log(t.salary) ;
t.salary = 50 ;
console.log(t.salary) ;
console.log(Employee.salary) ;
console.log(Employee.prototype.salary) ;
Employee.prototype.salary = 5000 ;
console.log(t.salary) ;

var A = {} ;
console.log(A.prototype) ;
