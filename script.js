// Get the difference between new year and today's date
let newYear = Date.parse('01 Jan 2021 00:00:00 GMT')
let currentDate = Date.now()

console.log(newYear)
console.log(currentDate)


// The Difference
let difference = currentDate - newYear
console.log(Math.abs(difference))


// Milliseconds
console.log(parseInt(Math.abs(difference)))

// Seconds
let seconds = difference / 1000
console.log(parseInt(Math.abs(seconds)))

// Minutes
let minutes = seconds / 60;
console.log(parseInt(Math.abs(minutes)))

// Hours
let hours = minutes / 60;
console.log(parseInt(Math.abs(hours)))

// Days
let days = hours / 24
console.log(parseInt(Math.abs(days)))
