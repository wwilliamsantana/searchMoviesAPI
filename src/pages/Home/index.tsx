import { MoviesCards } from '../../components/MoviesCards'
import { Container, ContainerMoviesCard } from './styles'

export function Home() {
  return (
    <Container>
      <h2>Melhores Resultados</h2>

      <ContainerMoviesCard>
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
      </ContainerMoviesCard>
    </Container>
  )
}
