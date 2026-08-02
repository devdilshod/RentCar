import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice"
import { Link} from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
    const user = useSelector((state) => state.userState.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser())
        toast.error("Logged out successfully!"); 
    }

    return (
        <header className="bg-primary py-3 text-neutral-content transition-colors">
            <div className="align-element flex justify-center sm:justify-end px-6 md:px-16">
                {
                    user ? <div className="flex gap-x-2 sm:gap-8 items-center">
                        <p className="font-medium">Hello, {user.username}</p>
                        <button
                            type="button"
                            className="btn btn-xs sm:btn-sm bg-white text-primary hover:bg-white/90 border-none font-semibold uppercase rounded-md shadow-sm"
                            onClick={handleLogout}
                        >
                            logout
                        </button>
                    </div>
                        : <div className="flex gap-x-6 justify-center items-center font-medium">
                            <Link to="/login" className="link link-hover text-xs sm:text-sm">
                                Sign in / Guest
                            </Link>
                            <Link to="/register" className="link link-hover text-xs sm:text-sm">
                                Register
                            </Link>
                        </div>
                }
                
            </div>
        </header>
    )
}

export default Header;