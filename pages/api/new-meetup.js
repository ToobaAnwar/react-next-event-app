import { MongoClient } from "mongodb";

// api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://toobaanwar:tooba2829@cluster0.svrdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const meetupCollection = db.collection("Cluster0");
    const result = await meetupCollection.insertOne(data);
 
    client.close();

    res.status(201).json({ message: "Meetup Inserted!" });
  }
}

export default handler;
