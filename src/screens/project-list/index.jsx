import React from 'react';
import {useState,useEffect} from 'react'
import SearchPanel from './search-panel'
import List from './list'
import {cleanObject} from '../../utils'
import * as qs from 'qs';

const apiUrl = process.env.REACT_APP_API_URL


export default function Index() {
  const [param,setParam] = useState({
    name:'',
    personId:''
  })
  const [list,setList] = useState([])
  const [users,setUsers] = useState([])
  // 页面加载获取列表
  useEffect(()=>{
    fetch(`${apiUrl}/projects`).then(async res => {
      if(res.ok){
        setList(await res.json())
      }
    })
  },[])

  useEffect(()=>{
    fetch(`${apiUrl}/users`).then(async res => {
      if(res.ok){
        setUsers(await res.json())
      }
    })
  },[])
  // 输入框变化获取列表
  useEffect(()=>{
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
      if(res.ok){
        setList(await res.json())
      }
    })
  },[param])

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  )
}
