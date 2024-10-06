import React, { useEffect } from 'react'
import Logo from '../assets/img/icon/Logo.svg'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/main'); 
          }, 4000); 
    }, []);
    return (
        <div className='Loading_wrap container'>
            <img src={Logo} alt="logo" />
        </div>
    )
}

export default Loading