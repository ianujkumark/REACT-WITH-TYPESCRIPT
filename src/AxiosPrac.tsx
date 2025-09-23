import { useEffect, useState } from "react";
import axios from "axios";

interface Employee {
  id: number;
  name: string;
  designation: string;
}

const AxiosPrac = () => {
  const [emp, setEmp] = useState<Employee[]>([]);
  const [newEmployee, setNewEmployee] = useState<Employee>({
    id: 0,
    name: "",
    designation: "",
  });
  const [updateId, setUpdateId] = useState<number>(0);
  const [updateDesignation, setUpdateDesignation] = useState<string>("");

  // ---------- GET ----------
  useEffect(() => {
    axios
      .get("http://localhost:4000/emp")
      .then((response) => {
        setEmp(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ---------- POST ----------
  const addEmployee = () => {
    axios
      .post("http://localhost:4000/emp", newEmployee)
      .then((response) => {
        setEmp([...emp, response.data]);
        setNewEmployee({ id: 0, name: "", designation: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ---------- PUT (replace full object) ----------
  const updateEmployeePUT = () => {
    const employee = emp.find((e) => e.id === updateId);
    if (!employee) {
      alert("Employee not found!");
      return;
    }

    const updatedEmployee: Employee = {
      id: employee.id,
      name: employee.name,
      designation: updateDesignation || employee.designation,
    };

    axios
      .put(`http://localhost:4000/emp/${updateId}`, updatedEmployee)
      .then((response) => {
        setEmp(emp.map((e) => (e.id === updateId ? response.data : e)));
        setUpdateId(0);
        setUpdateDesignation("");
      })
      .catch((err) => console.log("PUT Error:", err));
  };

  // ---------- PATCH (update only designation) ----------
  const updateEmployeePATCH = () => {
    axios
      .patch(`http://localhost:4000/emp/${updateId}`, {
        designation: updateDesignation,
      })
      .then((response) => {
        setEmp(emp.map((e) => (e.id === updateId ? response.data : e)));
        setUpdateId(0);
        setUpdateDesignation("");
      })
      .catch((err) => console.log("PATCH Error:", err));
  };

  return (
    <>
      <h2>Employee List</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESIGNATION</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add Employee (POST)</h3>
      <input
        type="number"
        placeholder="Id"
        value={newEmployee.id}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, id: Number(e.target.value) })
        }
      />
      <input
        type="text"
        placeholder="Name"
        value={newEmployee.name}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Designation"
        value={newEmployee.designation}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, designation: e.target.value })
        }
      />
      <button onClick={addEmployee}>ADD</button>

      <h3>Update Employee</h3>
      <input
        type="number"
        placeholder="Employee ID"
        value={updateId || ""}
        onChange={(e) => setUpdateId(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="New Designation"
        value={updateDesignation}
        onChange={(e) => setUpdateDesignation(e.target.value)}
      />
      <button onClick={updateEmployeePUT}>Update (PUT)</button>
      <button onClick={updateEmployeePATCH}>Update (PATCH)</button>
    </>
  );
};

export default AxiosPrac;
