"use client"
import { useRouter } from "next/navigation"
import { useState } from 'react'
import axios from 'axios'


export type ticketData = {
    title: string
    description: string
    priority: number
    progress: number
    status: "Started" | "Not Started" | "Done",
    category: string
    active: boolean
    createdAt?: string
    _id?: string
}


const TicketForm = ({ givenTicketData }: { givenTicketData: ticketData | null }) => {

    const defaultData: ticketData = {
        title: "",
        description: "",
        category: "Hardware Problem",
        priority: 1,
        progress: 0,
        status: "Not Started",
        active: true

    }

    if (givenTicketData) {

        defaultData.title = givenTicketData?.title
        defaultData.description = givenTicketData?.description
        defaultData.priority = givenTicketData?.priority
        defaultData.progress = givenTicketData?.progress
        defaultData.status = givenTicketData?.status
        defaultData.category = givenTicketData?.category
        console.log(givenTicketData)
    }

    const [formData, setFormData] = useState(defaultData)

    const router = useRouter();

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.value
        const name = e.target.name
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!givenTicketData) {
            axios.post('http://localhost:5000/api/ticket/new', formData)
                .then(() => {
                    router.push('/')
                    router.refresh()
                })
                .catch(err => console.log(err))
        } else {
            axios.patch(`http://localhost:5000/api/tickets/${givenTicketData._id}`, formData)
                .then((res) => {
                    console.log(res)
                    router.push('/')
                    router.refresh()
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className='flex justify-center  '>
            <form className='flex flex-col gap-3 w-1/2' method='post' onSubmit={HandleSubmit}>
                <h3>{givenTicketData ? "Update Your Ticket" : "Create Your Ticket"}</h3>
                <label htmlFor='title'>Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    onChange={HandleChange}
                    value={formData.title}

                />

                <label htmlFor='description'>description</label>
                <textarea
                    id="description"
                    name="description"
                    required
                    onChange={HandleChange}
                    value={formData.description}
                    rows={5}
                />

                <label>Category</label>
                <select name="category" value={formData.category} onChange={HandleChange}>
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Project">Project</option>
                </select>

                <label>Priority</label>
                <div>
                    <input type="radio"
                        name="priority"
                        onChange={HandleChange}
                        value={1}
                        checked={formData.priority == 1}

                    />
                    <label>1</label>
                    <input type="radio"
                        name="priority"
                        onChange={HandleChange}
                        value={2}
                        checked={formData.priority == 2}

                    />
                    <label>2</label>
                    <input type="radio"
                        name="priority"
                        onChange={HandleChange}
                        value={3}
                        checked={formData.priority == 3}

                    />
                    <label>3</label>
                    <input type="radio"
                        name="priority"
                        onChange={HandleChange}
                        value={4}
                        checked={formData.priority == 4}

                    />
                    <label>4</label>
                    <input type="radio"
                        name="priority"
                        onChange={HandleChange}
                        value={5}
                        checked={formData.priority == 5}

                    />
                    <label>5</label>
                </div>

                <label htmlFor="progress">Progress</label>
                <input type="range"
                    id='progress'
                    name="progress"
                    value={formData.progress}
                    min={0} max={100}
                    onChange={HandleChange}
                />

                <label htmlFor="status">Status</label>
                <select name="status" id="status" value={formData.status} onChange={HandleChange}>
                    <option value="Not Started">Not Started</option>
                    <option value="Started">Started</option>
                    <option value="Done">Done</option>
                </select>
                <input type="submit" className='btn' value={givenTicketData ? "Update Ticket" : "Create Ticket"} />

            </form>

        </div>
    )
}

export default TicketForm