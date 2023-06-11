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


class Car{
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
    }
    hasColor(){
       return this.color;
    }
}

Car.prototype.color = "Red";
let car1 = new Car("Corolla", "df250" , 545);
console.log("car1 == ",car1.color);

let car2 = new Car("Honda Civic", "df250" , 545);
console.log("car2 == ",car2.color);
console.log("car2 has Color Property == ","color" in car2);
console.log("car2 has Price Property check via .hasOwnProperty(prop)) == ",car2.hasOwnProperty("price"));
console.log(`${car2.name} has ${car2.hasColor()} color.`);





