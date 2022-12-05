import { Star } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Container, ContentStar } from './styles'

export function MoviesCards() {
  return (
    <Container>
      <img src="https://image.tmdb.org/t/p/w500//3bhkrj58Vtu7enYsRolD1fZdja1.jpg" />
      <ContentStar>
        <Star weight="fill" />
        <strong>8.7</strong>
      </ContentStar>

      <Link to={`/details/246`}>
        <button>Detalhes</button>
      </Link>
    </Container>
  )
}
