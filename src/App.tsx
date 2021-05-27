import { useFormik } from "formik";
import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [data, setData] = useState({});
  console.log("data => ", data);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      setData({ name: values.name, email: values.email });

      console.log("values => ", values);
    },
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <input
          required
          name="name"
          id="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <input
          required
          name="email"
          id="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default App;
