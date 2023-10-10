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
        <th></th>
        <th>{t('task')}</th>
        <th>{t('action')}</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Goto Gym</td>
        <td>{t('edit')} / {t('delete')}</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Goto office</td>
        <td>{t('edit')} / {t('delete')}</td>
      </tr>
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