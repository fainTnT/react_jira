import React from 'react';
import { useState, useEffect } from 'react'
import SearchPanel from './search-panel'
import List from './list'
import { cleanObject, useMount, useDebounce } from '../../utils'
//  TS文件引入JS文件报错 下载QS的TS文件 npm install @types/qs -D
import * as qs from 'qs';

const apiUrl = process.env.REACT_APP_API_URL


export default function Index() {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])

  const debounceParam = useDebounce(param,1000)
  // 页面加载获取列表
  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [])

  useMount(
    () => {
      fetch(`${apiUrl}/users`).then(async res => {
        if (res.ok) {
          setUsers(await res.json())
        }
      })
    }
  )

  // 输入框变化获取列表
  useEffect(
    () => {
      fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res => {
        if (res.ok) {
          setList(await res.json())
        }
      })
    }, [debounceParam]
  )

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  )
}
