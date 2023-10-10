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

import { useState } from "react"
import Header from "@/app/components/Header"
import Tasks from "@/app/components/Tasks"
import LanguageSwitcher from "@/app/components/LanguageSwitcher";


export default function Home() {
  const [tasks, setTasks] = useState([])

  return (
    <>
    <Header/>
    <LanguageSwitcher />
    <Tasks tasks={tasks}/>
    </>
  )
}

