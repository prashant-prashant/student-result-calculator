// Fetch stored result data from localStorage
const data = JSON.parse(localStorage.getItem("resultData"));

// Safety check: if no data found, redirect back
if (!data) {
    alert("No result data found. Please submit the form again.");
    window.location.href = "index.html";
}

// Show result card
const resultCard = document.getElementById("resultCard");
resultCard.style.display = "block";

// Display student details
document.getElementById("studentDetails").innerText =
    `Name: ${data.name} | Roll No: ${data.roll}`;

// Display marks summary
document.getElementById("total").innerText =
    `Total Marks: ${data.total}`;

document.getElementById("percentage").innerText =
    `Percentage: ${data.percentage.toFixed(2)}%`;

document.getElementById("grade").innerText =
    `Grade: ${data.grade}`;

const statusElement = document.getElementById("status");
statusElement.innerText =
    `Status: ${data.status}`;

// Color coding for status
if (data.status === "PASS") {
    statusElement.style.color = "green";
} else {
    statusElement.style.color = "red";
}

// Draw bar chart for marks
const ctx = document.getElementById("marksChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: data.marks.map((_, index) => `Subject ${index + 1}`),
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

// Back button function
function goBack() {
    window.location.href = "index.html";
}
