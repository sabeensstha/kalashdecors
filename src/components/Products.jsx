import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [pros, setPros] = useState([]);
  useEffect(() => {
    //  axios.get(`192.168.1.72:8000/home/sliders/`).then((res) => {
    //      const response = res.data;
    //      setSlideIndex(response);
    //      console.log(res.data);
    //  });
    const getPros = async () => {
      const prosFromServer = await fetchPros();
      setPros(prosFromServer);
    };
    getPros();
  }, []);

  const fetchPros = async () => {
    const res = await fetch("http://192.168.1.72:8000/product/list/");
    const data = await res.json();
    return data;
  };
  return (
    <Container>
      {pros.map((item, ids) => (
        <>
          <Product item={item} key={item.id} ids={ids} />
        </>
      ))}
    </Container>
  );
};

export default Products;
