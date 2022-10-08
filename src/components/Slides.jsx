import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import {Link} from "react-router-dom"
// import api from "../api/slides"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div` 
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div` 
    height: 100%;
    display: flex;
    transform: translateX(${(props)=> props.slideIndex * -100}vw);
`

const Slide =  styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props=> props.bg};
`

const ImgContainer =  styled.div`
    height: 100%;
    flex: 1;
`

const Image= styled.img`
    height: 80%;
`

const InfoContainer =  styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 65px;
`

const Desc = styled.p`
    margin : 50px 0px;
    font-size:20px;
    font-weight: 400px;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slides = () => {
        const [x, setX]= useState(0);
        const [slideIndex, setSlideIndex] = useState([]);
        const handleClick = (direction) => {

            if(direction === "left") {
                setX(x > 0 ? x-1 : 2)
            }
            else {
                setX(x <2 ? x +1 : 0)
            }
        }

        useEffect(() => {
            //  axios.get(`192.168.1.72:8000/home/sliders/`).then((res) => {
            //      const response = res.data;
            //      setSlideIndex(response);
            //      console.log(res.data);
            //  });
            const getSlides = async() => {
                const slidesFromServer = await fetchSlides()
                setSlideIndex(slidesFromServer)
            }
            
            getSlides()
        }, [])

const fetchSlides = async () => {
    const res = await fetch('http://192.168.1.72:8000/home/sliders/')
    const data = await res.json()
    
    return data
}

  

  return (
    
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={x}>
            {sliderItems && sliderItems.map((item) => {
                const {id, img,title,desc} = item;
                return (
            <Slide key={id}>
                <ImgContainer>
                    <Image src={img} alt="don" />
                </ImgContainer>
                <InfoContainer>
                    <Title>{title}</Title>
                    <Desc>{desc}</Desc>
                        <Link to="/product">
                    <Button>
                             SHOP NOW 
                    </Button>
                        </Link>
                </InfoContainer>
            </Slide>
            )} )}
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slides