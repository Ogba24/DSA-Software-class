//**let students = ["Ada", "john", "Mary", "Peter"];
//for (let student of students){
 //   console.log(student + " is present")
//}

let students = ["Ada", "John", "Mary"];
for (let i = 0; i < students.length; i++)
{
    for (let j = 0; j < students.length; j++){
        console.log(students[i], "greetings", students[j]);
    }
}