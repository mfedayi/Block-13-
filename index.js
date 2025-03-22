// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
  const vFahrenheit = f - (32 * 5) / 9;
  console.log(vFahrenheit);
  return vFahrenheit;
}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(f) {
  // The createMessage() function should take the Fahrenheit temperature and the Celsius equivalent as arguments and determine how it feels based on certain temperature ranges.
  // It should return a message telling the user the conversion from Fahrenheit to Celsius and how that feels.
  if (f < 32) {
    return "very cold";
  }
  if (f < 64) {
    return "cold";
  }
  if (f < 86) {
    return "warm";
  }
  if (f < 100) {
    return "hot";
  }
  if (f >= 100) {
    return "very hot";
  }
}

/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function getRandomInt(limit) {
  const randTemp = Math.floor(Math.random() * limit);
  return randTemp;
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
