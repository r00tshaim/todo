import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function AddTask() {
    const [taskData, setTaskData] = useState('')
    const [inputValue, setInputValue] = useState('')

    const { t } = useTranslation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue(e.target.value);
        setTaskData({ ...taskData, [name]: value });
      };

  const addTaskHandler = async (e) => {
    e.preventDefault();
    try{
      const encodedInputValue = encodeURIComponent(inputValue);
      console.log(`encodedInputValue=`, encodedInputValue)
      console.log("adding task=", taskData)
        const res = await fetch('/api/task/', {
          method: 'POST',
          headers: {
            'Content-type': 'applicaton/json',
          },
          body: JSON.stringify(taskData)
        })
    
        if(res.ok){
          console.log(`Task added`)
        } else {
          console.log(`Task adding failed`)
        }
      }catch(err) {
        console.log(`Error with POST call error`, err)
      }
  }  

  return (
    <form acceptCharset="utf-8" className='container mt-4 mb-2'>   
            <input style={{fontFamily: "Gujrati-Saral-1"}} type="text" value={inputValue} placeholder={t('typehere')} name="name" onChange={handleChange} className="input input-bordered w-full max-w-xs" lang="gu"/>
            <button onClick={addTaskHandler} className="btn btn-neutral ml-1">{t('addtask')}</button>
    </form>
  )
}



export default AddTask