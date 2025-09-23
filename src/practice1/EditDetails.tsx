import { useState } from "react"


const EditDetails = () => {

    const [id,setid]=useState<number>()

    const handleCLick = () =>{
        
    }
    return (


        <div>
            <label>ENTER THE ID TO EDIT</label>
            <input type="number" name="id" value={id} onChange={(e)=>(setid(Number(e.target.value)))}/>
            <button onClick={handleCLick}>EDIT</button>
        </div>
    )
}

export default EditDetails