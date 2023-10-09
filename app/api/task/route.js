import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


export async function GET(request) {
    try {
      const client = await clientPromise;
      const database = client.db("todo");
      const tasksCollection = database.collection("tasks");
      const query = {};
      const tasks = await tasksCollection.find(query).toArray();
      return NextResponse.json({ tasks, ok: true })
    } catch(err) {
      // Ensures that the client will close when you finish/error
      console.log(`ERROR in GET /api/task:`, err)
    }
  }

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const database = client.db("todo");
    const tasksCollection = database.collection("tasks");
    const task = tasksCollection.insertOne(body);
    return NextResponse.json({ task, ok: true })
  } catch(err) {
    // Ensures that the client will close when you finish/error
    console.log(`ERROR in POST /api/task:`, err)
  }
}