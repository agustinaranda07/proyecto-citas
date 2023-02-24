import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import styled from "@emotion/styled"
import Footer from "./components/Footer"


const Container = styled.div`
  @media(min-width: 992px){
    display:grid;
  grid-template-columns: repeat(2,1fr);
  column-gap:2rem;
  }
`

function App() {
  const [pacientes,setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  useEffect(() =>{
    const obtenerLocalStorage = () =>{
      const pacientesLocal = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLocal)
    }
    obtenerLocalStorage();
  },[]);

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter(paciente =>paciente.id !==id)
    setPacientes(pacientesActualizados)
  }
  return (
    <>
    <div className="container mx-auto mt-20">
      <Header/>

      <Container className="mt-12">

      <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}/>
      
      <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      </Container>
    </div>
      <Footer></Footer>
    </>
  )
}

export default App



