import axios from "axios";
import React, { useEffect, useState } from "react";

interface Donor {
  id?: number;
  type: "INDIVIDUAL" | "Organization" | "NGO";
  name: string;
  email: string;
  phone: string;
  address: string;
  dob?: string;
  gender?: "Male" | "Female" | "Other";
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
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

const bloodCompatibility: Record<string, string[]> = {
  "A+": ["A+","O+"],
  "A-": ["A-","O-"],
  "B+": ["B+", "O+"],
  "B-": ["B-","O-"],
  "AB+": ["AB+","A+","B+"],
  "AB-": ["AB-", "A-" , "B-"],
  "O+": ["O+"],
  "O-": ["O-"],
};

const FindBlood = () =>{
    
    const [totalData,settotalData] = useState<Donor[]>([])
    const [bloodG,setbloodG] =useState<string>("A+")
    useEffect(()=>{
        axios.get('http://localhost:4000/donors')
        .then((res)=>settotalData(res.data))
        .catch((err)=>console.log(err))
    },[])
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setbloodG(e.target.value)
    }
    

    // const filterData:Donor[]=totalData?.filter((item)=>bloodG===item.bloodGroup)
    
    const filterData:Donor[]=totalData?.filter((item)=>bloodCompatibility[bloodG].includes(item.bloodGroup))

    const isAuthenticated = sessionStorage.getItem("authentication") === "true";

    return (
        <>
        {isAuthenticated && 
        <div>
        <label>SELECT BLOOD GROUP</label>
        <select onChange={handleChange} value={bloodG}>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
        </select>

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
                        filterData.map((item)=>(
                            <tr key={item.id}>
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
}
        </>
    ) 
}

export default FindBlood