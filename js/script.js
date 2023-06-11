console.log("JS Chapter 69 stdects");

let std = {
    name: "John",
    p_no: 1245,
    age: 22,
    status: "not-registered",
    statusStd: function(update){
        console.log("Entererd in STD Method");
        this.status = update;
        console.log("this.std.status updated");
        
        return std.status;
    }
};

console.log("stdect ==== ", std);
console.log("stdect type ==== ", typeof std);
std.qualification = "Grduated";
console.log("Object after add parameter ==== ", std);
delete std.age;
console.log("Object delete parameter ==== ", std);

console.log("Student status has been updated to", std.statusStd("registered"));






