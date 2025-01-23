import { NavLink } from "react-router"
import Logo from '../../assets/logo.svg'
import User from '../../assets/user.svg'


const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="px-[50px] bg-transparent  z-50 fixed text-white  top-0 flex justify-between pt-[40px] w-[1300px] mx-auto">
                <div className="flex items-center gap-[70px]">
                    <img src={Logo} alt="" />
                    <NavLink to={"/"}> Главная </NavLink>
                </div>

                <div className="flex items-center gap-[70px]">
                    <p>EN</p>
                    <p>
                        <img src={User} alt="" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header