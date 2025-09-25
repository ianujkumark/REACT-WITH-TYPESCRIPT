import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

interface temp{
    email:string,
    phone:number | string
}

const LogIn = () => {

    const [loginData,seloginData] =useState<temp>({
        email:"",
        phone:""
    })

    const [totData,settotData] =useState<temp[]>([{
        email:"",
        phone:""
    }])

    const navigate = useNavigate()

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        axios.get('http://localhost:4000/donors')
        .then((res)=>{
        settotData(res.data)
        const filterdata=res.data.filter((temp:temp)=>temp.email===loginData.email && temp.phone===loginData.phone)
        if(filterdata.length>0)
        {
            sessionStorage.setItem("authentication","true")
            navigate('/findblood')
        }})
        .catch((err)=>console.log('error while login',err))       
    }


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4 text-primary">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={loginData.email}
              onChange={(e)=> seloginData({...loginData, email:e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Enter Phone</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your phone"
              name="phone"
              value={loginData.phone}
              onChange={(e)=>seloginData({...loginData,phone:e.target.value})}
            />
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LogIn
