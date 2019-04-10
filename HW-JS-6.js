
// A function which prints str after n seconds.

function printTimeout(str, n) {
  let timeDelay = n * 1000;
  setTimeout(function() {
    console.log(str);
  }, timeDelay);
}
printTimeout('Hello', 10); // hello will appear after 10secs in console.

// A function which returns sum of all numbers from 1 to n using recursion.
function sumAll(n, sum = 0) {
  sum += n;
  if (n > 0) {
    return sumAll(n - 1, sum);
  } else {
    return sum;
  }
}

console.log(sumAll(2)); // 3
console.log(sumAll(4)); // 10

// A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str

function bombTimer(str, time) {
  let countTime = () => {
    console.log(time);
    time--;
    if (time === 0) {
      setTimeout(() => console.log(str), 1000);
      clearInterval(settingInterval);
    }
  };
  let settingInterval = setInterval(countTime, 1000);
}
bombTimer('Boom', 3);


// A function which returns factorial of number using recursion.
function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}
factorial(3); // 6
factorial(5); // 120
// Implement function from task â„–3 (bombTimer) using recursion and setTimeout.
function Boom(str, time) {
  let countTime = () => {
    console.log(time);
    if (time === 1) {
      setTimeout(() => console.log(str), 1000);
      clearTimeout(setTimes);
    }
    while (time > 1) {
      return Boom(str, time - 1);
    }
  };
  let setTimes = setTimeout(countTime, 1000);
}
Boom("Boom", 4);

// A function which takes an array of numbers and maxNumber,
// the function returns new array with numbers not higher than maxNumber.
function filterNumbers(arr, maxNumber) {
  let minNumbers = [];
  arr.filter(index => {
    if (index < maxNumber) {
      minNumbers.push(index);
    }
  });
  return (minNumbers);
}
filterNumbers([1, 4, 8, 1, 20], 5); // [1, 4, 1]

// A function that returns object with min and max numbers from array of numbers.
function minMax(arr) {
  let Numbers = {};
  Numbers.min = arr[0];
  Numbers.max = arr[1];
  for (var i = 0; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      Numbers.min = arr[i];
    } else if (arr[1] < arr[i]) {
      Numbers.max = arr[i];
    }
  }
  return Numbers;
}
minMax([1, 4, 8, 2, 20]); // { max: 20, min: 1 }

// A function that returns average of numbers in array.
function average(arr) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return parseFloat(total / arr.length).toPrecision(3);
}
average([1, 4, 2]); // 2.33

//function which concats all first - nested arrays in one array(use reduce):
function concatFirstNestedArrays(arr) {
  let concat = arr.reduce((result, current) => {
    return result.concat(current);
  });
  return concat;
}
concatFirstNestedArrays([
  [0, 1],
  [2, 3],
  [4, 5]
]); // [0, 1, 2, 3, 4, 5]


// A function accepts array of users and returns object of users where key is user id and value user data.
const users = [{
    id: 1,
    name: 'John',
    birthday: '1999-2-12'
  },
  {
    id: 2,
    name: 'Bill',
    birthday: '1999-1-19'
  },
  {
    id: 3,
    name: 'Carol',
    birthday: '1999-3-11'
  },
  {
    id: 4,
    name: 'Luce',
    birthday: '1999-2-22'
  }
];

function usersToObject(users) {
  var objUsers = [new Set([users])];
  return objUsers;
}
usersToObject(users);
// {
//  1: { id: 1, name: 'John', birthday: '1999-2-12' },
//  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
//  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
//  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };


// A function returns array of users that have birthdays in a specific month.
const users = [{
    name: 'John',
    birthday: '1999-2-12'
  },
  {
    name: 'Bill',
    birthday: '1999-1-19'
  },
  {
    name: 'Carol',
    birthday: '1999-4-11'
  },
  {
    name: 'Luce',
    birthday: '1999-2-22'
  }
];

function filterUsersByMonth(users, month) {
users.forEach(function(item, index){
    let newDate = new Date(item.birthday);
    if (newDate.getMonth() + 1 === month){
      let filterUsers = [item];
	console.log(filterUsers);
    }
  });
}
filterUsersByMonth(users,2);  // [{ name: 'Bill', birthday: '1999-1-19' }]


// A function returns name and age of users separated by comma that are older than 18.
const users = [
  {
    name: 'John',
    birthday: '1999-6-12'
  },
  {
    name: 'Bill',
    birthday: '2005-5-19'
  },
  {
    name: 'Carol',
    birthday: '2003-10-11'
  },
  {
    name: 'Luce',
    birthday: '2000-11-22'
  }
];

function getAdultNames(users) {
  let AdultNames = [];
  let currectYear = new Date().getFullYear();
  let usersYears = users.forEach((person) => {
    let personYear = new Date(person.birthday).getFullYear();
    let usersAge = currectYear - personYear;
    if (usersAge >= 18) {
      AdultNames.push(`${person.name} ${usersAge}`);
    }
  });
  return AdultNames.join(", ");
}
getAdultNames(users); // 'John 19, Luce 18'
