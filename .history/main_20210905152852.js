// Bài 1:
// var a = 4;
// var b = 3;
// a = (b++) + 2; // a = 5 // b = 4
// var c = (a--) + (++a) + a * b;
//console.log(a) // 5
//console.log(b) // 4
//console.log(c) // 30

// Bài 2:
// var a = 4;
// var b = 5;
// a = (++b) + 3; // a = 9; b = 6;
// c = 2 * a + (b++); // a = 9; b = 6; c = 24; kết thúc b = 7;
// b -= -c--; // b = b + c = 7 + 24 = 31; Kết thúc c = 23;
// console.log(a) // 9
// console.log(b) // 31
// console.log(c) // 23

// --------------- Tham chiếu ------------//
// Bài 3:
const hobbies = ["Chơi game", "Xem đá bóng"];

const person = { name: "Thảo", hobbies };
const user2 = { name: "Thảo", hobbies };
hobbies.push("Đánh cầu lông")

console.log(person.hobbies) // ["Chơi game", "Xem đá bóng", "Đánh cầu lông"]
console.log(user1.hobbies) // ["Chơi game", "Xem đá bóng", "Đánh cầu lông"]
console.log(hobbies) // ["Chơi game", "Xem đá bóng", "Đánh cầu lông"]

// Bài 4:







