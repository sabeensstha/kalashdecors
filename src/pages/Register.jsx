import styled from "styled-components"
import back from "./back.jpg"
import { Link } from 'react-router-dom';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(0,255,0,0.5),
        rgba(0,255,0,0.5)),
        url(${props => props.background}) center;
        background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div` 
    padding:20px;
    width: 40%;
    background-color: white;
`

const Title = styled.h1` 
    font-style: 200px;
    font-weight: 300;
`

const Form = styled.form` 
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input` 
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span` 
    font-style: 12px;
    margin: 20px 0px;
`

const Button = styled.button` 
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Ok = styled.a` 
    display: flex;
    align-items: baseline;
`

const Register = () => {
  return (
    <Container background={back}>
        <Wrapper>
            <Ok>
                <Link to="/">BACK TO HOME PAGE</Link>
            </Ok>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b> 
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
                <hr/>
                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register