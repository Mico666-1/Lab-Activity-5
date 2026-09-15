const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes Placeholder
app.post('/api/register', (req, res) => {
    res.status(201).json({ message: "User registered successfully" });
});

app.post('/api/attendance/checkin', (req, res) => {
    res.status(200).json({ message: "Check-in recorded" });
});

app.post('/api/vote', (req, res) => {
    res.status(200).json({ message: "Vote submitted" });
});

app.get('/api/analytics/summary', (req, res) => {
    res.status(200).json({ totalAttendees: 150, topVotedBooth: "IT Club Booth" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});