import React, { useEffect, useState } from 'react'
import style from './AdminSection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAdminThunk, getAdminThunk, postAdminThunk } from '../../../redux/reucers/adminSlice'
import { useFormik } from 'formik'
const AdminSection = () => {
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getAdminThunk())
}, [])

const admin=useSelector((state)=> state.admin.admin)
const admindelete=(data)=>{
  dispatch(deleteAdminThunk(data))
}

const sumbit=(data)=>{
  dispatch(postAdminThunk(data))
}

// const [text, setText]=useState('')
// const [sort, setSort]=useState('asc')
// const filteredProducts = admin.filter(products => products.title.toLowerCase().includes(text.toLowerCase())).sort((a,b) =>{
//   if (sort == 'asc') {
//     return a.price - b.price
//   }else{
//     return b.price - a.price
//   }
// })

const formik = useFormik({
  initialValues: {
      thumbnail: '',
      title: '',
      price: '',
  },
  onSubmit: values => {
      sumbit(values)
    alert(JSON.stringify(values, null, 2));
  },
});

  return (
    <div className={style.container}>
      <form onSubmit={formik.handleSubmit}>
      
      <input
        id="thumbnail"
        name="thumbnail"
        placeholder='Thumbnail'
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
   
      <input
        id="title"
        name="title"
        placeholder='Title'
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <input
        id="price"
        name="price"
        type="text"
        placeholder='Price'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit" onClick={(data)=> sumbit(data)}>Submit</button>
    </form>
    <div className={style.table}>
       <table>
           <thead>
               <tr>
                   <th>Thumbnail</th>
                   <th>Title</th>
                   <th>Price</th>
                   <th>Delete</th>
               </tr>
           </thead>
           <tbody>
           {admin && admin.map(item=>{
        
        return  <tr>
           <td><img src={item.thumbnail} alt="" /></td>
           <td>{item.title}</td>
           <td>{item.price}</td>
           <td><button onClick={()=>admindelete(item.id)}>delete</button></td>
        </tr>
      })}
           </tbody>
       </table>
    </div>
    </div>
  )
}

export default AdminSection
