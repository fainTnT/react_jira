import React from 'react';
// import {useState,useEffect} from 'react'

export default function SearchPanel({users,param,setParam}) {

  
  return (
    <div>
      <form action="">
        <input type="text" value={param.name} onChange={evt => setParam(
          {
            ...param,
            name:evt.target.value
          })
        }/>
      </form>
      <select value={param.personId} onChange={evt => setParam(
        {
          ...param,
          personId:evt.target.value
        }
      )}>
        <option value={""}>负责人</option>
        {
          users.map(item=>
            <option value={item.id} key={item.id}>{item.name}</option>
          )
        }
      </select>
    </div>
  )
}
