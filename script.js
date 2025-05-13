function createTable() {
  // Ask user for number of rows and columns
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert to integers
  rn = parseInt(rn);
  cn = parseInt(cn);

  // Validate inputs
  if (isNaN(rn) || isNaN(cn)) {
    return; // If not numbers, exit without creating table
  }

  if (rn <= 0 || cn <= 0) {
    alert("Please enter positive numbers greater than 0");
    return;
  }

  // Get the table and clear previous contents
  const table = document.getElementById("myTable");
  table.innerHTML = "";

  // Generate table rows and columns
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}

