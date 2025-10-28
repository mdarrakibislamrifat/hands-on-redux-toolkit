import { Button } from "../ui/button"
import AddTodoModal from "./AddTodoModal"
import Todocard from "./Todocard"


const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-5">
                <Button className="bg-primary-gradient text-xl font-semibold">Add Todo</Button>
                <AddTodoModal />
                <Button className="text-xl font-semibold">Filter</Button>
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]" >
                {/* <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">
                    <p >There is no task pending</p>
                </div> */}
                <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
                    <Todocard />
                    <Todocard />
                    <Todocard />
                    <Todocard />
                </div>
            </div>
        </div>
    )
}

export default TodoContainer