import { useState, useEffect } from "react";
import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";
import AddButton from './AddButton';


const initialActivities = JSON.parse(localStorage.getItem('activity')) || [];

export default function ActivityTracker() {
    const [showActivity, setShowActivity] = useState(false);
    const [activity, setActivity] = useState(initialActivities);

    useEffect(() => {
        localStorage.setItem('activity', JSON.stringify(activity))
    }, [activity])

    const addActivity = (data) => {
        setActivity(prevData => {
            return [...prevData, { text: data, id: crypto.randomUUID(), completed: false }]
        })
    }

    const toggleActivity = (idx) => {
        setActivity(prevData => {
            return prevData.map((activity) => {
                if (activity.id === idx) {
                    return { ...activity, completed: !activity.completed }
                } else {
                    return activity
                }
            })
        })
    }

    const deleteActivity = (idx) => {
        setActivity(prevData => {
            return prevData.filter(f => f.id !== idx)
        })
    }

    return (

        < div >
            <AddButton onAdd={() => setShowActivity(!showActivity)} show={showActivity} />

            {showActivity && <ActivityForm addActivity={addActivity} />}
            <ul>
                {activity.map((activity) =>
                (
                    <ActivityList
                        key={activity.id}
                        activity={activity}
                        toggleActivity={toggleActivity}
                        deleteActivity={deleteActivity}
                    />
                )
                )}

            </ul>

        </div >

    )
}