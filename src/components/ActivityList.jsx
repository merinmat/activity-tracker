import { FaTrash } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";



export default function ActivityList({ activity, toggleActivity, deleteActivity }) {

    const handleToggle = () => {
        toggleActivity(activity.id)
    }

    const handleDelete = () => {
        deleteActivity(activity.id)
    }

    return (
        <>
            <button className="btn-del"
                onClick={handleDelete}><FaTrash /></button>
            <button className="btn-edit"><FaPenToSquare /></button>
            <div>
                <li className={`list ${activity.completed ? 'reminder' : ''}`} onDoubleClick={handleToggle}> {activity.text} </li>

            </div>


        </>
    )
}