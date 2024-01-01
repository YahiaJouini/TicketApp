"use client"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from 'axios'
import { useRouter } from "next/navigation"

const DeleteBlock = ({ id }: { id: string | undefined }) => {

    const router = useRouter()
    const deleteOne = (id: string) => {
        axios.delete(`http://localhost:5000/api/delete/${id}`)
            .then(() => {
                console.log("ticket deleted")
                router.refresh()
            })
            .catch(err => console.log(err))
    }
    return (
        <FontAwesomeIcon
            icon={faX}
            className="text-red-400 hover:cursor-pointer hover:text-red-200"
            onClick={() => id && deleteOne(id)}
        />
    )
}

export default DeleteBlock