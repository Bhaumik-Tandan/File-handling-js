// Sending a text file to the server using Fetch API
async function sendTextFile() {
    const fileContent = 'This is a sample text content.';
    const url = 'https://example.com/upload'; // Replace with your server endpoint

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: fileContent
        });

        if (response.ok) {
            console.log('Text file uploaded successfully.');
        } else {
            console.error('Failed to upload text file.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

sendTextFile();


// Uploading a binary file to the server using Fetch API
async function uploadBinaryFile() {
    const fileInput = document.getElementById('fileInput'); // Input element with type="file"
    const file = fileInput.files[0]; // Get the selected file
    const url = 'https://example.com/upload'; // Replace with your server endpoint

    if (!file) {
        console.error('No file selected.');
        return;
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': file.type // Set the appropriate MIME type for the file
            },
            body: file
        });

        if (response.ok) {
            console.log('Binary file uploaded successfully.');
        } else {
            console.error('Failed to upload binary file.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Attach the event listener to the file input element
document.getElementById('fileInput').addEventListener('change', uploadBinaryFile);
