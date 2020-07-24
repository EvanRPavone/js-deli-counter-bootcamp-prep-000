
var katzDeli = []; // At the beginning of the day,
//the deli is empty and is represented by an empty array
//<<<<<<<<<--------------- in the instructions <<<<<<

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
