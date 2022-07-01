
// import './App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Navigation from "./components/Navigation";
import Dataform from './pages/Dataform';
import Table from './pages/Tabledata';

function App() {
  return (
    <Container fluid>
      <Row>
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Dataform />}></Route>
            <Route path="/bookings" element={<Table/>}></Route>
          </Routes>
        </BrowserRouter>
      </Row>
    </Container>
  );
}
export default App;
