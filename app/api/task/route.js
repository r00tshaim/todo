import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb';


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

export async function DELETE(req, res) {
try {
  const {searchParams} = new URL(req.url);
  const taskIdParam = searchParams.get('taskId');
  //console.log(`taskIdParam=${taskIdParam}`)
  const client = await clientPromise;
  const database = client.db("todo");
  const tasksCollection = database.collection("tasks");

  // Convert taskId to an ObjectId
  const _id = new ObjectId(taskIdParam);

  const deleteResult = await tasksCollection.deleteOne({ _id });

  if (deleteResult.deletedCount === 1) {
    return NextResponse.json({ message: "Task deleted successfully", ok: true });
  } else {
    return NextResponse.json({ message: "Task not found", ok: false }, { status: 404 });
  }
} catch (err) {
  console.log(`ERROR in DELETE /api/task:`, err);
  return NextResponse.json({ message: "Internal Server Error", ok: false }, { status: 500 });
}
}