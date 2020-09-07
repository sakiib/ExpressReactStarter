const express = require('express');
const app = express();

app.get('/api/students', (req, res) => {
    const students = [
        {
            id: 1, firstName: 'sakib', lastName: 'alamin'
        },
        {
            id: 2, firstName: 'aminul', lastName: 'haq'
        },
        {
            id: 3, firstName: 'akash', lastName: 'lanard'
        }
    ];
    res.json(students);
});

const port = 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
