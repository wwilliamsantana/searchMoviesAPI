import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  padding: 1.5rem;
`

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${(props) => props.theme.white};
    font-size: 2rem;
    text-decoration: none;

    strong {
      color: ${(props) => props.theme.orange};
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    padding: 8px 30px;
    background-color: ${(props) => props.theme['gray-300']};
    border-radius: 8px;
    border: none;
  }

  button {
    background-color: transparent;
    border-radius: 30%;
    border: none;
    margin-left: 20px;

    svg {
      color: ${(props) => props.theme.orange};
      border-bottom: 1px solid ${(props) => props.theme.orange};
      padding-bottom: 2px;
      cursor: pointer;

      :hover {
        color: ${(props) => props.theme.yellow};
        border-color: ${(props) => props.theme.yellow};
      }
    }
  }
`
