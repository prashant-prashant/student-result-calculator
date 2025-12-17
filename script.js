function calculate() {
    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);

    let total = s1 + s2 + s3;
    let percentage = total / 3;

    let resultText = "Total: " + total +
                     " | Percentage: " + percentage.toFixed(2) + "%";

    if (percentage >= 40) {
        resultText += " | Status: PASS";
    } else {
        resultText += " | Status: FAIL";
    }

    document.getElementById("result").innerText = resultText;
}
