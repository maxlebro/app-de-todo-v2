import "./App.css";
import Acceuil from "./components/acceuil/acceuil";
import Header from "./components/header/header";
import Login from "./components/logIn/form";
import ListeOfTodo from "./components/toDo/listeOfToDoPerso";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";



function App() {
  function Salut() {
    return (
      <>
      <Header/>
      <Acceuil/>
      </>
    );
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Salut/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/todo" element={<ListeOfTodo/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
