function Person(fname,lname) {
	this.fname  =  fname
	this.lname  =  lname
}

Person.prototype.getSuperName = function() {
	return this.fname+ "  "+this.lname;
}

function Employee(fname,lname,age) {
	Person.call(this,fname,lname);
	this.age = age;
}

Employee.prototype = Object.create(Person.prototype);

var e1 = new Employee("sravaan","Redddy",40);

console.log(e1.getSuperName());

