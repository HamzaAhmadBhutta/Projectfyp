import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./bootstrap.min.css"
import {Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen.js";

const App=()=> {
  return (
     
     <>
     <Header/>
     <main className="py-3">
      <Container>

     <HomeScreen/>
      </Container>
     </main>
     <Footer/> 
  
     </>

  );
}

export default App;