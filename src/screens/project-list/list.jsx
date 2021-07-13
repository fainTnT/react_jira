import React from 'react'

export default function List({ list,users }) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(project =>
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{users.find(user => user.id === project.personId)?.name||'未知'}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}
