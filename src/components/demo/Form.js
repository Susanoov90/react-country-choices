import { useState } from "react"
import Country from "../Country"

export const Form = () => {
    const [form, setForm] = useState({
        title: "",
        country: ""
    })

    const handleSelectCountry = (val) => {
        return val
    }

    return (
        <div style={{ width: "100%", padding: 10 }}>
            <input onChange={(e) => setForm({ ...form, title: e.target.value })} type="text" placeholder="Enter a title" style={{ width: "100%" }} />
            <Country.Select translateTo="kor" flags onChangeCountry={(value) => setForm({ ...form, country: handleSelectCountry(value) })} />

            <button onClick={console.log("form Submit", form)} style={{ padding: 10 }}>Submit</button>
        </div>
    )
}