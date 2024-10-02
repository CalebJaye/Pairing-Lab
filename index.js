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