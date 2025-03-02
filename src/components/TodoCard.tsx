type TtodoCard = {
  todo: string;
  handleDelete: any;
  handleEdit: any;
  index: number;
}

export default function TodoCard({todo, handleDelete, index, handleEdit}: TtodoCard) {
  return (
    <div className="max-w-[56%] p-3 w-full border border-white/30 my-2 rounded text-white/50 flex justify-between items-center px-6">
      <p>
      {todo}
      </p>
      <div className="space-x-6">
        <i className="fa-solid fa-pen cursor-pointer transition-all duration-400 hover:text-blue-400 " onClick={()=> handleEdit(index)}></i>
        <i className="fa-solid fa-trash cursor-pointer transition-all duration-400 hover:text-blue-400" onClick={() => handleDelete(index)}></i>
      </div>

    </div>
  )
}
