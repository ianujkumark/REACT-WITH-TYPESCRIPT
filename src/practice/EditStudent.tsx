import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

interface Student {
  id: string
  name: string
  email: string
  phone:string
  date: string
}

interface Status {
  id: boolean
  name: boolean
  email: boolean
  phone: boolean
  date: boolean
}

const EditStudent = () => {
  const navigate = useNavigate()
  const { studentid } = useParams()

  const [student, setStudent] = useState<Student>({
    id: "",
    name: "",
    email: "",
    phone:"",
    date: "",
  })

  const [check, setCheck] = useState<Status>({
    id: true,
    name: true,
    email: true,
    phone: true,
    date: true,
  })

  const [errMessage, setErrMessage] = useState<Student>({
    id: "",
    name: "",
    email: "",
    phone:"",
    date: "",
  })

  useEffect(() => {
    axios
      .get(`http://localhost:8000/student/${studentid}`)
      .then((res) => setStudent(res.data))
      .catch((e) => console.log(e))
  }, [studentid])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setStudent({ ...student, [name]: value })

    let regex: RegExp | null = null
    let error = ""

    switch (name) {
      case "id":
        regex = /^[0-9a-zA-Z]+$/
        error = "ENTER VALID ID"
        break
      case "name":
        regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/
        error = "ENTER VALID NAME (Firstname Lastname)"
        break
      case "email":
        regex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        error = "ENTER VALID EMAIL"
        break
      case "phone":
        regex = /^[0-9]{10}$/
        error = "ENTER VALID PHONE (10 digits)"
        break
      case "date":
        regex = /^\d{4}-\d{2}-\d{2}$/
        error = "ENTER VALID DATE"
        break
      default:
        break
    }

    if (regex && !regex.test(value)) {
      setErrMessage({ ...errMessage, [name]: error })
      setCheck({ ...check, [name]: true })
    } else {
      setErrMessage({ ...errMessage, [name]: "" })
      setCheck({ ...check, [name]: false })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!(check.id && check.name && check.email && check.phone && check.date)){
    axios
      .put(`http://localhost:8000/student/${studentid}`, student, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        alert("STUDENT DATA UPDATED SUCCESSFULLY")
        navigate("/")
      })
      .catch((e) => console.log(e))}
      else{
      alert('enter valid data')}
  }

  return (
    <div className="container mt-4">
      <h2>Edit Student</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={student.id}
          onChange={handleChange}
        />
        {check.id && <div className="text-danger">{errMessage.id}</div>}

        <label>NAME:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
        />
        {check.name && <div className="text-danger">{errMessage.name}</div>}

        <label>EMAIL:</label>
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
        />
        {check.email && <div className="text-danger">{errMessage.email}</div>}

        <label>PHONE:</label>
        <input
          type="number"
          name="phone"
          value={student.phone}
          onChange={handleChange}
        />
        {check.phone && <div className="text-danger">{errMessage.phone}</div>}

        <label>DATE:</label>
        <input
          type="date"
          name="date"
          value={student.date}
          onChange={handleChange}
        />
        {check.date && <div className="text-danger">{errMessage.date}</div>}

        <div className="mt-3">
          <button type="submit" className="btn btn-info me-2">
            SAVE
          </button>
          <Link to="/" className="btn btn-danger">
            BACK
          </Link>
        </div>
      </form>
      
    </div>
  )
}

export default EditStudent
