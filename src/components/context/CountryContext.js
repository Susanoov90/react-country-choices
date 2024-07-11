import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CountryContext = createContext()

export const useCountryContext = () => useContext(CountryContext)

export const CountryContextProvider = ({ children }) => {
    /**Default parameters in props*/
    const [parameters, setParameters] = useState({
        translateTo: "",
        flags: null,
        desc: null,
    })

    /** useState which receives countries by axios */
    const [countries, setCountries] = useState([])
    const [newCountries, setNewCountries] = useState([])

    /** The export format which is going to be used in the main file */
    const formatCountries = {
        name: "",
        flag: "",
    }

    useEffect(() => {
        /** Function used in useEffect to retrieve by Axios, every countries from REST Countries API */
        const getAllCountries = async () => {
            await axios.get(`https://restcountries.com/v3.1/all`, {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then(response => { setCountries(response.data) })
                .catch((error) => console.log(error))
        }
        getAllCountries();
    }, [])

    useEffect(() => {
        /*** Function used in useEffect to dynamically translate countries putted in the countries useState
        ** The 'return value' is void but the main point is to store the translated result in a useState called newCountries */
        const treatCountries = () => {
            //Default Edition if nothing was specified (work)
            if (parameters.translateTo === "") {
                countries.sort((a, b) => {
                    if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) {
                        return 1
                    }
                    if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.name.common,
                        flag: country.flags.png,
                    })))
            }

            //French Edition (work)
            if (parameters.translateTo === "fra") {
                countries.sort((a, b) => {
                    if (a.translations.fra.common.toLowerCase() > b.translations.fra.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.fra.common.toLowerCase() < b.translations.fra.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.fra.common,
                        flag: country.flags.png,
                    })))
                console.log("countries", countries.translations)
            }

            //English Edition (work)
            if (parameters.translateTo === "eng") {
                countries.sort((a, b) => {
                    if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) {
                        return 1
                    }
                    if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.name.common,
                        flag: country.flags.png,
                    })))
            }

            //Arab Edition (work)
            if (parameters.translateTo === "ara") {
                countries.sort((a, b) => {
                    if (a.translations.ara.common.toLowerCase() > b.translations.ara.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.ara.common.toLowerCase() < b.translations.ara.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.ara.common,
                        flag: country.flags.png,
                    })))
            }

            //Bre Indonesien Edition (work)
            if (parameters.translateTo === "bre") {
                countries.sort((a, b) => {
                    if (a.translations.bre.common.toLowerCase() > b.translations.bre.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.bre.common.toLowerCase() < b.translations.bre.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.bre.common,
                        flag: country.flags.png,
                    })))
            }

            //Ces Tcheque Edition (work)
            if (parameters.translateTo === "ces") {
                countries.sort((a, b) => {
                    if (a.translations.ces.common.toLowerCase() > b.translations.ces.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.ces.common.toLowerCase() < b.translations.ces.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.ces.common,
                        flag: country.flags.png,
                    })))
            }

            //Cym English Edition (work)
            if (parameters.translateTo === "cym") {
                countries.sort((a, b) => {
                    if (a.translations.cym.common.toLowerCase() > b.translations.cym.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.cym.common.toLowerCase() < b.translations.cym.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.cym.common,
                        flag: country.flags.png,
                    })))
            }

            //Deutsch Edition (work)
            if (parameters.translateTo === "deu") {
                countries.sort((a, b) => {
                    if (a.translations.deu.common.toLowerCase() > b.translations.deu.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.deu.common.toLowerCase() < b.translations.deu.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.deu.common,
                        flag: country.flags.png,
                    })))
            }

            //Estonien Edition (work)
            if (parameters.translateTo === "est") {
                countries.sort((a, b) => {
                    if (a.translations.est.common.toLowerCase() > b.translations.est.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.est.common.toLowerCase() < b.translations.est.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.est.common,
                        flag: country.flags.png,
                    })))
            }

            //Finnois Edition (work)
            if (parameters.translateTo === "fin") {
                countries.sort((a, b) => {
                    if (a.translations.fin.common.toLowerCase() > b.translations.fin.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.fin.common.toLowerCase() < b.translations.fin.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.fin.common,
                        flag: country.flags.png,
                    })))
            }

            //Hrv Croate Edition (dont work)
            if (parameters.translateTo === "hrv") {
                countries.sort((a, b) => {
                    if (a.translations.hrv.common.toLowerCase() > b.translations.hrv.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.hrv.common.toLowerCase() < b.translations.hrv.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.hrv.common,
                        flag: country.flags.png,
                    })))
            }

            //Hun Hongrois Hungrie Edition (work)
            if (parameters.translateTo === "hun") {
                countries.sort((a, b) => {
                    if (a.translations.hun.common.toLowerCase() > b.translations.hun.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.hun.common.toLowerCase() < b.translations.hun.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.hun.common,
                        flag: country.flags.png,
                    })))
            }

            //Italian Edition (work)
            if (parameters.translateTo === "ita") {
                countries.sort((a, b) => {
                    if (a.translations.ita.common.toLowerCase() > b.translations.ita.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.ita.common.toLowerCase() < b.translations.ita.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.ita.common,
                        flag: country.flags.png,
                    })))
            }

            //Japan Edition (dont work)
            if (parameters.translateTo === "jpn") {
                countries.sort((a, b) => {
                    if (a.translations.jpn.common > b.translations.jpn.common) {
                        return 1
                    }
                    if (a.translations.jpn.common < b.translations.jpn.common) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.jpn.common,
                        flag: country.flags.png,
                    })))

                console.log("japan", newCountries)
            }

            //Korean Edition (work)
            if (parameters.translateTo === "kor") {
                countries.sort((a, b) => {
                    if (a.translations.kor.common > b.translations.kor.common) {
                        return 1
                    }
                    if (a.translations.kor.common < b.translations.kor.common) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.kor.common,
                        flag: country.flags.png,
                    })))
            }

            //Nld Neerlandais Edition (work)
            if (parameters.translateTo === "nld") {
                countries.sort((a, b) => {
                    if (a.translations.nld.common.toLowerCase() > b.translations.nld.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.nld.common.toLowerCase() < b.translations.nld.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.nld.common,
                        flag: country.flags.png,
                    })))
            }

            //Per Persan Edition (dont work)
            if (parameters.translateTo === "per") {
                countries.sort((a, b) => {
                    if (a.translations.per.common.toLowerCase() > b.translations.per.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.per.common.toLowerCase() < b.translations.per.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.per.common,
                        flag: country.flags.png,
                    })))
            }

            //Polonese Edition (work)
            if (parameters.translateTo === "pol") {
                countries.sort((a, b) => {
                    if (a.translations.pol.common.toLowerCase() > b.translations.pol.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.pol.common.toLowerCase() < b.translations.pol.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.pol.common,
                        flag: country.flags.png,
                    })))
            }

            //Portugal Edition (work)
            if (parameters.translateTo === "por") {
                countries.sort((a, b) => {
                    if (a.translations.por.common.toLowerCase() > b.translations.por.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.por.common.toLowerCase() < b.translations.por.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.por.common,
                        flag: country.flags.png,
                    })))
            }

            //Russian Edition (work)
            if (parameters.translateTo === "rus") {
                countries.sort((a, b) => {
                    if (a.translations.rus.common.toLowerCase() > b.translations.rus.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.rus.common.toLowerCase() < b.translations.rus.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.rus.common,
                        flag: country.flags.png,
                    })))
            }

            //Slk Slovaquie Edition (work)
            if (parameters.translateTo === "slk") {
                countries.sort((a, b) => {
                    if (a.translations.slk.common.toLowerCase() > b.translations.slk.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.slk.common.toLowerCase() < b.translations.slk.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.slk.common,
                        flag: country.flags.png,
                    })))
            }

            //Spanish Edition (work)
            if (parameters.translateTo === "spa") {
                countries.sort((a, b) => {
                    if (a.translations.spa.common.toLowerCase() > b.translations.spa.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.spa.common.toLowerCase() < b.translations.spa.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.spa.common,
                        flag: country.flags.png,
                    })))
            }

            //Srp Serbe Edition (work)
            if (parameters.translateTo === "srp") {
                countries.sort((a, b) => {
                    if (a.translations.srp.common.toLowerCase() > b.translations.srp.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.srp.common.toLowerCase() < b.translations.srp.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.srp.common,
                        flag: country.flags.png,
                    })))
            }

            //Sweden Edition (work)
            if (parameters.translateTo === "swe") {
                countries.sort((a, b) => {
                    if (a.translations.swe.common.toLowerCase() > b.translations.swe.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.swe.common.toLowerCase() < b.translations.swe.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.swe.common,
                        flag: country.flags.png,
                    })))
            }

            //Turkish Edition (work)
            if (parameters.translateTo === "tur") {
                countries.sort((a, b) => {
                    if (a.translations.tur.common.toLowerCase() > b.translations.tur.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.tur.common.toLowerCase() < b.translations.tur.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.tur.common,
                        flag: country.flags.png,
                    })))
            }

            //Urd Urdu Edition (work)
            if (parameters.translateTo === "urd") {
                countries.sort((a, b) => {
                    if (a.translations.urd.common.toLowerCase() > b.translations.urd.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.urd.common.toLowerCase() < b.translations.urd.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.urd.common,
                        flag: country.flags.png,
                    })))
            }

            //Zho Chinese Simplified Edition (dont work)
            if (parameters.translateTo === "zho") {
                countries.sort((a, b) => {
                    if (a.translations.zho.common.toLowerCase() > b.translations.zho.common.toLowerCase()) {
                        return 1
                    }
                    if (a.translations.zho.common.toLowerCase() < b.translations.zho.common.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })

                setNewCountries(countries.map(country => (
                    {
                        ...formatCountries,
                        name: country.translations.zho.common,
                        flag: country.flags.png,
                    })))
            }
        }

        treatCountries()
    }, [countries, parameters])

    useEffect(() => {
        /*** Function used in useEffect to dynamically sort the newCountries content to ascend (asc) or descend (desc)
        ** Active only when desc is specified in props. But in default, it's asc */
        const handleOrder = () => {
            if (parameters.desc === true) {
                console.log("ascend")
                newCountries.sort((b, a) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1
                    }
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                })
            }
        }

        handleOrder()
    }, [newCountries])

    return (
        <CountryContext.Provider value={{ parameters, setParameters, newCountries }}>
            {children}
        </CountryContext.Provider>
    )
}
