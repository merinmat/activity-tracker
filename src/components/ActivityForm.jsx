import { useState } from "react"

export default function ActivityForm({ addActivity }) {
    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        setFormData(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        { formData.length > 0 ? addActivity(formData) : alert("Sorry! The activity field cannot be empty!") }
        setFormData('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <label htmlFor="activity">Add New Acitvity</label><br />
                <input className="input"
                    id="activity"
                    type="text"
                    placeholder="add new activity"
                    name="activity"
                    value={formData}
                    onChange={handleChange}
                />
                <button className="btn">Submit</button>

            </div>
        </form>
    )
}