import { useState } from "react";
// import "./app.css";
import FormInput from "./components/FromInput.js";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    lastname:"",
    role:""
  });

  const [subscribers, setSubscribers] = useState(0)
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      errorMessage:
        "Lastname should be 3-16 characters and shouldn't include any special character!",
      label: "Lastname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "role",
      type: "text",
      placeholder: "Role",
      errorMessage:
        "Role should be 3-16 characters and shouldn't include any special character!",
      label: "Role",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
  ];

  let teachers= [];
  let auditors= [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.role=='auditor') {
      auditors.push(values)
    }else if(values.role=='teacher'){
      teachers.push(values)
    }else{
      alert("Sorry man, this is for only teachers and auditors")
    }
    setSubscribers(subscribers+1)
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
      <h3 className="sub"> {subscribers} are regsitered </h3>
    </div>
      </>
  );
};

export default Form;