import React from 'react'
import { useTranslation } from 'react-i18next';

function Tasks({ tasks }) {

  const deleteTaskHandler = async (taskId) => {
    try {
      console.log(`deleteTaskHandler called for taskid=${taskId} type=${typeof taskId}`)
      const res = await fetch(`/api/task/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'applicaton/json',
          Accept: 'applicaton/json'
        },
      });

      // Call .json() on the response to get the JSON body
      //const data = await res.json(); // <-- Add this line
      console.log(`deleteTaskHandler res=${res.json()}`)
  
      if (res.ok) {
        console.log(`Task deleted with id=${taskId}`);
      } else {
        console.log(`Task deletion failed with id=${taskId}`);
      }
    } catch (err) {
      console.log(`Error while deleting task with id=${taskId} DELETE call error ${err}`);
    }
  };

  const { t } = useTranslation();
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>{t('id')}</th>
        <th>{t('task')}</th>
        <th>{t('action')}</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {tasks && tasks.map((item) => (
          <tr key={item._id}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td><button className="btn btn-outline btn-info">{t('edit')}</button> <button onClick={() => {deleteTaskHandler(item._id)}} className="btn btn-outline btn-warning">{t('delete')} X</button></td>
          </tr>
        ))}
    </tbody>
  </table>
</div>
  )
}

export default Tasks