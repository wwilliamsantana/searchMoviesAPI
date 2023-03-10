import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 10px 15px;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  margin: 10px;

  button {
    width: 100%;
    background-color: ${(props) => props.theme.yellow};
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme.black};
    padding: 8px 0;
    margin-top: 10px;
    cursor: pointer;

    :hover {
      opacity: 0.85;
      color: ${(props) => props.theme.white};
    }
  }
`
export const ContentTitle = styled.div`
  width: 230px;
  height: 50px;

  span {
    font-size: 16px;
  }
`

export const ContentImg = styled.div`
  width: 250px;
  height: 400px;

  img {
    width: 100%;
    border-radius: 6px;
  }
`

export const ContentStar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;

  svg {
    color: ${(props) => props.theme.yellow};
    font-size: 22px;
  }
`
