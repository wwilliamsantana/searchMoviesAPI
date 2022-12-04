import axios from 'axios'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

const url = import.meta.env.VITE_API
const key = import.meta.env.VITE_API_KEY

export function App() {
  const [movies, setMovies] = useState([])

  async function getMoviesTopRated() {
    const response = await axios(`${url}top_rated`, {
      params: {
        api_key: key,
        language: 'pt-BR',
      },
    })

    const data = await response.data
    setMovies(data.results)
  }

  useEffect(() => {
    getMoviesTopRated()
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>Hello World</div>
    </ThemeProvider>
  )
}
