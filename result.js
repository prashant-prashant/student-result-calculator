const data = JSON.parse(localStorage.getItem("resultData"));

if (!data) {
    alert("No result data found!");
    window.location.href = "index.html";
}

// Show result card
document.getElementById("resultCard").style.display = "block";

// Student details
document.getElementById("studentDetails").innerText =
    `Name: ${data.name} | Roll No: ${data.roll}`;

// Result values
document.getElementById("total").innerText =
    `Total Marks: ${data.total}`;

document.getElementById("percentage").innerText =
    `Percentage: ${data.percentage.toFixed(2)}%`;

document.getElementById("grade").innerText =
    `Grade: ${data.grade}`;

document.getElementById("status").innerText =
    `Status: ${data.status}`;

// Draw graph
const ctx = document.getElementById("marksChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: data.marks.map((_, i) => `Subject ${i + 1}`),
        datasets: [{
            label: "Marks",
            data: data.marks,
            backgroundColor: "#16a34a"
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

function goBack() {
    window.location.href = "index.html";
}
