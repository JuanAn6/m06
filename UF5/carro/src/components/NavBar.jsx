import { NavLink } from "react-router-dom"
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"

export const NavBar = () => 
{
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-secondary-subtle ">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">CarroApp</NavLink>
                    <div className=" navbar-collapse">
                        <ul className="navbar-nav align-center me-auto">
													<li className="nav-item">
															<NavLink to="/productes" className="nav-link" aria-current="page">Products</NavLink>
													</li>
												</ul>
													<NavLink className="mx-2" to="/carro" >
															<Badge badgeContent={66} color="secondary">
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