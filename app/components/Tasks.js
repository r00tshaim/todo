import React from 'react'
import { useTranslation } from 'react-i18next';

function Tasks({ tasks }) {
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
          <th>{item._id}</th>
          <td>{item.name}</td>
          <td>{t('edit')} / {t('delete')}</td>
        </tr>
        ))}
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Goto movie</td>
        <td>{t('edit')} / {t('delete')}</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Tasks