import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    display:flex;
    margin-top:30px;
    width:100%;
    height:5vh;
    justify-content:center;
    align-items:center;
`

const Texto = styled.p`
    font-family: "Lato",sans-serif;
    color: #FFF;
`
const Link = styled.a`
    text-decoration:none;
    color: #f3b866;
`

function Footer() {
  return (
    <Container className='bg-indigo-700'>
        <Texto className='text-indigo-500'>Developed by <Link href="https://agustindev.netlify.app/" target="_blank">Agustin Aranda</Link></Texto>
    </Container>
  )
}

export default Footer