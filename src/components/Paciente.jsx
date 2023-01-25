function Paciente({paciente,setPaciente,eliminarPaciente}) {
  const {cliente,apellido,celular,fecha,tratamiento,id} = paciente
  const handleEliminar = () =>{
    const respuesta = confirm("Deseas eliminar este paciente?")
    if (respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className='mx-5 my-10 bg-white shadow-xl px-5 py-10 rounded-lg'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
            <span className='font-normal normal-case'>{cliente}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Apellido: {""}
          <span className='font-normal normal-case'>{apellido}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Celular: {""}
          <span className='font-normal normal-case'>{celular}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha del turno: {""}
          <span className='font-normal normal-case'>{fecha}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Tratamiento: {""}
          <span className='font-normal normal-case'>{tratamiento}</span>
        </p>

        <div className="flex justify-between mt-10l">
          <button type="button" className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg" onClick={()=>setPaciente(paciente)}>
            Editar
          </button>
          <button type="button" className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg" onClick={handleEliminar}>
            Eliminar
          </button>
        </div>
    </div>
  )
}

export default Paciente