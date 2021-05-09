const express = require("express");
const connectDB = require('./config/db')

const app = express();

//Connect DB
connectDB();

app.use(express.json({ extended: false}));

app.get('/', (req,res) => res.send('API running'))

app.use('/api/product', require('./routes/api/product'))
app.use('/api/family', require('./routes/api/family'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${5000}`));

//rafc
