import { Star } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Container, ContentImg, ContentStar, ContentTitle } from './styles'

interface MoviesProps {
  movies: {
    id: number
    poster_path: string
    title: string
    vote_average: number
  }
}

export function MoviesCards({ movies }: MoviesProps) {
  const urlImage = `${import.meta.env.VITE_IMG}${movies.poster_path}`

  return (
    <Container>
      <ContentImg>
        <img src={urlImage} alt="Poster do determinado filme" />
      </ContentImg>

      <ContentTitle>
        <span>{movies.title}</span>
      </ContentTitle>
      <ContentStar>
        <Star weight="fill" />
        <strong>{movies.vote_average}</strong>
      </ContentStar>

      <Link to={`/details/${movies.id}`}>
        <button>Detalhes</button>
      </Link>
    </Container>
  )
}
