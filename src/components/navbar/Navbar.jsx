import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const[active,setActive] = useState(false);
    const[open,setOpen] = useState(false);

    const { pathname} = useLocation()

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll", isActive );
        return()=>{
            window.removeEventListener('scroll', isActive)
        };
    }, []);

   const currentUser = {
    id:1,
    username: "Bablu",
    isSeller: true
   }

    return (
        <div className={active || pathname !== "/" ? 'navbar active' : 'navbar'}>
        <div className="container">
            <div className="logo">
                <Link to = '/' className='link'> 
                <span className='text'>fiverr</span>
                </Link>
                <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiverr Buisness</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller &&<span>Become A Seller</span>}
                    {!currentUser &&<button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={()=>{
                            setOpen(!open)
                        }}>
                            <img src=".\public/images/user.jpg" alt="" />
                            <span>{currentUser?.username}</span>
                           {open &&<div className="options" >
                                {
                                    currentUser?.isSeller && (
                                        <>
                                        <Link className='link' to="/mygigs">Gigs</Link>
                                        <Link className='link' to="/add">Add new Gig</Link>
                                        </>
                                    )
                                }
                                <Link className='link' to="/order">Order</Link>
                                <Link className='link' to="/messages">Messages</Link>
                                <Link className='link' to="">Logout</Link>
                            </div>}
                        </div>
                    )}
            </div>
            </div>
            {active || pathname !== "/" && (
        <>
            <hr />
            <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
        </div>
            </>
            )}
        </div>
    )
}

export default Navbar