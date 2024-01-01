const StatusDisplay = ({status} : {status: "Started" | "Not Started" | "Done"}) => {

  const getColor = (status: "Started" | "Not Started" | "Done") => {

    switch(status) {
      case "Done" : return 'bg-green-200' 
      case "Started" : return 'bg-yellow-200'
      case "Not Started" : return 'bg-red-200'
      default :return "bg-red-200"
    }

  }
  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
        {status}
    </span>
  )
}

export default StatusDisplay