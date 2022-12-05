import { Container, Content, FormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'

interface SearchFormProps {
  search: string
}

export function Header() {
  const { register, handleSubmit, reset } = useForm<SearchFormProps>()

  function handleMovieSubmit(data: SearchFormProps) {
    console.log(data)
    reset()
  }

  return (
    <Container>
      <Content>
        <h1>
          Busque<strong>Filmes</strong>
        </h1>

        <FormContainer onSubmit={handleSubmit(handleMovieSubmit)}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Pesquiser aqui seu filme"
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
