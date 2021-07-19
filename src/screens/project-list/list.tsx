import React from 'react'
import {User} from './search-panel'
interface Project {
  id:string,
  name:string,
  personId:string,
  pin:string,
  organization:string
}
interface ListProps{
  list:Project[],
  users:User[],
}
export default function List({ list,users }:ListProps) {
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
