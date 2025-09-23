import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css" // make sure bootstrap is imported

interface stud {
  id: number
  name: string
  email: string
  phone: string,
  date:string
}

const CredOpt = () => {
  const [data, setdata] = useState<stud[]>([])
  const [delId,setdelID] = useState<string>("")
  const navigate = useNavigate()

  const handleStudent = () => {
    axios
      .get("http://localhost:8000/student")
      .then((res) => {
        setdata(res.data)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    handleStudent()
  }, [])
  

  const deleteData = (id: number) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete(`http://localhost:8000/student/${id}`)
        .then(() => {
          alert("Data deleted successfully")
          handleStudent() // refresh list instead of reload
        })
        .catch((err) => console.error(err))
    }
  }
  const handleDeleteByInput = () => {
    if (delId === "") {
      alert("Please enter an ID")
      return
    }

    const found = data.find((item) => String(item.id) === delId)
    if (!found) {
      alert("ID not found")
      return
    }

    if (window.confirm(`Are you sure you want to delete ID ${delId}?`)) {
      axios
        .delete(`http://localhost:8000/student/${delId}`)
        .then(() => {
          alert("Data deleted successfully")
          setdelID("") // reset input
          handleStudent()
        })
        .catch((err) => console.error(err))
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Student Records</h2>
      <div className="d-flex justify-content-end mb-3">
        <Link to="/student/create" className="btn btn-success">
          + Add New Student
        </Link>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            // const isEven = item.id % 2 === 0
            const cdate=new Date()
            const d=cdate.toISOString().split('T')[0]
            return (
              <tr
                key={item.id}
                className={ d===item.date? "table-success" : ""}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.date}</td>
                <td>
                  <Link
                    to={`/student/view/${item.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/student/edit/${item.id}`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteData(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="mt-3">
        <label>ENTER ID TO DELETE:</label>
        <input
          type="number"
          className="form-control mb-2"
          value={delId}
          onChange={(e) => String(setdelID(e.target.value))}
        />
        <button onClick={handleDeleteByInput} className="btn btn-danger">
          Delete by ID
        </button>
      </div>
    </div>
  )
}

export default CredOpt
