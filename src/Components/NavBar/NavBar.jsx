import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1@2x-free-img.png';
import { authContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const NavBar = () => {
    const {user,logOut}=useContext(authContext)
    const nav = (
        <>
            <li className="font-semibold"><Link to="/">Home</Link></li>
            <li className="font-semibold"><Link to="/products">Products</Link></li>
           {!user?.email&& <li className="font-semibold"><Link to="/login">Login</Link></li>}
        </>
    );
const handelLogout=()=>{
    logOut().then(()=>{
        toast.warning('logout')
    })
}
    return (
        <div>
            <div className="navbar bg-black bg-opacity-25">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className="w-[80px]" src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-3">
  {
    user?.email&&              <div className="avatar">
    <div className="w-[50px] rounded-full">
      <img src={user?.photoURL} title={user?.displayName}/>
    </div>
  </div>
  }
                    {user?.email&&<a className="btn" onClick={handelLogout}>Logout</a>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
