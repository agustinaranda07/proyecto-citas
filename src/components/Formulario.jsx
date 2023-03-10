import { useState, useEffect } from "react"
import Error from "./Error";

function Formulario({pacientes, setPacientes,paciente,setPaciente}) {
  const [cliente, setCliente] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [fecha, setFecha] = useState("");
  const [tratamiento, setTratamiento] = useState("");
 
  useEffect(() =>{
    if(Object.keys(paciente).length > 0){
      setCliente(paciente.cliente)
      setApellido(paciente.apellido)
      setCelular(paciente.celular)
      setFecha(paciente.fecha)
      setTratamiento(paciente.tratamiento)
    }
  },[paciente])


  const [error,setError] = useState(false)

  const generateId = () =>{
    const random = Math.random().toString(34).substr(2);
    const fecha = Date.now().toString(34)
    return random + fecha
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    //validando el formulario
    if([cliente,apellido,celular,fecha,tratamiento].includes("")){
      setError(true)
      return;
    }else{
      setError(false)

      //objeto de pacientes
      const objetoPaciente={
        cliente,
        apellido,
        celular,
        fecha,
        tratamiento,
      }
      if(paciente.id){
        //edita el registro
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map(pacienteOnState => pacienteOnState = paciente.id ? objetoPaciente : pacienteOnState)
        setPacientes(pacientesActualizados)
        setPaciente({})
      }else{
        //nuevo registro
        objetoPaciente.id= generateId();
        setPacientes([...pacientes, objetoPaciente])
      }

      //reinicia el formulario

      setCliente("")
      setApellido("")
      setCelular("")
      setFecha("")
      setTratamiento("")
    }
  }

  return (
    <div className='mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade pacientes y {""}
        <span className='text-indigo-500 font-bold'>Administralos</span>
      </p>

      <form className='bg-white shadow-xl rounded-lg py-10 px-5 mb-10' onSubmit={handleSubmit}>

        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className='mb-5'>
          <label htmlFor='cliente' className='block text-gray-700 uppercase font-bold'>Nombre del cliente</label>
          <input id='cliente' type="text" placeholder='Nombre del cliente' className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={cliente} onChange={(e) => setCliente(e.target.value)}/>
        </div>

        <div className='mb-5'>
          <label htmlFor='apellido' className='block text-gray-700 uppercase font-bold'>Apellido</label>
          <input id='apellido' type="text" placeholder='Apellido del cliente' className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'  value={apellido} onChange={(e) => setApellido(e.target.value)}/>
        </div>

        <div className='mb-5'>
          <label htmlFor='celular' className='block text-gray-700 uppercase font-bold'>Celular</label>
          <input id='celular' type="text" placeholder='Número de celular' className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'  value={celular} onChange={(e) => setCelular(e.target.value)}/>
        </div>

        <div className='mb-5'>
          <label htmlFor='fecha' className='block text-gray-700 uppercase font-bold'>Fecha del turno</label>
          <input id='fecha' type="date" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'  value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Tratamiento</label>
          <textarea name="sintomas" id="sintomas" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Tratamiento a realizar'  value={tratamiento} onChange={(e) => setTratamiento(e.target.value)}></textarea>
        </div>

        <input type="submit" value={paciente.id ? "Editar paciente" : "Agregar paciente"} className='bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' />
      </form>
    </div>
  )
}

export default Formulario