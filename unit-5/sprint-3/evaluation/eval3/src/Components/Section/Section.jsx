import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
export const Section = ({sec}) => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  const [books, setBooks] = useState([])
  useEffect( ()=> {
     getData()
  }
  ,[])
  const getData = ()=> {
    axios.get(`http://localhost:8080/${sec}`).then( (res)=> {
      setBooks(res.data)
      console.log(res.data)
    })
  }
  
  const Main = styled.div`
    /* Same as Homepage */
    display: grid;
    grid-template-columns: repeat(3,1fr);
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        {books.map((item) => (
          <div key = {item.id}>
            <BookCard id = {item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} />
          </div>
        ))}
      </Main>
    </>
  );
};
