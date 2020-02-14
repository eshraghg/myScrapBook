import React, { useState } from "react";

const App = () => {
  const [formInf, setFormInf] = useState({});

  const onInputChange = e => {
    setFormInf({ ...formInf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      First Name {formInf.firstName}
      <br />
      <input
        name="firstName"
        value={formInf.firstName}
        onChange={onInputChange}
      />
      <br />
      <br />
      Last Name {formInf.lastName}
      <br />
      <input
        name="lastName"
        value={formInf.lastName}
        onChange={onInputChange}
      />
      <br />
      <br />
      Email {formInf.email}
      <br />
      <input name="email" value={formInf.email} onChange={onInputChange} />
      <br />
      <br />
      Password {formInf.password}
      <br />
      <input
        name="password"
        value={formInf.password}
        onChange={onInputChange}
      />
    </div>
  );
};

export default App;
