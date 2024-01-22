let score= prompt("Enter a number between 0-100");
let grade;
if(score>=90 && score<=100){
    grade ="O";
}
else if (score>=80&& score<=89){
    grade ="E";
}
else if(score>=70&& score<=79){
    grade ="A";
}
else if(score>=60&& score<=69){
    grade ="B";
}
else if(score>=50&& score<=59){
    grade ="C";
}
else if(score>=40&& score<=49){
    grade ="D";
}
else if(score>=30&& score<=39){
    grade ="D";
}
console.log("according to your score your grade is:",grade );