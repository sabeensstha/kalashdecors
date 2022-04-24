import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 14px;
    padding-top: 10px;
`

const Announcement = () => {
  return (
    <Container>Super Deal! Free Shipping on Order above 50$</Container>
  )
}

export default Announcement