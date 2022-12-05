import { Container, Content, FormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface SearchFormProps {
  search: string
}

export function Header() {
  const { register, handleSubmit, reset } = useForm<SearchFormProps>()
  const navigate = useNavigate()

  function handleMovieSubmit(data: SearchFormProps) {
    navigate(`/search/${data.search}`)
    reset()
  }

  return (
    <Container>
      <Content>
        <a href="/">
          Busque<strong>Filmes</strong>
        </a>

        <FormContainer onSubmit={handleSubmit(handleMovieSubmit)}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Pesquise aqui seu filme"
            {...register('search')}
          />
          <button type="submit">
            <MagnifyingGlass size={30} />
          </button>
        </FormContainer>
      </Content>
    </Container>
  )
}
