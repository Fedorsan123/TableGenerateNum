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
    let html = "";
    let index = 0;
    
    for (let i = 0; i < 6; i++) {
        html += "<tr>";
        for (let j = 0; j < 5; j++) {
            let number = numbers[index];
            let style = number >= 50 ? 'style="background-color: orange;"' : "";
            html += `<td ${style}>${number}</td>`;
            index++;
        }
        html += "</tr>";
    }
    
    table.innerHTML = html;
}

function foo() {
    const table = document.getElementById("table");
    let rows = table.querySelectorAll("tr");
    let lastRow = rows[rows.length - 1];
    
    if (lastRow.cells.length >= 5) {
        lastRow = document.createElement("tr");
        table.appendChild(lastRow);
    }
    
    let newNumber = Math.floor(Math.random() * 100);
    let style = newNumber >= 50 ? 'style="background-color: orange;"' : "";
    lastRow.innerHTML += `<td ${style}>${newNumber}</td>`;
}

createTable();
