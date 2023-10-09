"use client";

import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

export default function Home() {
  const [tasks, setTasks] = useState([])

  return (
    <>
    <Header/>
    <Tasks tasks={tasks}/>
    </>
  )
}
