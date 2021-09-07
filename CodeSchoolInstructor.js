class CodeSchoolInstructor{
constructor(teacherName, previousEmployer, knownLaguages){
    this.teacherName = teacherName;
    this.previousEmployer = previousEmployer;
    this.knownLaguages = knownLaguages;
}
print() {
    console.log(`${this.teacherName}, ${this.previousEmployer}, ${this.knownLaguages}`);

}
}



function main() {
let teacher1 = new CodeSchoolInstructor("Grace", "Food Retail", "HTML, CSS, JAVASCRIPT");
teacher1.print();
}

main();

// #### CodeSchoolInstructor Class
// Create a CodeSchoolInstructor class with attributes teachername, previousEmployer, and knownLanguages.
//  Create a function that prints each attribute. 
//  Create an object of the class in your main function.
