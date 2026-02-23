import Icon1 from "../../public/Images/Icons/logo.svg"
import Icon2 from "../../public/Images/Icons/icon-moon.svg"

export default function Header() {

    return (
        <div className= " bg-white flex flex-row p-3  w-full justify-between rounded-2xl  ">



            <img src={Icon1} alt="logo" />
            <img src={Icon2} alt="moon icon" className=" bg-gray-200 p-4 rounded-2xl " />


        </div>
    )
}