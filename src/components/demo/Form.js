import { useState } from "react";
import Country from "../Country";
import { Result } from "./Result";

export const Form = () => {
    const [form, setForm] = useState({
      title: "",
      country: ""
    });
  
    const [submitted, setSubmitted] = useState(false);
  
    // Fonction pivot : ici vous pouvez adapter dynamiquement le comportement
    const handleSelectCountry = (val) => {
      return val; // ou appliquez une logique personnalisée
    };
  
    // Réinitialise l'affichage des résultats à chaque modification
    const handleChange = (key, value) => {
      setForm({ ...form, [key]: value });
      setSubmitted(false); // empêche d'afficher Result tant qu'on n'a pas cliqué "Submit"
    };
  
    const handleSubmit = () => {
      setSubmitted(true);
      console.log("Form Submit", form);
    };
  
    return (
      <div style={{ width: "80%", marginTop: "2rem" }}>
        <input
          type="text"
          placeholder="Enter a title"
          style={{ width: "100%", padding: "1rem" }}
          onChange={(e) => handleChange("title", e.target.value)}
          value={form.title}
        />
  
        <Country.Select
          translateTo="fra"
          flags
          onChangeCountry={(value) =>
            handleChange("country", handleSelectCountry(value))
          }
        />
  
        <button onClick={handleSubmit} style={{ padding: 10 }}>
          Submit
        </button>
  
        {submitted && <Result title={form.title} country={form.country} />}
      </div>
    );
  };