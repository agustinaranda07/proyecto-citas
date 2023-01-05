function Paciente({paciente}) {
  return (
    <div className='mx-5 my-10 bg-white shadow-xl px-5 py-10 rounded-lg'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
            <span className='font-normal normal-case'>{paciente.cliente}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Apellido: {""}
          <span className='font-normal normal-case'>{paciente.apellido}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Celular: {""}
          <span className='font-normal normal-case'>{paciente.celular}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha del turno: {""}
          <span className='font-normal normal-case'>{paciente.fecha}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Tratamiento: {""}
          <span className='font-normal normal-case'>{paciente.tratamiento}</span>
        </p>
    </div>
  )
}

export default Paciente