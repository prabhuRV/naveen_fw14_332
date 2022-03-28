import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
        <Route exact path="/mystery" element={<Section sec={"mystery"}/>} />
        <Route exact path="/history" element={<Section sec={"history"}/>} />
        <Route exact path="/technology" element={<Section sec={"technology"}/>} />
        <Route exact path="/mythology" element={<Section sec={"mythology"}/>} />
      </Routes>
    </>
  );
};
