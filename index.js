// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
          count() {
    // .just grabbing the length of the array
    //return the count of numbers in the array
    return this.data.length;
  }




          printNumbers() {
    // print is consolelog - .join will turn the array into a string
    // Then use (",") as the parameter as a seporator
    //print the numbers in data
    console.log(this.data.join(", "));
  }
            odds() {
    // return this data -  filter => if number is modulus 2 is not equal to 0

    return this.data.filter(number => number % 2 !== 0);
    //return the odd numbers in data
  }



  // Same as oods but this time it has to strictly equal 0.


  evens() {
    return this.data.filter(number => number % 2 === 0);
    //return the even numbers in data
  }


  sum() {
    // had help with this one, i know i am using reduce to iterate over the array and add the numbers to the accumulator
    // numbner is the value in the index 
    return this.data.reduce((acc, number) => acc + number, 0);
    //return the sum of the numbers
  }

  product() {
    return this.data.reduce((acc, number) => acc * number, 1);
    //return the product of the numbers
  }
                greaterThan(target) {
    return this.data.filter(number => number > target);
  }
    //return the numbers greater than the target
  

    howMany(target) {
  return this.data.filter(number => number === target).length;
  }
    //return the count of a given number

}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
