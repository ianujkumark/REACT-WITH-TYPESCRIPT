import axios from "axios"
import React, { useEffect, useState } from "react"


interface temp{
    name:string,
    phone:number,
    choice:string,
    opt:string,
    check:boolean
}

const FormPractise = () => {

    const [from,setform] =useState<temp>({
        name:"",
        phone:0,
        choice:"",
        opt:'',
        check:false
    })

    const [valid,setvalid] = useState<boolean>(false)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const{name, type , value} = e.target
        if(type==='checkbox')
        {
            const event=e.target as HTMLInputElement
            setform((prev)=>({...prev,[name]:event.checked}))
        }
        else
        setform((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(from.name==='' || from.phone===0 ||  from.check===false || from.choice==='' || from.opt==='')
        {
            setvalid(false)
            return
        }

        axios.post('http://localhost:4000/donors',from)
        .then((res)=>console.log(res.data.id))

    }

    useEffect(()=>{
        if(from.name==='' || from.phone===0 ||  from.check===false || from.choice==='' || from.opt==='')
        {
            setvalid(false)
        }
        else 
            setvalid(true)
    },[from])

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Enter the name</label>
                    <input type="text" name='name' value={from.name} onChange={handleChange} placeholder="enter whole name"/>
                </div>
                <div>
                    <label >Enter the number</label>
                    <input type="number" name='phone' value={from.phone} onChange={handleChange} placeholder="enter whole number"/>
                </div>
                <div>
                    <input type="radio" name='choice' value='hey'  checked={from.choice === 'hey'} onChange={handleChange} /> hey
                    <input type="radio" name='choice' value='hello' checked={from.choice === 'hello'} onChange={handleChange} /> hello
                    <input type="radio" name='choice' value='bye'  checked={from.choice === 'bye'} onChange={handleChange} /> bye
                </div>
                <div>
                    <select name="opt" value={from.opt} onChange={handleChange}>
                        <option value=''>select any option</option>
                        <option value='one'>one</option>
                        <option value='two'>two</option>
                        <option value='three'>three</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" name="check" checked={from.check} onChange={handleChange}/>
                    <label>i agree</label>
                </div>
                <button type="submit" className="btn btn-danger" disabled={!valid}>Submit</button>
            </form>
        </div>
    )
}

export default FormPractise