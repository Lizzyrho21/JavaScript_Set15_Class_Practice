class GitHubUser{
constructor(userName, fileName, discriptionOfRepository, code){
    this.userName = userName;
    this.fileName = fileName;
    this.discriptionOfRepository = discriptionOfRepository;
    this.code = code;
}
print(){
    console.log(`${this.userName}, ${this.fileName}, ${this.discriptionOfRepository}, ${this.code}`);
}
}

function main() {
let user1 = new GitHubUser("LizzyRho21", "JS Classes", "JS repo for practicing classes", true);
user1.print();
}

main();


// #### GitHubRepository Class
// Create a GitHubRepository class with attributes userName,
//  fileName, descriptionOfRepository,
//   and code. Create a function that prints each attribute.
//    Create an object of the class in your main function.