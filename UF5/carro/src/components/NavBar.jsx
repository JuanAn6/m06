import { NavLink } from "react-router-dom"
import { Badge, useStepContext } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useContext, useEffect, useState } from "react"
import { CarroContext } from '../context/CarroContext'
import { Icon } from '@iconify/react'


export const NavBar = () => 
{
    const { llistaCompres } = useContext(CarroContext)
    
    const modeToggleBtn = document.getElementById('mode-toggle-btn');
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(()=>{ 
        setIsDarkMode(localStorage.getItem('color-mode'));

        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);
    },[])

    const handleColorMode = ()=>{
        
        setIsDarkMode(!isDarkMode);

        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);

        localStorage.setItem('color-mode', isDarkMode);
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-secondary-subtle ">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand nav-link">CarroApp</NavLink>
                    <div className=" navbar-collapse">
                        <ul className="navbar-nav align-center me-auto">
                            <li className="nav-item">
                                    <NavLink to="/productes" className="nav-link" aria-current="page">Products</NavLink>
                            </li>
                        </ul>
                        <button className="btn nav-item" onClick={handleColorMode}>
                            { isDarkMode ? 
                                <Icon icon="material-symbols:sunny-outline-rounded" />
                            :
                                <Icon icon="ph:moon-stars-light" />
                            }
                        </button>
                        <NavLink className="mx-2" to="/carro" >
                                <Badge badgeContent={llistaCompres.length} color="secondary">
                                        <ShoppingCart color="primary" />
                                </Badge>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;