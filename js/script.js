console.log("JS Chapter 69 stdects");

// let std = {
//     name: "John",
//     p_no: 1245,
//     age: 22,
//     status: "not-registered",
//     statusStd: function(update){
//         console.log("Entererd in STD Method");
//         this.status = update;
//         console.log("this.std.status updated");
        
//         return std.status;
//     }
// };

// console.log("stdect ==== ", std);
// console.log("stdect type ==== ", typeof std);
// std.qualification = "Grduated";
// console.log("Object after add parameter ==== ", std);
// delete std.age;
// console.log("Object delete parameter ==== ", std);

// console.log("Student status has been updated to", std.statusStd("registered"));

console.log("Object with Constructor ");
class Student{
    constructor(name, p_no, age, status, qualification){
        this.name = name;
        this.p_no = p_no;
        this.age = age;
        this.qualification = qualification;
        this.status = status;
    }
    enroll(val_enroll, date_enroll){
        this.status = val_enroll;
        this.enrollDate = date_enroll;
    }
}
let std1 = new Student("Rabia", 45520 , 20 , "not-registered" , "Intermediate")
std1.enroll("regitered", "2023-01-01")
console.log("std1 == ",std1);




