// Leap-year function given below

function year(x) {
  if ((0 == x % 4 && 0 != x % 100) || 0 == x % 400) {
    document.write(x + " " + "is a Leap-year.");
  } else if (x <= 0) {
    document.write(
      "<h1>To know which year is leap year, please enter any integer</h1>"
    );
  } else {
    document.write(x + " " + "is not a Leap-year.");
  }
}

year(parseFloat(prompt("Enter a year :")));
