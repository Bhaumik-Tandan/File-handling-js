// Sending a text file to the server using Fetch API
async function sendTextFile() {
    const fileContent = 'This is a sample text content.';
    const url = 'https://webhook.site/23148312-e27e-49a4-a782-d393094b3b13'; // Replace with your server endpoint

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


