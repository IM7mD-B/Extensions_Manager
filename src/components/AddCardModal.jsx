import { useState } from "react"

export default function AddCard({ isOpen, onClose, onSave }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black  flex items-center justify-center flex-col">

            <div className="bg-white p-5 rounded-xl flex flex-col ">

                <h2 className=" my-1 flex justify-center font-bold">Add New Card</h2>

                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className=" border-2 rounded-[9px] border-gray-300"
                />

                <input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className=" border-2 rounded-[9px] border-gray-300 my-2"
                />

                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}

                    className="felx justify-center items-center my-9"
                />
                <div className="flex justify-around">
                    <button className="border border-gray-200 px-4 py-2 rounded-3xl bg-white hover:bg-gray-200 shadow-lg " onClick={onClose}>Close</button>
                    <button className="border border-gray-200 px-4 py-2 rounded-3xl bg-white hover:bg-gray-200 shadow-lg " onClick={() => onSave({ title, description, image })}>Save</button>
                </div>

            </div>
        </div>
    )
}