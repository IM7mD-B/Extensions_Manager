import Header from "../Components/Header"
import Extension_List from "../Components/Extevsion_List";
import Cards from "../Components/Cards";
import apiRequests from "../../api/api";
import { useState, useEffect } from "react";
import "tailwindcss";
import AddCard from "../Components/AddCardModal";

export default function Extension() {

    const [cards, setCards] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)


    useEffect(() => {

        const get_Cards = async () => {
            try {
                const response = await apiRequests.getCards()
                setCards(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        get_Cards()
    }, [])

    const delete_card = async (id) => {
        try {
            await apiRequests.deleteCards(id)

            setCards((prev) => prev.filter(card => card.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const add_card = async (data) => {
        try {
            const response = await apiRequests.postCards(data)

            setCards((prev) => [...prev, response.data.data])

            setIsModalOpen(false)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="bg-gray-200 min-h-screen " >

            <div className=" pt-6 px-4 md:pt-10 md:px-8"> <Header /></div>

            <div className="  md:px-10"> <Extension_List onAdd={() => setIsModalOpen(true)} /> </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cards.map((item, index) => (
                    <Cards
                        key={item.id}
                        logo={item.icon}
                        name={item.title}
                        description={item.description}
                        onDelete={() => delete_card(item.id)}
                    />
                ))}
            </div>

            <AddCard
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={add_card}
            />

        </div>
    )

}