import Paciente from "./Paciente"

function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}) {
return (
    <div className=' md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (
        <>
            <h2 className='font-black text-3xl text-center'>Listado Clientes</h2>
              <p className='text-xl mt-5 mb-10 text-center'>
                Administra tus {""}
              <span className='text-indigo-500 font-bold'>clientes y turnos</span>
              </p>
              
              {pacientes.map( paciente => (
                <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
              ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes aún</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando alguno {""}
            <span className='text-indigo-500 font-bold'>y aparecerá aquí</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes