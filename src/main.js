// HomeWork - Lasha Shamugia

// Quiz Questions

// 1. What method would you use to add an element to the end of an array?
// ელემენტის დასამატებლად ვიყენებთ push მეთოდს, გადავცემთ იმ ელემენტს
// რომლის დამატებაც გვინდა მასივის ბოლოს.
// let arr = [1, 2, 3, 4, 5, 6];
// arr.push(7);
// console.log(arr);

// 2. How do you remove the first element from an array?
// პირველი ელემენტის წასაშლელად ვიყენებთ shift() მეთოდს.
// let arr = [1, 2, 3, 4, 5, 6];
// arr.shift();
// console.log(arr);

// 3.What is the difference between splice and slice?
// Array.slice() - შეგვიძლია მასივის ფრაგმენტის ამოღება, თუმცა არ ეხება ორიგინალ მასივს. 
// გადაეცემა ორი პარამეტრი: პირველი პარამეტრის მნიშვნელობის
// ინდექსიდან იწყებს ამოჭრას და მეორე პარამეტრის წინა ელემენტით ასრულებს, ანუ მეორე
// პარამეტრის ინდექსიანი ელემენტი არ შედის ამოჭრილ მასივში.

// Array.splice() - მას გადაეცემა მინიმუმ ორი ელემენტი. პირველი უჩვენებს თუ მასივის 
// რომელი ელემენტიდან დაიწყოს ამოჭრა, ხოლო მეორე უჩვენებს საწყისი ელემენტიდან რამდენი
// შემდეგი ელემენტი უნდა ამოიჭრას. ამის შემდეგ კი ქმნის ახალ მასივს რომელშიც თავსდება
// ამოჭრილი ელემენტები.

// 4. How do you find the length of an array?
// უნდა გამოვიყენოთ Array.length() მეთოდი. 
// let array = [1, 2, 3, 4, 5, 6];
// console.log(array.length);

// 5. How can you check if an array includes a certain element?
// გამოვიყენებთ includes() მეთოდს.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3, 2)); პასუხად დაგვიბრუნებს true-ს.

// 6. What is the result of calling sort on an array of numbers without a compare function?
// შედარების ფუნქციის გარეშე თუ გამოვიძახებთ sort() მეთოდს, მაშინ მასივი სწორად არ დალაგდება,
// იმიტომ რომ ის შეადარებს სტრინგებს ერთმანეთს.

// 7. How do you create a copy of an array?
// შეგვიძლია გამოვიყენოტ (...) spread ოპერატორი. შევქმნათ ახალი ცვლადი და გავუწეროთ (...).
// let Array = [1, 2, 3];
// let copiedArray = [...Array];
// console.log(copiedArray); 

// 8. How do you reverse the elements in an array?
// იმისთვის რომ მოცემული მასივი შევაბრუნოთ ანუ ელემენტების თანმიმდევრობა შევცვალოთ,
//  გამოვიყენებთ reverse() მეთოდს.
// let arr = [1, 2, 3, 4, 5, 6];
// arr.reverse();
// console.log(arr);

// 9. What method can you use to combine two arrays?
// ორი მასივის გასაერთიანებლად ვიყენებთ  concat() მეთოდს.
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let combinedArray = array1.concat(array2);
// console.log(combinedArray);

// 10. How do you access a specific element in a 2D array?
// 2D მასივის რომელიმე ელემენტს ჩვენ შეგვიძლია გადავწვდეთ შემდეგი სინტაქსით.
// let element = array[rowIndex][columnIndex];
// მაგალითად როდესაც გვაქვს 3 ელემენტისგან შემდგარი ჰორიზონტალური მასივის 4 რიგი და ასევე
// 3 ელემენტისგან შემდგარი შვეული 3 სვეტი და გვინდა კონსოლში გამოვიტანოთ მესამე რიგის მეორე ელემენტი.
// უნდა გავითვალისწინოთ რომ გადათვლა ხდება ინდექსებით, ანუ 0დან.
// let twoDimensionalArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12]
// ];
// let element = twoDimensionalArray[2][1];
// console.log(element);




// Assignment 1: Basic Array Operations

// 1. Create an array of numbers from 1 to 10.
// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 2.Access the third element in the array.
// let thirdElement = myArray[2];
// console.log(thirdElement);
// 3.Change the value of the fifth element to 15.
// myArray[4] = 15;
// console.log(myArray);
// 4.Add a number at the end of the array.
// myArray.push(11);
// console.log(myArray);
// 5. Remove the first element from the array.
// myArray.shift();
// console.log(myArray);



// Assignment 2: Array Methods - push, pop, shift, unshift

