//server connection.js
const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("✅ MongoDB Connected");
        return mongoose;
    })
    .catch(err => {
        console.error("❌ MongoDB Connection Error: " + err);
        process.exit(1); // exit if DB fails
    });

module.exports = conn;
