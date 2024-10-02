//Task #1 (Caleb)

const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++){
        console.log(i)
    } 
}
//fiveToOneHundred()

// Task #2 (Jordi)

const multiplesOfThree = () => {
    for (let i = 0; i <= 100; i+= 3){
        console.log(i)
    } 
}

//multiplesOfThree();

// Task #3 (Caleb)
const multiplesOfThreeOrFive = () => {
    for (let i = 0; i <= 100; i++){
        if (i % 3===0 || i % 5===0){
            console.log(i)
        }
    } 
}
//multiplesOfThreeOrFive();

// Task #4 (Jordi)

const untilNum = (value) => {
    for (let i = 0; i <= value; i++){
        console.log(i)
    } 
}

//untilNum(100);

//Task #5 (Caleb)

const multiply = (num1, num2) => {
return num1 * num2
}
//console.log(multiply(10, 2))

//Task #6 (Jordi)

const add = (num1, num2) => {
    if (num1 !== num2) {
        return num1 + num2
    } else if (num1 === num2) {
        return (num1 + num2) * 3
    }
}

//console.log(add(5, 10));

// Task #7 (Caleb)

const isNegative = (num) => {
    if(num > 0){
        return false
    } else if (num < 0){
        return true
    }
}
//console.log(isNegative(0))

//Task #8 (Jordi)

const triangleArea = (base, height) => {
    return base * height / 2
}

//console.log(triangleArea(6,8));

//Task #9 (Caleb)
const betweenTwentyAndFourty = (int) => {
    if(int > 20 && int < 40){
        return true
    } else{
       return false
    }
}
console.log(betweenTwentyAndFourty(41))
//Task #10 (Jordi)