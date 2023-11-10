const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/userSchema');
require("dotenv").config();


//connect to express server
const app = express();

let PORT;
const SECRET_KEY = process.env.JWT_SECRET_KEY;

process.env.NODE_ENV = "development"
  ? (PORT = process.env.DEV_PORT)
  : (PORT = process.env.NETFLIX_PROD_PORT);


//connect to mongodb

const dbURI = process.env.NETFLIX_MONGODB_URL;

  mongoose.connect(dbURI, {
    //no options at the moment

  })
  .then(() => {
        app.listen(PORT, ()=> {
            console.log(
              `Server is in ${process.env.status} mode: Connected to port ${PORT} and to MongoDb`
            );
        }) 

  })
  .catch((error) => {
    console.log('Unable to connect to: ' + error.message);
  }
  );


//middleware

app.use(bodyParser.json());
app.use(cors());


//routes

app.post('/register', async (req, res) => {
    try{
        const {email, username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({email, username, password: hashedPassword});
    await newUser.save();
    res.status(201).json({message: 'User created successfully'});

    }catch(error){

        res.status(500).json({ error: 'Error Signing Up: ' +  error.message });

    }
    
    
});

//GET USERS
app.get('/register', async(req, res) => {
    try{
        const users = await User.find();
        res.status(201).json(users);

    }catch(error){
        res.status(500).json( {error: 'Unable to get Users: ' + error.message} );
    }
});

//get login

app.post('/login', async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({error: 'Invalid Credentials'})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).json({error: 'Invalid credentials'});
        }
        const token = jwt.sign({ userId: user._id}, SECRET_KEY, {expiresIn: '1hr'});
        res.status(200).json({message: 'Login successful'});

    }catch(error){
        res.status(500).json({error: 'Login error: ' + error.message});
    }
})



