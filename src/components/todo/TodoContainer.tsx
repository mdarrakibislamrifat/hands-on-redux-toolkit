import { Button } from "../ui/button"
import Todocard from "./Todocard"


const TodoContainer = () => {
    return (
        <div>
            <div>
                <Button>Add Todo</Button>
                <Button>Filter</Button>
            </div>
            <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-3">
                {/* <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">
                    <p >There is no task pending</p>
                </div> */}
                <Todocard />
                <Todocard />
                <Todocard />
                <Todocard />
            </div>
        </div>
    )
}

export default TodoContainer