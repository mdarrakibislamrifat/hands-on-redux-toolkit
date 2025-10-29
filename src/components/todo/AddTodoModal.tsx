
import { useState, type FormEvent } from "react"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useAppDispatch } from "@/redux/hook"
import { addTodo } from "@/redux/features/todoSlice"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"




const AddTodoModal = () => {

    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("")

    const dispatch = useAppDispatch();


    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const randomString = Math.random().toString(36).substring(2, 9)
        const taskDetails = {
            id: randomString,
            title: task,
            description: description,
            priority: priority

        }
        dispatch(addTodo(taskDetails))



    }


    return (
        <Dialog>

            <DialogTrigger asChild>
                <Button className="bg-primary-gradient text-xl font-semibold">Add Todo</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Add your tasks that you want to finis.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="task">Task</Label>
                            <Input onBlur={(e) => setTask(e.target.value)} id="task" name="task" defaultValue="Task1" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Decription</Label>
                            <Input onBlur={(e) => setDescription(e.target.value)} id="description" name="description" defaultValue="Description" />
                        </div>


                        <div className="grid gap-3">
                            <Select onValueChange={(value) => setPriority(value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup >
                                        <SelectLabel>Priority</SelectLabel>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="low">Low</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2">
                        <DialogClose asChild>

                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </div>
                </form>

            </DialogContent>

        </Dialog >
    )
}

export default AddTodoModal