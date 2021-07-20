import React, { FormEvent } from 'react';
export default function LoginScreen(){
  const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    //const username = (event.currentTarget.element[0] as HTMLInputElement).value
    console.log(event)
  }
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">
        <input type="text" id="username" />
      </label>
    </div>
    <div>
      <label htmlFor="password">
        <input type="password" id="password" />
      </label>
    </div>
    <button type="submit" >登陆</button>
  </form>
}