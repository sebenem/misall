import React from 'react'
import style from './NotFoundPage.module.scss'
import { useNavigate } from 'react-router-dom'
const NotFoundPage = () => {
  const navigation=useNavigate()
  return (
    <div className={style.container}>
      <h1>Not Found</h1>
      <button onClick={()=>navigation('/')}>Go Home</button>
    </div>
  )
}

export default NotFoundPage
