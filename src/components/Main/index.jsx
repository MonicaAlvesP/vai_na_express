import { useState, useEffect } from "react"
import { FaRegStar, FaStar } from 'react-icons/fa'
import s from '../../style/main.module.scss'

import axios from "axios"

export const Main = () => {
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
      <section className={s.cards}>
        {info.map((item) => (
          <article key={item.id} className={s.card}>
            <img src={item.image} alt={item.description} />
            <h2>{item.title}</h2>
            <p className={s.paragraph}>{item.description}</p>
            <span>
              {Array.from({ length: 5 }, (_, index) => {
                if (index < Math.round(item.rating.rate)) {
                  return <FaStar key={index} className={s.star} />;
                }
                return <FaRegStar key={index} className={s.star} />;
              })}
              ({(item.rating.rate)})</span>
            <h4>U$ {item.price}</h4>
            <section className={s.shipping_box}>
              <small>Enviado pelo</small>
              <img src="https://img.icons8.com/?size=100&id=QtdPDOzlNdVc&format=png&color=43cb55" alt="icone de raio" />
              <span>FULL</span>
            </section>
          </article>
        ))}
      </section>
    </main >
  )
}