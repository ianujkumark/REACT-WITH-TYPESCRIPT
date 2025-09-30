import axios from "axios"
import { useState } from "react"

const EditDetails = () => {
  const [id, setId] = useState<number>()
  const [name, setname] = useState<string>()
  const [phone, setPhone] = useState<string>("")
  const [err, setErr] = useState<string>("")
  const [suc, setSuc] = useState<string>("")

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setErr("")
    setSuc("")

    if (!id) {
      setErr("Please enter ID")
      return
    }

    axios
      .patch(`http://localhost:4000/donors/${id}`, { name:name ,phone:phone })
      .then(() => setSuc("Successfully updated"))
      .catch(() => setErr("ID not found or update failed"))
  }

  return (
    <div>
      <label>ENTER THE ID TO EDIT</label>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
      />

      <label>ENTER NEW PHONE</label>
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label>ENTER NEW NAME</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />



      <button onClick={handleClick}>EDIT</button>

      {err && <p className="text-danger">{err}</p>}
      {suc && <p className="text-success">{suc}</p>}
    </div>
  )
}

export default EditDetails
