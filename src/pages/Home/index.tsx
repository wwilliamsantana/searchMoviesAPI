import axios from 'axios'
import { useEffect, useState } from 'react'
import { MoviesCards } from '../../components/MoviesCards'
import { Container, ContainerMoviesCard } from './styles'

interface GetMoviesTopRated {
  id: number
  poster_path: string
  title: string
  vote_average: number
}

const url = import.meta.env.VITE_API
const key = import.meta.env.VITE_API_KEY

export function Home() {
  const [movies, setMovies] = useState<GetMoviesTopRated[]>([])

  async function getMoviesTopRated() {
    const response = await axios(`${url}top_rated`, {
      params: {
        api_key: key,
        language: 'pt-BR',
      },
    })

    const data = await response.data.results

    setMovies(data)
  }

  useEffect(() => {
    getMoviesTopRated()
  }, [])

  return (
    <Container>
      <h2>Melhores Resultados</h2>

      <ContainerMoviesCard>
        {movies.map((item) => (
          <MoviesCards key={item.id} movies={item} />
        ))}
      </ContainerMoviesCard>
    </Container>
  )
}
