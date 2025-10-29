
import { useAppSelector } from "@/redux/hook"
import AddTodoModal from "./AddTodoModal"
import Todocard from "./Todocard"
import TodoFilter from "./TodoFilter"
import { useGetTodosQuery } from "@/redux/api/api"



const TodoContainer = () => {
    // From local state
    const { todos } = useAppSelector((state) => state.todos)


    // from server

    // const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);

    // if (isLoading) {
    //     return <p>Loading....</p>
    // }

    return (
        <div>
            <div className="flex justify-between mb-5">

                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]" >
                {/* <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">
                    <p >There is no task pending</p>
                </div> */}
                <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
                    {
                        todos.map((item) => (
                            <Todocard {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoContainer