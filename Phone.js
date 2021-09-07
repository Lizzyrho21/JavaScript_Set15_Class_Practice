
// REMEMBER: CLASS IS JUST A BLUEPRINT!!!//

class Phone{ 
    constructor(phoneName, storageLimit, isAndroid, screenSize, hasHeadPhoneJack){
    this.phoneName = phoneName;
    this.storageLimit = storageLimit;
    this.isAndroid = isAndroid;
    this.screenSize = screenSize;
    this.hasHeadPhoneJack = hasHeadPhoneJack;
    }
    print () {
        console.log(`${this.phoneName}, ${this.storageLimit}, ${this.isAndroid}, ${this.screenSize}, ${this.hasHeadPhoneJack}`) ; // make sure it works
    }

}
// this function has a class OBJECT inside of it and uses the PRINT method inside of the function (encapsulation) to call it to the console.
function main() {
    let phone1 = new Phone("Iphone6", "8GB", false, 12, true);
    phone1.print();

}

main();


// #### Phone Class
// Create a Phone class with attributes phoneName,
//  storageLimit, isAndroid,
//   screenSize, and hasHeadPhoneJack. 
//   Create a function that prints each attribute.
//    Create an object of the class in your main function.