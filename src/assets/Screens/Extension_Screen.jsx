import Header from "../Components/Header"
import Extension_List from "../Components/Extevsion_List";
import Cards from "../Components/Cards";
import "tailwindcss";



export default function Extension() {

    return (
        <div className="bg-gray-200 min-h-screen " >

            <div className=" pt-6 px-4 md:pt-10 md:px-8"> <Header /></div>

            <div className="  md:px-10"> <Extension_List /> </div>

            <div><Cards/></div>

        </div>
    )

}