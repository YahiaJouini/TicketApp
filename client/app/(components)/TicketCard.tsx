import DeleteBlock from "./DeleteBlock"
import Priority from "./Priority"
import ProgressBar from "./ProgressBar"
import StatusDisplay from "./statusDisplay"

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 ">
        <Priority />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px  border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">this is the ticket description! please  do this ticket.</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2 ">
        <div className="flex flex-col ">
          <ProgressBar />
          <p className="text-xs my-1">08/31/23 10:43PM</p>
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  )
}

export default TicketCard