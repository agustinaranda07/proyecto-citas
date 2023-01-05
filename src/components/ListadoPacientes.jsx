import Paciente from "./Paciente"


function ListadoPacientes({pacientes}) {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.lenght ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Clientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Administra tus {""}
              <span className='text-indigo-500 font-bold'>clientes y turnos</span>
            </p>
        
          {pacientes.map( (paciente) => {
            return(
              <Paciente key={paciente.id} paciente={paciente}/>
            )})}
        </>
      ) : (
        <>
        <h2 className='font-black text-3xl text-center'>No hay clientes aún</h2>
        <p className='text-xl mt-5 mb-10 text-center'>
          Agrega clientes {""}
          <span className='text-indigo-500 font-bold'>y los verás aquí</span>
        </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes