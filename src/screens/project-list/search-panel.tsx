import React from 'react';
// import {useState,useEffect} from 'react'

//定义TS接口
export interface User {
  id:string,
  name:string,
  email:string,
  title:string,
  organization:string,
  token:string
}

interface SearchPanelProps {
  users:User[],
  param:{
    name:string;
    personId:string;
  },
  setParam:(param:SearchPanelProps['param']) => void
}


export default function SearchPanel({users,param,setParam}:SearchPanelProps) {

  
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
