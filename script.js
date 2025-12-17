function submitData() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let marksInputs = document.querySelectorAll(".mark");

    if (!name || !roll) {
        alert("Please enter student details");
        return;
    }

    let marks = [];
    for (let input of marksInputs) {
        let val = Number(input.value);
        if (input.value === "" || val < 0 || val > 100) {
            alert("Marks must be between 0 and 100");
            return;
        }
        marks.push(val);
    }

    let total = marks.reduce((a, b) => a + b, 0);
    let percentage = total / marks.length;

    let grade = "";
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    let status = percentage >= 40 ? "PASS" : "FAIL";

    // Store data for next page
    localStorage.setItem("resultData", JSON.stringify({
        name, roll, marks, total, percentage, grade, status
    }));

    // Redirect to result page
    window.location.href = "result.html";
}
