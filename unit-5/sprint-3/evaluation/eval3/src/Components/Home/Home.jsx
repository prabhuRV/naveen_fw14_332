import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { useEffect, useState} from "react";
import axios from "axios";
export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [books, setBooks] = useState([])
  useEffect( ()=> {
    getData()
  },[])
  const getData = ()=> {
    axios.get("http://localhost:8080/books").then( (res)=> {
      setBooks(res.data)
      console.log(res.data)
    })
  }
  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer" id="boxes">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {books.map((item) => (
          <div key = {item.id}>
            <BookCard id = {item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} />
            {item.imageUrl}
            {item.title}
            {item.price}
          </div>
          
        ))}
      </Main>
    </div>
  );
};
