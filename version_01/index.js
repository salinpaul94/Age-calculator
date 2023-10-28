let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");
function calculateAge() {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let diff_d, diff_m, diff_y;
  diff_y = y2 - y1;
  if (m2 >= m1) {
    diff_m = m2 - m1;
  } else {
    diff_y--;
    diff_m = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    diff_d = d2 - d1;
  } else {
    diff_m--;
    diff_d = getDaysInMonth(diff_y, diff_m) + d2 - d1;
  }
  if (diff_m < 0) {
    diff_m = 11;
    diff_y--;
  }
  console.log(diff_y, diff_m, diff_d);
  result.innerHTML = `You are <span>${diff_y}</span> years, <span>${diff_m}</span> months and <span>${diff_d}</span> days old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}