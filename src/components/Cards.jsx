import SwitchBtn from "./SwitchBtn"

export default function Cards({ logo, name, description, onDelete  }) {

    return (

        <div className="p-2 shadow-lg border border-gray-300 mx-5 bg-white rounded-2xl mt-7">
            <div className=" flex flex-row justify-around w-full items-center ml-2 ">

                <div className=" size-34  p-4 overflow-hidden  ">
                    <img src={logo} alt={name} className="w-full h-full -translate-x-3 rounded-2xl " />
                </div>

                <div className=" mx-2 px-2 flex flex-col flex-1  ">
                    <p className=" font-bold text-[18px]">{name}</p>
                    <h1 className=" ">{description}</h1>
                </div>

            </div>

            <div className=" flex mx-2 mb-2 items-center justify-between  ">

                <button className=" bg-white hover:bg-gray-200 rounded-full px-4 p-1 shadow-md border border-gray-400 font-semibold" onClick={onDelete}>Remove</button>

                <SwitchBtn/>

            </div>

        </div>

    )
}