// 1.Create an array of fruit names.
// let fruitArray = ["Banana", "Lemon", "Apple", "Pear", "Mango"];
// 2.Add "Orange" to the end of the array.
// fruitArray.push("Orange");
// console.log(fruitArray);
// 3.Remove the last item and store it in a variable.
// let newArray = fruitArray.pop();
// console.log(newArray);
// console.log(fruitArray);
// 4.Add "Strawberry" to the beginning of the array.
// fruitArray.unshift("Strawberry");
// console.log(fruitArray);
// 5.Remove the first item and store it in a variable.
// let firstFruit = fruitArray.shift();
// console.log(firstFruit);
// console.log(fruitArray);



// Assignment 3: Iterating Over an Array

// 1. Create an array of 5 colors.
// let arrColors = ["red", "blue", "green", "yellow"];
// 2. Use a for loop to print each color.
// for( let i = 0; i < arrColors.length; i++) {
//   console.log(arrColors[i]);
// }



// Assignment 4: Array Methods - splice and slice

// 1.Create an array of numbers.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 2.Use the splice method to remove the second and third elements.
// array.splice(1, 2);
// console.log(array);
// 3. Use the splice method to add two numbers at the second position.
// array.splice(1, 0, 2, 3);
// console.log(array);
// 4. Use the slice method to create a new array containing the last three 
// elements of the original array.
// let lastThreeElements = array.slice(-3);
// console.log(lastThreeElements);



// Assignment 5: Array Sorting

// 1. Create an array of names.
// let arrNames = ["George", "Luka", "Ana", "Dato", "Nino", "Zura", "Kato"];
// 2. Sort the array in alphabetical order. 
// for( let i = 0; i < arrNames.length; i++) {
//     arrNames.sort();
//     console.log(arrNames[i]);
//   }
// 3. Sort the array in reverse alphabetical order.
// for( let i = 0; i < arrNames.length; i++) {
//   arrNames.sort();
//   arrNames.reverse();
//   console.log(arrNames[i]);
// }



// Assignment 6: Finding Elements in an Array

// 1. Create an array of numbers.
// let array = [12, 21, 3, 47, 504, 88, 10];
// 2. Use indexOf to find the position of a specific number.
// let specificNumber = array.indexOf(504);
// console.log(specificNumber);
// 3. Use includes to check if a specific number is present in the array.
// let numberPresents = array.includes(88);
// console.log(numberPresents); დაგვიბრუნებს თრუს რადგან 88 არის ჩვენს მასივში.
// 4. Use findIndex to find the index of the first element greater than a certain value.
// let index = array.findIndex(num => num > 21);
// console.log(index)  დაგვიბეჭდავს 3ს რადან 21ზე მაღალი მომდევნო რიცხვია 47 მდებარეობს მე3 ინდექსზე.
// 5. use for loop to find the index of the first element greater than a certain value.
// let myNumber = 47;
// let index = 0;
// for( let i = 0; i < array.length; i++) {
//   array.sort();
//   if (array[i] > myNumber) {
//     index = i;
//     break;
//   }
// }
// console.log(index);



// Assignment 7: Multi-dimensional Arrays

// 1. Create a 2D array representing a grid.
// let twoDimensionalArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12]
// ];
// 2. Access a specific element in the grid.
// let specificElement = twoDimensionalArray[2][1];
// console.log(specificElement);
// 3. Modify an element in the grid.
// twoDimensionalArray[1][1] = 500;
// console.log(twoDimensionalArray);



// Assignment 8: Array Destructuring

// 1. Create an array with 4 elements.
// let numbers = [10, 20, 30, 40];
// 2. Use destructuring to extract the first and second elements into variables.
// let newArray = numbers.slice(0, 2);
// console.log(newArray);
// 3. Swap the values of two variables using array destructuring.
// [newArray[0], newArray[1]] = [newArray[1], newArray[0]];
// console.log(newArray);


// Assignment 9: Combining Arrays

// 1. Create two arrays of numbers.
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [10, 11, 16, 11, 77];
// 2. Combine the two arrays into one using the concat method.
// let concatArray = array1.concat(array2);
// console.log(concatArray);
// 3. Create a new array by combining the two arrays using the spread operator.
// let spreadArray = [...array1, ...array2]
// console.log(spreadArray);



// Assignment 10: Reversing and Sorting Arrays

// 1. Create an array of numbers.
// let arrNumbers = [20, 33, 402, 18, 111, 6, 999];
// 2. Reverse the array.
// arrNumbers.reverse();
// console.log(arrNumbers);
// 3. Sort the array in descending order.
// arrNumbers.sort((a, b) => b - a);
// console.log(arrNumbers);