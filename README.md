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
import Country from "react-country-choices";

export const Form = () => {
  const [form, setForm] = useState({
    title: "",
    country: ""
  });

  // Fonction à adapter pour gérer dynamiquement la sélection
  const handleSelectCountry = (val) => {
    // Il retourne le nom du pays constamment
    return val;
  };

  return (
    <div style={{ width: "100%", padding: 10 }}>
      <input
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        type="text"
        placeholder="Enter a title"
        style={{ width: "100%" }}
      />

      <Country.Select
        translateTo="kor"
        flags
        onChangeCountry={(value) =>
          setForm({ ...form, country: handleSelectCountry(value) })
        }
      />

      <button
        onClick={() => console.log("form Submit", form)}
        style={{ padding: 10 }}
      >
        Submit
      </button>
    </div>
  );
};

```

## ⚙️ Props disponibles

| Prop                | Type        | Description                                                                                                                                                                                                                    |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `translateTo`     | `string`  | Code ISO de la langue pour traduire les noms de pays `<br>` (ex: `"kor"` pour coréen, `"fr"` pour français, etc.) Voir l'’API publique **[REST Countries](https://restcountries.com/)** pour comprendre les props |
| `flags`           | `boolean` | Affiche les drapeaux des pays à côté du nom                                                                                                                                                                                 |
| `onChangeCountry` | `func`    | Callback qui renvoie la valeur sélectionnée pour `<br>` mettre à jour dynamiquement le formulaire                                                                                                                         |

## 📁 Structure du package

```plaintext
react-country-choices/
├── components/
│   ├── Checkbox.js
│   ├── Radio.js
│   └── Select.js
├── context/
│   └── CountryContext.js
├── export/
│   └── Country.js
└── global/
    └── Global.js
```
