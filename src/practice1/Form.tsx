import React, { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  choice: string;
  dropdown: string;
  agree: boolean;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  choice?: string;
  dropdown?: string;
}

const FormExam = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    choice: "",
    dropdown: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setForm((s) => ({ ...s, [name]: target.checked }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const validate = (): Errors => {
    const err: Errors = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "Invalid email";

    if (!form.phone.trim()) err.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone)) err.phone = "Phone must be exactly 10 digits";

    if (!form.choice) err.choice = "Please select one radio option";
    if (!form.dropdown) err.dropdown = "Please choose from dropdown";
    return err;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      console.log("Submitted data:", form);
      alert("Form submitted. Check console for data.");
      setForm({ name: "", email: "", phone: "", choice: "", dropdown: "", agree: false });
    }
  };

  useEffect(() => {
    const err = validate();
    setIsValid(Object.keys(err).length === 0 && form.agree);
  }, [form,validate]);

  return (
    <form className="container mt-4 p-3 border rounded shadow" onSubmit={handleSubmit}>
      <h3 className="mb-3 text-primary">Form Example</h3>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" className="form-control"
          value={form.name} onChange={handleChange} />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control"
          value={form.email} onChange={handleChange} />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="number"
          name="phone"
          className="form-control"
          value={form.phone}
          onChange={handleChange}
          min="0"
        />
        {errors.phone&& <div data-testid="" className="text-danger">{errors.phone}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Choices</label><br />
        <div className="form-check form-check-inline">
          <input type="radio" name="choice" value="Option1"
            checked={form.choice === "Option1"} onChange={handleChange}
            className="form-check-input" />
          <label className="form-check-label">Option1</label>
        </div>
        <div className="form-check form-check-inline">
          <input type="radio" name="choice" value="Option2"
            checked={form.choice === "Option2"} onChange={handleChange}
            className="form-check-input" />
          <label className="form-check-label">Option2</label>
        </div>
        <div className="form-check form-check-inline">
          <input type="radio" name="choice" value="Option3"
            checked={form.choice === "Option3"} onChange={handleChange}
            className="form-check-input" />
          <label className="form-check-label">Option3</label>
        </div>
        {errors.choice && <div className="text-danger">{errors.choice}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Dropdown</label>
        <select name="dropdown" className="form-select"
          value={form.dropdown} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
        </select>
        {errors.dropdown && <div className="text-danger">{errors.dropdown}</div>}
      </div>

      <div className="form-check mb-3">
        <input type="checkbox" name="agree" className="form-check-input"
          checked={form.agree} onChange={handleChange} />
        <label className="form-check-label">I agree</label>
      </div>

      <div className="form-check mb-3">
        <input type="checkbox" name="agree" checked={form.agree} className="form-check-input" 
        onChange={handleChange}/>
      </div>

      <button type="submit" className="btn btn-primary" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default FormExam;
