import TicketForm from "@/app/(components)/TicketForm"

const getTicketById = async (id: string) => {
  const res = await fetch('http://localhost:5000/api/tickets/', {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error('Failed to get Ticket')
  }
  return res.json()
}

const TicketPage = async ({ params }: { params: { id: string } }) => {

  const EditMode = params.id === "new" ? false : true
  let updateData = {}
  if (EditMode) {
    updateData = await getTicketById(params.id)
  }
  return (
    <div>
      <TicketForm />
    </div>
  )
}

export default TicketPage