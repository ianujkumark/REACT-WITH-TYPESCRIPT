import axios from "axios";
import { useState } from "react";

interface Donor {
  id?: number;
  type: "INDIVIDUAL" | "ORGANISATION" | "NGO" | "SELECT";
  name?: string;
  email?: string;
  phone?: string;
  dob?: string;
  gender?: "Male" | "Female" | "Other";
  bloodGroup?: string;
  weight?: number;
  lastDonationDate?: string;
  address?: string;
  medicalConditions?: string;
}

const AddDetails: React.FC = () => {
  const [formData, setFormData] = useState<Donor>({
    id: undefined,
    type: "SELECT",
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Male",
    bloodGroup: "A+",
    weight: undefined,
    lastDonationDate: "",
    address: "",
    medicalConditions: "None",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]:value})
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/donors", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container" style={{ marginTop: "3%", marginLeft: "5%" }}>
      <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
        <label>ID</label>
        <input
          type="number"
          name="id"
          value={formData.id || ""}
          onChange={handleChange}
          placeholder="ENTER ID"
        />

        <label>Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option>SELECT</option>
          <option>INDIVIDUAL</option>
          <option>ORGANISATION</option>
          <option>NGO</option>
        </select>

        {formData.type === "INDIVIDUAL" && (
          <>
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <label>Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
            >
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>

            <label>Weight</label>
            <input
              type="number"
              name="weight"
              value={formData.weight || ""}
              onChange={handleChange}
            />

            <label>Last Donation Date</label>
            <input
              type="date"
              name="lastDonationDate"
              value={formData.lastDonationDate}
              onChange={handleChange}
            />

            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />

            <label>Medical Conditions</label>
            <input
              type="text"
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleChange}
            />
          </>
        )}

        <button className="btn btn-danger">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddDetails;
