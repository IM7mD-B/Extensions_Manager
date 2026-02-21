import logo from "../../Images/Icons/logo-devlens.svg"

export default function Cards() {

    return (

        <div className="p-2 shadow-lg border border-gray-300 mx-5 bg-white rounded-2xl my-7">
            <div className=" flex flex-row justify-around w-full items-center ml-2 ">

                <div className=" size-34  pt-4">
                    <img src={logo} alt="logo 1" />
                </div>

                <div className=" mx-2 px-2  ">
                    <p className=" font-bold text-[18px]">DevLens</p>
                    <h1 className=" ">Quickly inspect page layouts and
                        visualize element boundaries.</h1>
                </div>

            </div>

            <div className=" mx-2 mb-2  ">

                <button className=" bg-white hover:bg-gray-200 rounded-full px-4 p-1 shadow-md border border-gray-400 font-semibold">Remove</button>

                <button></button>

            </div>

        </div>

    )
}