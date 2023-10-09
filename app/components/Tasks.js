import React from 'react'

function Tasks({ tasks }) {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Goto Gym</td>
        <td>Edit/Delete</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Goto office</td>
        <td>Edit/Delete</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Goto movie</td>
        <td>Edit/Delete</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Tasks