class SchoologyUser{

constructor(studentName, schoolName, gpa, classes)
{
    this.studentName = studentName;
    this.schoolName = schoolName;
    this.gpa = gpa;
    this.classes = classes;
}

print() {
    console.log(`${this.studentName}, ${this.schoolName}, ${this.gpa}, ${this.classes}`);
}

}


function main() {
let user1 = new SchoologyUser("Addsion Vicks", "University of Memphis", "4.0", "Sociology");
user1.print();
}

main();


// #### SchoologyUser Class
// Create a SchoologyUser class with attributes studentName, 
// schoolName, GPA, and classes.
//  Create a function that prints each attribute.
//   Create an object of the class in your main function.