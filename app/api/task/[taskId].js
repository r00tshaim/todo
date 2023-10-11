// app/api/task/[taskId].js

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb';

export async function DELETE(request) {
  try {
    console.log(`DELETE API funciton called`)
    const { taskId } = request.query;
    console.log(`DELETE API funciton taskId=${taskId}`)
    const client = await clientPromise;
    const database = client.db("todo");
    const tasksCollection = database.collection("tasks");

    // Convert taskId to an ObjectId
    const _id = new ObjectId(taskId); // <-- Add this line

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