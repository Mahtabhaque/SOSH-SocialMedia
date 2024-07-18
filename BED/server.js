const express =require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 5000;   
const app = express();
const authRoutes  = require('./routes/validationRoutes');
const postRoutes = require("./routes/postRoutes");

app.use(express.json()); 
app.use(cors());

 const db = mongoose.connect("mongodb+srv://mahtab:Mahtab123@cluster0.t2i2sux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const userRoutes = require("./routes/userRoutes");


app.use('/socialMedia/user',userRoutes);
app.use('/socialMedia/authToken', authRoutes);
app.use('/socialMedia/posts', postRoutes);



app.listen(PORT,()=>console.log(`Server is running at port: ${PORT}`))