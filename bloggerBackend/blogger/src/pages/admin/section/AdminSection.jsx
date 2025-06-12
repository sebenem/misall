import React, { useEffect, useState } from 'react'
import style from './AdminSection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk } from '../../../redux/reducers/basketSlice'
import { deleteProductThunk, getProductThunk, postProductThunk } from '../../../redux/reducers/productSlice'
import AdminCard from '../../../components/cards/adminCard/AdminCard'
import { useFormik } from 'formik'
const AdminSection = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductThunk())
    }, [dispatch])

const products=useSelector((state)=> state.products.products) || []
const [text, setText]=useState('')
const [sort, setSort]=useState('asc')
const filterData=products.filter(product=>product.title.toLowerCase().includes(text.toLowerCase())).sort((a,b)=>{
  if (sort == 'asc') {
    return a.price - b.price
  } else {
      return b.price - a.price
  }
})
const deleteAdmin=(id)=>{
    dispatch(deleteBasketThunk(id))
    dispatch(deleteProductThunk(id))

}
    const formik = useFormik({
     initialValues: {
       image: '',
       title: '',
       price: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
       dispatch(postProductThunk(values))
     },
   });
  return (
    <div className={style.container}>
         <form onSubmit={formik.handleSubmit}>
       <input
         id="image"
         name="image"
         type="text"
         placeholder='image'
         onChange={formik.handleChange}
         value={formik.values.image}
       />
       <input
         id="title"
         name="title"
         type="text"
         placeholder='title'
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <input
         id="price"
         name="price"
         type="number"
         placeholder='price'
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <button type="submit">Submit</button>
     </form>
      <div className={style.input}>
        <input type="text" placeholder='axtsr' onClick={(e)=> setText(e.target.value)} />
        <button onClick={()=>setSort('asc')}>A-Z</button>
         <button onClick={()=>setSort('dasc')}>Z-A</button>
      </div>
      <div className={style.table}>
        <table border='1'>
<thead>
  <tr>
    <th>Image</th>
    <th>Title</th>
    <th>Price</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  {filterData && filterData.map((item)=>(
    <AdminCard key={item._id} item={item} deleteAdmin={()=>deleteAdmin(item._id)}/>
  ))}
</tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminSection
