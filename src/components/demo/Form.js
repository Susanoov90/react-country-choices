import { useState } from "react";
import Country from "../Country";
import { Result } from "./Result";

export const Form = () => {
  const [form, setForm] = useState({
    title: "",
    country: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSelectCountry = (val) => val;

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Form Submit", form);
  };

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
    setSubmitted(false);
  };

  return (
    <div style={{ width: "80%", marginTop: "2rem"}}>
      <input
        type="text"
        placeholder="Enter a title"
        style={{ width: "100%", padding : "1rem" }}
        onChange={(e) => handleChange("title", e.target.value)}
        value={form.title}
      />

      <Country.Select
        translateTo="eng"
        flags
        onChangeCountry={(value) => handleChange("country", handleSelectCountry(value))}
      />

      <button onClick={handleSubmit} style={{ padding: 10 }}>
        Submit
      </button>

      {submitted && <Result title={form.title} country={form.country} />}
    </div>
  );
};
