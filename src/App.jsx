import { useState, useEffect } from "react"
import { FaRegStar, FaStar } from 'react-icons/fa';
import axios from "axios"

export function App() {

  const [info, setInfo] = useState([])

  const getData = async () => {
    try {
      const dados = await axios.get('https://fakestoreapi.com/products')
      setInfo(dados.data)
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <main>
      <h1>VainaExpress</h1>
      <section className="cards">
        {info.map((item) => (
          <article key={item.id}>
            <img src={item.image} alt={item.description} />
            <h2>{item.title}</h2>
            <p className="paragraph">{item.description}</p>
            <div className="price_rating">
              <span>
                {Array.from({ length: 5 }, (_, index) => {
                  if (index < Math.round(item.rating.rate)) {
                    return <FaStar key={index} />;
                  }
                  return <FaRegStar key={index} />;
                })}
                ({(item.rating.rate)})</span>
              <h4>U${item.price}</h4>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
