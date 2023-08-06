const content = "This is the content of the text file.";
const blob = new Blob([content], { type: "text/plain" });

const downloadLink = document.createElement("a");
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = "example.txt";
downloadLink.textContent = "Download Text File";
document.body.appendChild(downloadLink);
