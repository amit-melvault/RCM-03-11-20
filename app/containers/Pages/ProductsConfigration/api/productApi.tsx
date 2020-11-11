import axios from 'axios';

const API_BASE_URL = ''

// export const getProducts = () =>{
//     return (dispatch)=>{
//        return axios.get(API_BASE_URL+"product/All")
//        .then(response=>{
//            const product = response.data
//            dispatch(getProduct(product))
//        })
//     }
// }

// export const addProducts = (data) =>{
//     var data ={
//         name: data.name,
//         salary: data.salary,
//         exp: data.exp,
//         age: data.age
//     }
//     return (dispatch)=>{
//        return axios.post(API_BASE_URL+"product/add", data)
//        .then(response=>{
//            const data = response.data
//            dispatch(addEmployee(data))
//        })
//     }
// }

// export const updateProducts = (data) =>{
//     var data ={
//         name: data.name,
//         salary: data.salary,
//         exp: data.exp,
//         age: data.age,
//         id: data.id
//     }
//     return (dispatch)=>{
//        return axios.put(API_BASE_URL+"product/update",data)
//        .then(response=>{
//            const data = response.data
//            dispatch(editProducts(data))
//        })
//     }
// }

// export const deleteProducts = (id) =>{
//     return (dispatch)=>{
//        return axios.delete(API_BASE_URL+`product/${id}`)
//        .then(response=>{
//            console.log(response)
//            dispatch(deleteProducts(id))
//        })
//     }
// }