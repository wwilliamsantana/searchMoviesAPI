import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesCards } from '../../components/MoviesCards'
import { Container, ContainerMoviesCard } from './styles'

interface GetMoviesSearch {
  id: number
  poster_path: string
  title: string
  vote_average: number
}

const url = import.meta.env.VITE_SEARCH
const key = import.meta.env.VITE_API_KEY

export function Search() {
  const { data } = useParams()
  const [movies, setMovies] = useState<GetMoviesSearch[]>([])

  async function getMoviesSearch() {
    const response = await axios(`${url}`, {
      params: {
        api_key: key,
        language: 'pt-BR',
        query: data,
      },
    })

    const content = await response.data.results

    setMovies(content)
  }

  useEffect(() => {
    getMoviesSearch()
  }, [])

  return (
    <Container>
      <h2>
        Resultado: <strong>{data}</strong>
      </h2>

      <ContainerMoviesCard>
        {movies.map((item) => {
          return item.poster_path != null ? (
            <MoviesCards key={item.id} movies={item} />
          ) : (
            0
          )
        })}
      </ContainerMoviesCard>
    </Container>
  )
}
