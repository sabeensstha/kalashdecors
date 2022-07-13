import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import {useState , useEffect} from "react"

const Container = styled.div` `

const Wrapper = styled.div` 
  padding: 50px;
  display: flex;
`
const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1` 
  font-weight: 200;
`

const Desc = styled.p` 
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  align-content: center;
`

const FilterTitle = styled.span` 
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option`
  
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin-left: 100px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
`

const ProductDetails = () => {
    const [ prods , setProds ] = useState([])
  useEffect(() => {
    //  axios.get(`192.168.1.72:8000/home/sliders/`).then((res) => {
    //      const response = res.data;
    //      setSlideIndex(response);
    //      console.log(res.data);
    //  });
    const getPros = async() => {
        const prosFromServer = await fetchPros()
        setProds(prosFromServer)
    }
    getPros()
}, [])

const fetchPros = async () => {
  const res = await fetch('http://192.168.1.72:8000/product/${props.id}/detail/')
  const data = await res.json()
  return data
}
  return (
    <Container>
          <>
            <Product item={item} key={item.id} ids={ids} />
          </>
    </Container>
  )
}

export default ProductDetails