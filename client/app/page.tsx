import TicketCard from "./(components)/TicketCard";
import { ticketData } from "./(components)/TicketForm";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/tickets", {
      cache: "no-store"
    })
    return res.json()
  } catch (error) {
    console.log("the is a problem ", error)
  }
}

const getUnique = (array: ticketData[]) => {
  const temp: string[] = []
  for (let arr of array) {
    if (arr.category && !temp.includes(arr.category)) {
      temp.push(arr.category)
    }
  }
  return temp

}
const Dashboard = async () => {

  const tickets: ticketData[] = await getTickets()

  const uniqueCategories: string[] = getUnique(tickets)


  return (
    <div className="p-5">
      <div className="lg:grid lg:grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}
export default Dashboard
