
import { Link, NavLink, useNavigate } from "react-router"
import logo from "../assets/logo.png"
import PlusTrail from "./PlusTrail"
import { toast } from "react-toastify"


export default function Navbar() {

    // const { user, loading, balance, logOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    // if (loading) {
    //     return <Loading></Loading>
    // }
    function handleLogOut() {
        logOutUser()
            .then(() => {
                toast.success(`Logout Successful, `);
                navigate("/auth/login")
            })
    }

    return (
        <>



            <div class="navbar bg-base-100 shadow-sm">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a class="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Home</a></li>
                            <li><a class="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Bills</a></li>
                            <li><a class="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Profile</a></li>
                            <li><a class="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Contact</a></li>
                        </ul>
                    </div>
                    <div class="flex items-center gap-3">
                        <img class="hidden lg:block w-12" src={logo} alt="" />
                        <span class="text-xl lg:text-3xl font-bold text-primary">Garden World</span>
                    </div>
                </div>

                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal gap-4 px-1">
                        <li><a class="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Home</a></li>
                        <li><a class="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Bills</a></li>
                        <li><a class="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Profile</a></li>
                        <li><a class="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Contact</a></li>
                    </ul>
                </div>

                <div class="navbar-end">
                    <div class="flex gap-2">
                        <input type="text" placeholder="Search" class="none input input-bordered w-24 md:w-auto" />
                        <div class="dropdown dropdown-end">
                            <div class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://via.placeholder.com/150" alt="User" />
                                </div>
                            </div>
                            <ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-60 p-4 shadow">
                                <li class="border-b border-gray-200"><a>Name: <span class="font-bold">User Name</span></a></li>
                                <li class="border-b border-gray-200"><a>Email: <span class="font-bold">user@example.com</span></a></li>
                                <li class="border-b border-gray-200 flex">
                                    <a>Balance: <span class="font-bold flex gap-1 items-center">1000 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 3v18m0 0h-6m6 0h6" /></svg></span></a>
                                </li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <PlusTrail></PlusTrail>
            {/* <div className="flex justify-between items-center navbar bg-base-100 shadow-sm py-3 px-10">
                <div className="flex items-center gap-3">
                    <img className="bg-black rounded-xl w-12" src={logo} alt="" />
                    <span className="text-3xl font-bold text-primary">Transa Pay</span>
                </div>
                <ul className="flex items-center gap-4 text-accent font-semibold">
                    <li>
                        <NavLink to="/" className="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bills" className="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Bills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth/profile" className="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth/contact" className="hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Contact</NavLink>
                    </li>
                </ul>
                <div className="flex gap-2">
                    {
                        user ?
                            <>
                                <input type="text" placeholder="Search" className="none input input-bordered w-24 md:w-auto" />
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-60 p-4 shadow">
                                        <li className="border-b border-gray-200"><a>Name: <span className="font-bold"> {user.displayName} </span></a></li>
                                        <li className="border-b border-gray-200"><a>Name: <span className="font-bold"> {user.email} </span></a></li>
                                        <li className="border-b border-gray-200 flex">
                                            <a>
                                                Balance: <span className="font-bold flex gap-1 items-center"> {balance} <TbCurrencyTaka size={15} /></span>

                                            </a>
                                        </li>
                                        <li onClick={handleLogOut}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <ul className="flex items-center gap-2">
                                <li>
                                    <Link to="/auth/login" className="text-accent font-bold hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Login</Link>
                                </li>
                                <li>
                                    <Link to="/auth/register" className="text-accent font-bold hover:bg-primary py-1 px-5 hover:text-white duration-500 rounded-sm">Register</Link>
                                </li>
                            </ul>
                    }

                </div>
            </div> */}
        </>
    )
}