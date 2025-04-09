# react-country-choices 🌍

`react-country-choices` est un composant React modulaire permettant d’intégrer facilement un sélecteur de pays dans vos formulaires.Il est pensé pour être dynamique et réactif selon le pays choisi, avec prise en charge des traductions, des drapeaux, et la gestion des champs selon le pays sélectionné.

> 📡 Ce composant repose sur l’API publique **[REST Countries](https://restcountries.com/)** pour récupérer dynamiquement les informations de pays : noms, codes ISO, langues, drapeaux, etc.

## ✨ Fonctionnalités

- ✅ Sélecteur de pays réactif
- 🌐 Traduction des noms de pays (`translateTo`)
- 🚩 Affichage des drapeaux (`flags`)
- ⚡ Callback dynamique (`onChangeCountry`) pour capturer le pays sélectionné
- 📦 Léger et facile à intégrer dans tout projet React

## 📦 Installation

```bash
npm install react-country-choices
```

## 🚀 Exemple d'utilisation de base

💡 **Note importante** :

Pour que le composant fonctionne correctement  **et que l'interface se recharge automatiquement en fonction du pays sélectionné** , vous devez impérativement créer une fonction `handleSelectCountry()` qui actualise l'état selon la logique métier désirée.

```js
import { useState } from "react";
import Country from "../Country";
import { Result } from "./Result"; // composant d'affichage du résultat

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
        translateTo="eng"
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

```

### 🔍 Pourquoi `handleSelectCountry` est crucial ?

La fonction `handleSelectCountry(val)` permet de :

* **appliquer une logique personnalisée** selon le pays sélectionné
* **modifier dynamiquement le formulaire ou l'affichage** en fonction du contexte pays
* garder le système  **ouvert à l'évolution** , sans figer le comportement


### 🧠 Astuce : `handleChange`

Cette fonction permet :

* une **gestion centralisée des champs**
* un reset automatique de l’état `submitted` pour éviter que `Result` s’affiche avant validation


## ⚙️ Props disponibles

| Prop                | Type        | Description                                                                                                                                                                                                                     |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `translateTo`     | `string`  | Code ISO de la langue pour traduire les noms de pays `<br>` (ex: `"kor"` pour coréen, `"fra"` pour français, etc.) Voir l'’API publique **[REST Countries](https://restcountries.com/)** pour comprendre les props |
| `flags`           | `boolean` | Affiche les drapeaux des pays à côté du nom                                                                                                                                                                                  |
| `onChangeCountry` | `func`    | Callback qui renvoie la valeur sélectionnée pour `<br>` mettre à jour dynamiquement le formulaire                                                                                                                          |

## 📁 Structure du package

```plaintext
react-country-choices/
├── components/
│   ├── imports/
│   │   ├── Checkbox.js
│   │   ├── Radio.js
│   │   └── Select.js
│   ├── context/
│   │   └── CountryContext.js
│   ├── demo/
│   │   ├── Form.js
│   │   ├── Form.css
│   │   └── Result.js
│   └── styles/
│       └── Select.css
│   └── Country.js
├── App.js
├── index.js
```

## 📘 Roadmap

- Migration progressive vers **TypeScript** prévue pour améliorer la robustesse et la documentation du code.

> 🛠️ **Cette transition est en réflexion, le projet étant encore en phase d’évolution.**

- Modularisation avancée des composants
- Ajout de tests unitaires
- Création d’une documentation en ligne interactive

## 🙇‍♂️ Mentions spéciales

- [**REST Countries API**](https://restcountries.com/) : utilisée pour récupérer les données des pays (noms, codes, drapeaux, langues…)
- Merci à la communauté open source pour les idées et les contributions futures 🙌
