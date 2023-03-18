const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Task1. Positive elements. Sum and quantity
const positiveNum = arr.filter(num => num > 0);
const positiveCount = positiveNum.length;
const positiveSum = positiveNum.reduce((accumulator, num) => accumulator + num, 0);

console.log(`Сумма всех позитивных элементов (чисел): ${positiveSum}`);
console.log(`Количество позитивных элементов (чисел): ${positiveNum}`);




// 2 Знайти мінімальний елемент масиву та його порядковий номер.
let min = arr[0];
let minIndex = 0;
arr.forEach((el, index) => {
  if (el < min) {
    min = el;
    minIndex = index;
  }
});
console.log(`Минимальный элемент: ${min}, его индекс(порядковий номер): ${minIndex}`);



// 3 Знайти максимальний елемент масиву та його порядковий номер.
let max = arr[0];
let maxIndex = 0;
arr.forEach((el, index) => {
  if (el > max) {
    max = el;
    maxIndex = index;
  }
});
console.log(`Максимальный элемент: ${max}, его индекс(порядковий номер): ${maxIndex}`);



// 4 Визначити кількість негативних елементів
const negativeCount = arr.filter(el => el < 0).length;
console.log(`Количество негативных элементов: ${negativeCount}`);


// 5 Знайти кількість непарних позитивних елементів.
const oddPositiveCount = arr.filter(el => el > 0 && el % 2 !== 0).length;
console.log(`Количество нечетных положительных элементов: ${oddPositiveCount}`);

// 6 Знайти кількість парних позитивних елементів.
const evenPositiveCount = arr.filter(el => el > 0 && el % 2 === 0).length;
console.log(`Количество четных положительных элементов: ${evenPositiveCount}`);


// 7 Знайти суму парних позитивних елементів.
const evenPositiveSum = arr.filter(el => el > 0 && el % 2 === 0).reduce((acc, el) => acc + el, 0);
console.log(`Сумма четных положительных элементов.: ${evenPositiveSum}`);


// 8 Знайти суму непарних позитивних елементів.
const oddPositiveSum = arr.filter(el => el > 0 && el % 2 !== 0).reduce((acc, el) => acc + el, 0);
console.log(`Сумма нечетных положительных элементов: ${oddPositiveSum}`);

// 9 Знайти добуток позитивних елементів.
const positiveProduct = arr.filter(el => el > 0).reduce((acc, el) => acc * el, 1);
console.log(`Произведение положительных элементов: ${positiveProduct}`);

// 10 Знайти найбільший серед елементів масиву, остальні обнулити.
const maxElement = arr.reduce((acc, el) => {
	if (el > acc) {
	  return el;
	} else {
	  return acc;
	}
 }, arr[0]);
 const newArr = arr.map(el => {
	if (el === maxElement) {
	  return el;
	} else {
	  return 0;
	}
 });
console.log(`Наибольший элемент среди массива: ${newArr}`);

alert(`Сумма всех позитивных элементов (чисел): ${positiveSum}`);
alert(`Количество позитивных элементов (чисел): ${positiveNum}`);
alert(`Минимальный элемент: ${min}, его индекс(порядковий номер): ${minIndex}`);
alert(`Максимальный элемент: ${max}, его индекс(порядковий номер): ${maxIndex}`);
alert(`Количество негативных элементов: ${negativeCount}`);
alert(`Количество нечетных положительных элементов: ${oddPositiveCount}`);
alert(`Количество четных положительных элементов: ${evenPositiveCount}`);
alert(`Сумма четных положительных элементов.: ${evenPositiveSum}`);
alert(`Сумма нечетных положительных элементов: ${oddPositiveSum}`);
alert(`Произведение положительных элементов: ${positiveProduct}`);
alert(`Наибольший элемент среди массива: ${newArr}`);



