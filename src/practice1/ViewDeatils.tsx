import axios from "axios"
import type React from "react"
import { useEffect, useState } from "react"

interface Donor {
  id?: number;
  type: "INDIVIDUAL" | "Organization" | "NGO";
  name: string;
  email: string;
  phone: string;
  address: string;
  dob?: string;
  gender?: "Male" | "Female" | "Other";
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  weight?: number;
  lastDonationDate?: string;
  medicalConditions?: string[];
  contactPerson?: string;
  designation?: string;
  membersCount?: number;
  preferredDate?: string;
  registrationNumber?: string;
  areaOfOperation?: string;
  capacity?: number;
}

const ViewDetails:React.FC = () => {

    const [data,setdata] = useState<Donor[]>([])

    const fetchData = () =>{
        axios.get('http://localhost:4000/donors')
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="container">
            <table className="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Conatct Person</th>
                        <th>Blood Group</th>
                        <th>Last Donation</th>
                        <th>Phone No.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>(
                            <tr key={item.id} className={ item.type==="INDIVIDUAL"? "table-success" : ""}>
                                <td>{item.type}</td>
                                <td>{item.name}</td>
                                <td>{item.contactPerson}</td>
                                <td>{item.bloodGroup}</td>
                                <td>{item.lastDonationDate}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default ViewDetails