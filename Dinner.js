class Dinner{
constructor(dishName, protien, veggie, price){
    this.dishName = dishName;
    this.protien = protien;
    this.veggie = veggie;
    this.price = price;


}
print () {
    console.log(`${this.dishName}, ${this.protien}, ${this.veggie}, ${this.price}`);
}
}

function main() {
let dinner = new Dinner("Chicken and Potatos", "Chicken", "Potatoes", "10.50" );
dinner.print();

}

main();

// #### Dinner Class
// Create a Dinner class with attributes dishName, protein, veggie, and price. 
// Create a function that prints each attribute. 
// Create an object of the class in your main function.