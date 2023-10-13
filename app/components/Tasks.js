import React from 'react'
import { useTranslation } from 'react-i18next';

function Tasks({ tasks, deleteTaskHandler }) {

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