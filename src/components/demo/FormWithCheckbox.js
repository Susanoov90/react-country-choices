import { useState } from "react";
import Country from "../Country"; // Vérifie que Country.Checkbox est bien exporté
import { Result } from "./Result";
import logoRCC from "../../logoRCC.png";

export const FormWithCheckbox = () => {
  const [form, setForm] = useState({
    title: "",
    countries: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSelectCountries = (val) => {
    return val;
  };

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
    setSubmitted(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Form Submit", form);
  };

  return (
    <div style={{ width: "80%", marginTop: "2rem" }}>
      <img style={{ width: "14rem", height: "14rem" }} src={logoRCC} />

      <input
        type="text"
        placeholder="Enter a title"
        style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}
        onChange={(e) => handleChange("title", e.target.value)}
        value={form.title}
      />

      <Country.Checkbox
        translateTo="eng"
        flags
        desc
        onChangeCountry={(value) =>
          handleChange("countries", handleSelectCountries(value))
        }
      />

      <button onClick={handleSubmit} style={{ padding: 10, marginTop: "1rem" }}>
        Submit
      </button>

      {submitted && (
        <Result title={form.title} country={form.countries.join(", ")} />
      )}
    </div>
  );
};
