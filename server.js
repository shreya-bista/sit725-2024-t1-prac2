// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Route to add two numbers
app.get('/addTwoNumbers', (req, res) => {
    // Extract query parameters from the request URL
    const { num1, num2 } = req.query;

    // Checking if both numbers are provided
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Both numbers are required to perform add operation' });
    }

    // Converting query parameters to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Checking if the provided values are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: 'Invalid numbers provided. Please give valid numbers as input' });
    }

    // Perform addition operation
    const data = number1 + number2;

    // Send the result as JSON response
    res.json({ 
        data,
        message: "Success",
        statusCode: 200,
    });

});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
