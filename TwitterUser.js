class TwitterUser{
    constructor(userName, followingNumber, followersNumber, pictureURL){
        this.userName = userName;
        this.followingNumber = followingNumber;
        this.followersNumber = followersNumber;
        this.pictureURL = pictureURL;
    }
print() {
    console.log(`${this.userName}, ${this.followingNumber} following, ${this.followersNumber} followers, ${this.pictureURL}`);
}
}

function main() {
let user1 = new TwitterUser("Lizrho", "32", "57", "https://cdn.myanimelist.net/images/characters/6/384253.jpg", );
user1.print();
}

main();


// #### TwitterUser Class
// Create a TwitterUser class with attributes userName, followingNumber, followersNumber, and pictureURL. 
// Create a function that prints each attribute.
//  Create an object of the class in your main function.