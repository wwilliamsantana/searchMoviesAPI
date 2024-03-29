import axios from 'axios'
import { ChartLine, Hourglass, Scroll, Star, Wallet } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Content, ContentInfo, ContentMain } from './styles'

const url = import.meta.env.VITE_API
const key = import.meta.env.VITE_API_KEY

interface GetDetailMovie {
  budget: number
  poster_path: string
  revenue: number
  title: string
  vote_average: number
  overview: string
  runtime: number
}

export function Details() {
  const { id } = useParams()

  const [movies, setMovies] = useState<GetDetailMovie>()

  async function getDetailMovie() {
    const response = await axios(`${url}${id}`, {
      params: {
        api_key: key,
        language: 'pt-BR',
      },
    })

    const data = await response.data

    setMovies(data)
  }

  useEffect(() => {
    getDetailMovie()
  }, [])

  return (
    <Container>
      {!movies ? (
        <h1>Aguarde!</h1>
      ) : (
        <Content>
          <ContentMain>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
              alt=""
            />
            <h2>{movies.title}</h2>
            <div>
              <Star weight="fill" />
              <strong>{movies.vote_average.toFixed(2)}</strong>
            </div>
          </ContentMain>

          <ContentInfo>
            <div>
              <Wallet size={32} />
              <strong>
                {movies.budget.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </strong>
            </div>
            <div>
              <ChartLine size={32} />
              <strong>
                {movies.revenue.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </strong>
            </div>
            <div>
              <Hourglass size={32} />
              <strong>{movies.runtime} minutos</strong>
            </div>
            <div>
              <Scroll size={32} />
              <strong>{movies.overview}</strong>
            </div>
          </ContentInfo>
        </Content>
      )}
    </Container>
  )
}
