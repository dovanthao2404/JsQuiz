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
// const hobbySuggestions = ["Chơi game", "Xem đá bóng"];

// const person = { name: "Thảo", hobbies: hobbySuggestions };
// hobbySuggestions.push("Đánh cầu lông")

// console.log(person.hobbies) // ["Chơi game", "Xem đá bóng", "Đánh cầu lông"]
// console.log(hobbySuggestions) // ["Chơi game", "Xem đá bóng", "Đánh cầu lông"]

// Bài 3.1:
// const person1 = { firstName: "Đỗ", lastName: "Thảo", age: 16 };
// const person2 = person1;

// person2.firstName = "Dương";

// console.log(person1) // { firstName: "Dương", lastName: "Thảo", age: 16 };
// console.log(person2) // { firstName: "Dương", lastName: "Thảo", age: 16 };


// Bài 4:
// const hobbySuggestions = ["Chơi game", "Xem đá bóng"];

// const person1 = { name: "Thảo", hobbies: hobbySuggestions };
// const person2 = { name: "Kim", hobbies: hobbySuggestions };

// person1.hobbies.push("Đọc sách")

// console.log(person1.hobbies) // ["Chơi game", "Xem đá bóng", "Đọc sách"]
// console.log(person2.hobbies) // ["Chơi game", "Xem đá bóng", "Đọc sách"]
// console.log(hobbySuggestions) // ["Chơi game", "Xem đá bóng", "Đọc sách"]

// Bài 4.4:

function a(x) {
  x++
  function b() {
    x++;
  }
}

// ---------------- Toán tử ---------------/
// Bài 5:
// var result = undefined || 3 || null;
// console.log(result) // undefined
// Bài 6:
// var result = undefined || "Hello" && null;
// console.log(result) // null
// Bài 7:
// var result = undefined && "Hello" && null;
// console.log(result) // undefined
// Bài 8:
// var result = "Hallo" && "Hello" && "Xin chào";
// console.log(result) // Xin chào
// Bài 9:
// các giá trị null và undefined sẽ vào vế sau
// null, undefined, NaN, 0, false, "" giá trị false
// var result = false ?? "Xin chào";
// console.log(result) // false
// Bài 10:
// var result = undefined ?? "Xin chào";
// console.log(result) // false
// Bài 12:
// var result = undefined ?? false ?? "Xin chào";
// console.log(result); // false



