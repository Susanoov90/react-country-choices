import { useEffect } from "react";
import { useCountryContext } from "../context/CountryContext";
import { Autocomplete, TextField } from '@mui/material';
import PropTypes from "prop-types";
import '../styles/Select.css'
import { useState } from "react";

const Select = ({ ...props }) => {
    const [selectedOption, setSelectedOption] = useState({
        name: "",
        flag: "",
    })
    console.log("Select", props);
    // const { parameters, setParameters, newCountries } = useContext(CountryContext);

    const handleSelect = (value) => {
        setSelectedOption(value)
    }

    const { setParameters, newCountries } = useCountryContext()
    const { translateTo, flags, desc, onChangeCountry } = props
    let { value } = props

    // console.log("onChange", onChangeCountry)
    // console.log("value CountrySelected", value)

    useEffect(() => {
        handleSelect("")
        setParameters(state => ({ ...state, translateTo: translateTo, flags: flags, desc: desc }));
    }, [translateTo, flags, desc]);

    return (
        <Autocomplete
            id="country-select"
            className="country-overall"
            onChange={(event, value) => { onChangeCountry(value.name); setSelectedOption(value) }}
            options={newCountries}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <div {...optionProps} className="country-option" key={key}>
                        {flags ? <img height={20} src={option.flag === null ? "" : option.flag} alt={`${option.name} flag`} /> : ""}
                        <span>{option.name}</span>
                    </div>
                );
            }}
            
            renderInput={(params) => <div className="container-textField">
                <img className="selected-country-choice" src={selectedOption?.flag} /><TextField className="" {...params} label="Select..." />
            </div>}
        />
    )
}

export default Select;

Select.propTypes = {
    translateTo: PropTypes.string,
    flags: PropTypes.bool,
    desc: PropTypes.bool,
    onChange: PropTypes.func,
}