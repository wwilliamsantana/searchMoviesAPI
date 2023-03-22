import styled from 'styled-components'

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
`

export const LoadingTitle = styled.h1`
  text-align: center;
`

export const Content = styled.div`
  display: flex;

  flex-direction: column;
  gap: 10px;

  padding: 15px 20px;
  margin-top: 30px;
  margin-bottom: 50px;
`

export const ContentMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 300px;
  }

  h2 {
    font-size: 2rem;
    margin: 20px;
  }

  div {
    display: flex;
    gap: 10px;
    align-items: center;

    svg {
      color: ${(props) => props.theme.yellow};
      font-size: 22px;
    }

    p {
      font-size: 20px;
    }
  }
`
export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  gap: 25px;
  padding: 12px;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  div {
    text-align: center;

    svg {
      color: ${(props) => props.theme.orange};
    }

    strong {
      padding: 10px;
      display: block;
    }
  }
`
