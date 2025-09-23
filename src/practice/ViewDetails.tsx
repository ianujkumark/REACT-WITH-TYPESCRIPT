import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // ensure Bootstrap CSS is imported

interface Stud {
  id: string | number;
  name: string;
  place: string;
  phone: string | number;
}

const ViewDetails = () => {
  const { studentid } = useParams<{ studentid?: string }>();
  const [data, setData] = useState<Stud | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!studentid) {
      setError("No student id provided in URL");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:8000/student/${studentid}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("API error:", err);
        setError("Failed to load student data");
      })
      .finally(() => setLoading(false));
  }, [studentid]);

  if (loading) return <div className="container mt-4">Loading...</div>;
  if (error) return <div className="container mt-4 text-danger">{error}</div>;
  if (!data) return <div className="container mt-4">No student found</div>;

  // convert id safely to number
  const idNum = Number(data.id);
  const isEven = Number.isFinite(idNum) && Math.floor(idNum) % 2 === 0;

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Student Details</h1>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PLACE</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className={isEven ? "table-success" : ""}
            style={{ backgroundColor: isEven ? "#d1e7dd" : undefined }}
          >
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.place}</td>
            <td>{data.phone}</td>
          </tr>
        </tbody>
      </table>

      <Link to="/" className="btn btn-danger mt-3">
        BACK
      </Link>
    </div>
  );
};

export default ViewDetails;
