// Get the current date
let today = new Date();

// Set the next New Year's date
let nextNewYear = new Date(today.getFullYear() + 1, 0, 1); // Jan 1 of next year

// Calculate the difference in milliseconds
let diff = nextNewYear - today;

// Convert milliseconds to days
let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

console.log("Days left until next New Year:", daysLeft);
