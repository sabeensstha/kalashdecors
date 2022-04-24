import { Search, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styledComponents from 'styled-components';
import styled from 'styled-components';
import {mobile} from "../responsive"
import { Link } from 'react-router-dom';

const Container = styledComponents.div`
    height: 60px;
    ${mobile({height: "50px"})}
`;

const Wrapper = styledComponents.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styledComponents.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styledComponents.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styledComponents.div`
    margin-left: 25px;
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
`;

const Input = styled.input` 
    border: null;
`;

const Center = styledComponents.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1` 
    font-weight: bold;
`;

const Right = styledComponents.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div` 
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
`;

const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input /> 
                        <Search style={{color:"gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center><Link to="/" style={{textDecoration:"none",color:"black"}}><Logo >Kalash Decors</Logo></Link></Center>
                <Right>
                    <Link to="/register" style={{textDecoration:"none",color:"black"}}><MenuItem >Register</MenuItem></Link>
                    <Link to="/login" style={{textDecoration:"none",color:"black"}}><MenuItem >Sign In</MenuItem></Link>
                    <Link to="/cart"  style={{textDecoration:"none",color:"black"}}>
                    <MenuItem >
                        <Badge color="primary" badgeContent={4}>
                            <ShoppingCartCheckoutOutlined />
                        </Badge>
                    </MenuItem>
                    </Link>

                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar