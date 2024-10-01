// Code your solution in this file!
// index.js

// 1. Returns the first two drivers from the passed-in array
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};

// 2. Returns the last two drivers
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};

// 3. Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Returns a function that multiplies a fare by a given multiplier
const createFareMultiplier = (multiplier) => {
    return (fare) => fare * multiplier;
};

// 5. Function to double the fare
const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
};

// 6. Function to triple the fare
const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
};

// 7. Selects different drivers based on the function passed
const selectDifferentDrivers = (drivers, func) => {
    return func(drivers);
};

// Export the functions if you need them for testing
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers,
};

