import { callbackify } from "util"
import {useState,useEffect} from 'react'
export const isFalsy = (value:unknown) => value === 0?false:!value

export const cleanObject = (object:object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if(isFalsy(value)){
      delete result[key]
    }
  })
  return result;
}

// 自定义hook 要以use开头
export const useMount = (callback:()=>void) => {
  useEffect(()=>{
    callback()
  },[])
}

export const useDebounce = (value:unknown,delay?:number) => {
  const [debounceValue,setDebounceValue] = useState(value)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebounceValue(value)
    },delay)
    // 上一次useEffect处理完后运行
    return () => clearTimeout(timer)
  },[value,delay])
  return debounceValue
}