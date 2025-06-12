import React from 'react'
import style from './AdminCard.module.scss'
const AdminCard = ({item, deleteAdmin}) => {
  return (
   <tr>
    <td><img src={item.image} alt="" /></td>
    <td><p>{item.title}</p></td>
    <td><span>{item.price}</span></td>
    <td><button onClick={deleteAdmin}>Delete</button></td>
   </tr>
  )
}

export default AdminCard
