const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://UwUcoms:Nn8vFVCGX48Hd5pv@cluster0.1plpfax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function connectToMongoDB() {
    try {
      await client.connect();
      console.log("Connected to MongoDB Atlas!");
    } catch (error) {
      console.error("Error connecting to MongoDB Atlas:", error);
    }
  }
  
  connectToMongoDB();
    


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
    res.json({
        message: "Hello world",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});