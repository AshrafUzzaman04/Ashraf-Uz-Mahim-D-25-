// Leap-year

function year(x) {
  if ((0 == x % 4 && 0 != x % 100) || 0 == x % 400) {
    console.log(x + " " + "is a Leap-year.");
  } else if (x <= 0) {
    console.log("To know which year is leap year, please enter any integer");
  } else {
    console.log(x + " " + "is not a Leap-year.");
  }
}

year(1700);
