import { Search, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styledComponents from "styled-components";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styledComponents.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styledComponents.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styledComponents.div`
    flex: 1;
    text-align: center;
    
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
display: flex;
align-items: center;
justify-content: flex-end;
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
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  font-family: 'Outfit';
    font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Logo>Kalash Decors</Logo>
            </Link>
          </Left>
          <Center>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Home</MenuItem>
            </Link>
            <Link to="/demo" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem>Shop</MenuItem>
            </Link>
            <Link to="/demo" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem>Blog</MenuItem>
            </Link>
            <Link to="/demo" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem>About</MenuItem>
            </Link>
            <Link to="/demo" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem>Videos</MenuItem>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Sign In</MenuItem>
            </Link>
           
          </Center>
          <Right>
            {/* <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer> */}
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem>
                <Badge color="primary" badgeContent={4}>
                  <ShoppingCartCheckoutOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
