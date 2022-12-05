import { ChartLine, Hourglass, Scroll, Star, Wallet } from 'phosphor-react'
import { Container, Content, ContentInfo, ContentMain } from './styles'

export function Details() {
  return (
    <Container>
      <Content>
        <ContentMain>
          <img
            src="https://image.tmdb.org/t/p/w500//3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
            alt=""
          />
          <h2>Título</h2>
          <div>
            <Star weight="fill" />
            <p>8.7</p>
          </div>
        </ContentMain>

        <ContentInfo>
          <div>
            <Wallet size={32} />
            <p>Orçamento </p>
          </div>
          <div>
            <ChartLine size={32} />
            <p>Receita</p>
          </div>
          <div>
            <Hourglass size={32} />
            <p>Duração</p>
          </div>
          <div>
            <Scroll size={32} />
            <p>Descrição</p>
          </div>
        </ContentInfo>
      </Content>
    </Container>
  )
}
