
export default function Extension_List() {

    return (

        <div className="flex flex-col md:justify-between md:flex-row items-center mt-5 w-full  ">

            <h1 className=" text-3xl font-bold "> Extensions List </h1>

            <div className=" justify-around  mt-5">

                <button className=" bg-red-700 hover:bg-red-900 rounded-full px-4 p-1 shadow-lg text-white">All</button>

                <button className=" bg-white hover:bg-gray-200 rounded-full px-4 p-1 shadow-lg mx-3">Active</button>

                <button className=" bg-white hover:bg-gray-200 rounded-full px-4 p-1 shadow-lg ">Inactive</button>

            </div>

        </div>

    )
}