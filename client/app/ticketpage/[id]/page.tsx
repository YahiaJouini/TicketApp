import TicketForm from "@/app/(components)/TicketForm"

const TicketPage = ({params}:{ params: { id: string } }) => {
  return (
    <div>
      <TicketForm />
    </div>
  )
}

export default TicketPage