// A revoir ...
import { useEffect, useState } from "react";
import { useCountryContext } from "../context/CountryContext";
import PropTypes from "prop-types";
import '../styles/Checkbox.css';

const Checkbox = ({ ...props }) => {
  const { translateTo, flags, desc, onChangeCountry } = props
  const { newCountries, setParameters } = useCountryContext();
  const [selectedCountries, setSelectedCountries] = useState({
    name: "",
    flag: ""
  });

  useEffect(() => {
    setParameters(state => ({
      ...state,
      translateTo,
      flags,
      desc
    }));
  }, [translateTo, flags, desc]);

  const handleCheckboxChange = (countryName) => {
    const updated = selectedCountries.includes(countryName)
      ? selectedCountries.filter(name => name !== countryName)
      : [...selectedCountries, countryName];

    setSelectedCountries(updated);
    onChangeCountry(updated); // retourne une liste
  };

  return (
    <div className="checkbox-group-container">
      {newCountries.map((country, index) => (
        <label key={index} className="checkbox-country-item">
          <input
            type="checkbox"
            value={country.name}
            checked={selectedCountries.includes(country.name)}
            onChange={() => handleCheckboxChange(country.name)}
          />
          {flags && country.flag && (
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              height={20}
              className="checkbox-country-flag"
            />
          )}
          <span>{country.name}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  translateTo: PropTypes.string,
  flags: PropTypes.bool,
  desc: PropTypes.bool,
  onChangeCountry: PropTypes.func.isRequired
};
