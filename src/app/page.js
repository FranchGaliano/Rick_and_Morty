"use client"
import { useEffect, useState } from "react"
import Card from "../../components/Card";

export default function Home() {
  const [datos, setDatos] = useState([]);

  //Para JavaScript puro:
/*   fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data)=> setDatos(data));
 */

  useEffect(()=>{
    const p1 = fetch("https://rickandmortyapi.com/api/character/?page=1");
    Promise.all([p1]).then(async (values) => {
      const data = await values[0].json();
      setDatos(data.results);
    });
  }, []);
  console.log(datos);
  return (
    <main>
    <h1>Rick and Morty</h1>
    <section id="container">
         {datos.map((el, i)=> <Card key={i} personaje={el} /> )}         
    </section>
    </main>
  )
}
