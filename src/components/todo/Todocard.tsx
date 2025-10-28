import { Button } from "../ui/button"


const Todocard = () => {
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3">
            <input type="checkbox" name="" id="" />
            <p className="font-semibold">Todo Title</p>
            <p>Time</p>
            <p>Descrition</p>
            <div className="space-x-5">
                <Button>Delete</Button>
                <Button>Edit</Button>
            </div>
        </div>
    )
}

export default Todocard