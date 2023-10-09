import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
}

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local')
  }
  
let client
let clientPromise

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (global._mongoClientPromise != "" || global._mongoClientPromise != null || global._mongoClientPromise != undefined) {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }

    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");

    clientPromise = global._mongoClientPromise
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
  
  // Export a module-scoped MongoClient promise. By doing this in a
  // separate module, the client can be shared across functions.
  export default clientPromise