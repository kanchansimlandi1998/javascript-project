
//Qs1. Prompt the user to enter their full name. Generate a username for them based on the input,
//Start username with @, followed by their full name and ending with the fullname length..
//eg: user name =
/*“shradhakhapra”
, username should be “@shradhakhapra13”*/

/*let fullName=prompt("enter your fullname without using any spaces:");
console.log(fullName);
let userName="@"+fullName+fullName.length;*/
//console.log(userName);

//Print all even numbers from 0 to 100.

/*let num=0;
for(num=0;num<=100;num++){
  if(num%2===0){
    console.log(num);
  }
}*/

/*Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value. */

let gameNumber=34;
let userName=prompt("guess the number:");
if(userName==gameNumber){
    console.log("congrats!");
}
else{
console.log("try again!");
    }
