// Challenge 1: Student Grade Generator using an if else statement

// Created Function called studentGenerator and passed grade to it
const studentGenerator = (grade) => {
    if (grade >= 79){
        return 'A';
    } else if (grade >=60 && grade <=79){
        return 'B'
    } else if (grade >=49 && grade <=59){
        return 'C'
    } else if (grade >=40 && grade <=49){
        return 'D'
    } else {
        return 'E'
    }
}

// Invoked the function using parenthesis and passed 40 to test it

console.log(studentGenerator(40));