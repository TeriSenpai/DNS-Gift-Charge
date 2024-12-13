import React from "react";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [gender, setGender] = useState("man");
  const [age, setAge] = useState(30);
  const [priceMin, setPriceMin] = useState(25);
  const [priceMax, setPriceMax] = useState(100);
  const [hobbies, setHobbies] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();

    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/generate-gifts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceMin, priceMax, gender, age, hobbies }),
      });
      const data = await response.json();
      setResult(data.result.replaceAll("\n", "<br />"));
    } catch (e) {
      alert("Failed to generate gift ideas. Try later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>Генератор подарков</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <h3>Генератор подарков🎁 💡</h3>

        <form onSubmit={onSubmit}>
          <label>Для кого подарок?</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="man">Мужчина</option>
            <option value="woman">Женщина</option>
          </select>

          <label>Возраст</label>
          <input
            type="number"
            min={1}
            max={99}
            name="age"
            placeholder="Введите возраст"
            value={age}
            onChange={(e) => setAge(Number.parseInt(e.target.value))}
          />

          <label>Цена от</label>
          <input
            type="number"
            min={1}
            name="priceMin"
            placeholder="Введите минимальную цену"
            value={priceMin}
            onChange={(e) => setPriceMin(Number.parseInt(e.target.value))}
          />

          <label>Цена до</label>
          <input
            type="number"
            min={1}
            name="priceMax"
            placeholder="Введите максимальную цену"
            value={priceMax}
            onChange={(e) => setPriceMax(Number.parseInt(e.target.value))}
          />

          <label>Хобби</label>
          <input
            type="text"
            name="hobbies"
            placeholder="Введите хобби"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
          <input type="submit" value="Генерировать" />
        </form>

        {loading && (
          <div>
            <h3>Поиск идеальных подарков 🎁 💡</h3>
            <img src="/loading.gif" className={styles.loading} />
          </div>
        )}
        {result && (
          <div
            className={styles.result}
            dangerouslySetInnerHTML={{ __html: result }}
          />
        )}
      </main>
    </div>
  );
}