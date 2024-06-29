const express = require('express');
const dotenv = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const bodyparser = require('body-parser');
const cors = require('cors');

dotenv.config();

// Connecting to the MongoDB Client
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
client.connect();

// App & Database
const dbName = process.env.DB_NAME;
const app = express();
const port = 3000;

// Middleware
app.use(bodyparser.json());
app.use(cors());

// Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
});

// Save a password
app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const insertResult = await collection.insertOne(password);
    res.send({ success: true, result: insertResult });
});

// Delete a password by id
app.delete('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const deleteResult = await collection.deleteOne(password);
    res.send({ success: true, result: deleteResult });
});

// Update a password by id
app.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updatedPassword = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const updateResult = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedPassword }
    );
    res.send({ success: true, result: updateResult });
});

app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})
