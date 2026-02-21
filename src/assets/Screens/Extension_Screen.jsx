import Header from "../Components/Header"
import Extension_List from "../Components/Extevsion_List";
import Cards from "../Components/Cards";
import data from "../../data.json"
import "tailwindcss";



export default function Extension() {

    return (
        <div className="bg-gray-200 min-h-screen " >

            <div className=" pt-6 px-4 md:pt-10 md:px-8"> <Header /></div>

            <div className="  md:px-10"> <Extension_List /> </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.map((item, index) => (
                    <Cards
                        key={index}
                        logo={item.logo}
                        name={item.name}
                        description={item.description}
                        isActive={item.isActive}
                    />
                ))}
            </div>

        </div>
    )

}