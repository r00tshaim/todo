// pages/index.js
/*import LanguageSwitcher from '@/app/components/LanguageSwitcher';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <h2>{t('todo')}</h2>
      <LanguageSwitcher />
    </div>
  );
}*/

"use client";

import { useEffect, useState } from "react"
import Header from "@/app/components/Header"
import Tasks from "@/app/components/Tasks"
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import AddTask from "@/app/components/AddTask";


export default function Home() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      try{
        const res = await fetch('/api/task/')
        const data = await res.json();
        const tasks = data.tasks;
        setTasks(tasks);
        console.log("tasks=",tasks)
  
        if(res.ok){
          console.log(`got tasks data`)
        } else {
          console.log(`getting tasks data failed`)
        }
      }catch(err) {
        console.log(`Error with GET call error`, err)
      }
    }

    fetchTasks();

  },[])

  if(tasks.length === 0){
    return (
      <>
      <Header/>
      <LanguageSwitcher />
      <p>Loading....</p>
      </>
    )
  } else {

    return (
      <>
      <Header/>
      <LanguageSwitcher />
      <AddTask />
      <Tasks tasks={tasks}/>
      </>
    )
  }
}

