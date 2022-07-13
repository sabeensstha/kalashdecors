import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { login } from "../features/userSlice"
import login123 from "./login.png"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)),
        url(${props => props.background}) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div` 
    padding:20px;
    width: 25%;
    background-color: white;
`

const Title = styled.h1` 
    font-style: 200px;
    font-weight: 300;
`

const Form = styled.form` 
    display: flex;
    flex-direction: column;
`

const Input = styled.input` 
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button` 
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.div` 
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    const [username,setUsername] = useState(""); 
    const [password,setPassword] = useState(""); 

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
            username: username,
            password: password,
            loggedIn: true,
        }))
    }
    return (
        <><Navbar />
    <Container background={login123}>
        
        <Wrapper>
            <Title>SIGN IN</Title>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Input 
                    placeholder="Username" 
                    type="name" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input 
                    placeholder="Password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button>LOGIN</Button>
                <Link>DO YOU NOT REMEMBER YOUR PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </form>
        </Wrapper>
    </Container>
    </>
  )
}

export default Login