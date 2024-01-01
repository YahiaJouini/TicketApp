import Link from "next/link"
import DeleteBlock from "./DeleteBlock"
import Priority from "./Priority"
import ProgressBar from "./ProgressBar"
import StatusDisplay from "./StatusDisplay"
import { ticketData } from "./TicketForm"


function formatTimestamp(timestamp: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const date = new Date(timestamp);

  const formattedDate = date.toLocaleString("en-GB", options);

  return formattedDate;
}

const TicketCard = ({ ticket }: { ticket: ticketData }) => {

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 ">
        <Priority priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/ticketpage/${ticket?._id}`}>
        <h4>{ticket?.title}</h4>
        <hr className="h-px  border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket?.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2 ">
          <div className="flex flex-col ">
            <ProgressBar progress={ticket.progress} />
            <p className="text-xs my-1">{ticket.createdAt ? formatTimestamp(ticket?.createdAt) : "not set"}</p>
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TicketCard