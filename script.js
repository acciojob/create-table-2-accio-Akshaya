function createTable() {
    //Write your code here
	let rn = prompt("Input number of rows");
	let cn = prompt("Input number of columns");

	rn = number(rn);
	cn = number(cn);

	if(isNaN(rn) || isNaN(cn)){
		return ;
	}

	if(rn <=0 || cn <= 0){
		alert("Please enter positive numbers greater than 0");
		return;
	}

	const table = document.getElementById("myTable");
	table.innerHTML = "";

	for(let i = 0; i < rn; i++){
		const row = table.insertRow();
		for(let j = 0; j < cn; j++){
			const cell = row.insertCell();
			cell.textContent = `Row-${i} Column-${j}`;
		}
	}
}
