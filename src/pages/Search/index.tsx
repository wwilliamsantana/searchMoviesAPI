import { useParams } from 'react-router-dom'
import { MoviesCards } from '../../components/MoviesCards'
import { Container, ContainerMoviesCard } from './styles'

export function Search() {
  const { data } = useParams()

  return (
    <Container>
      <h2>
        Resultado: <strong>{data}</strong>
      </h2>

      <ContainerMoviesCard>
        <MoviesCards />
        <MoviesCards />
      </ContainerMoviesCard>
    </Container>
  )
}
