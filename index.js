
function generateRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function createTable() {
    const numbers = generateRandomNumbers(30, 0, 99);
    const table = document.getElementById("table");
    let index = 0;
    
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            let col = document.createElement("td");
            col.textContent = numbers[index];
            if (numbers[index] >= 50) {
                col.style.backgroundColor = "orange";
            }
            row.appendChild(col);
            index++;
        }
        table.appendChild(row);
    }
    return table
}
function foo() {
    const table = document.getElementById("table");
    let rows = table.querySelectorAll("tr");
    let lastRow = rows[rows.length - 1];
    
    if (lastRow.cells.length >= 5) {
        lastRow = document.createElement("tr");
        table.appendChild(lastRow)
    }
    
    let newNumber = Math.floor(Math.random() * 100);
    let cell = document.createElement("td");
    cell.textContent = newNumber;
    if (newNumber >= 50) {
        cell.style.backgroundColor = "orange";
    }
    lastRow.appendChild(cell);
}
createTable();