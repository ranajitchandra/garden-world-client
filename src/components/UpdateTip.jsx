
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";


function UpdateTip() {

    const navigate = useNavigate()

    const { _id, title, plantType, difficulty, description, imageUrl, category, availability, userName, userEmail } = useLoaderData()
    console.log(_id);

    const handleUpdateTip = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries())
        console.log(updatedCoffee);

        fetch(`https://graden-world-server.vercel.app/gardenTips/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Tip updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/my_tips")

                }
            })

    }

    return (
        <div className="max-w-xl mx-auto p-6 bg-base-100 rounded-lg shadow my-10">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                Update Tip
            </h2>
            <form data-aos="fade-up" onSubmit={handleUpdateTip} className="space-y-4">

                <div>
                    <label className="label my-2 font-medium">Name</label>
                    <input
                        type="text"
                        name="userName"
                        defaultValue={userName}
                        readOnly
                        className="input input-bordered border-primary w-full"
                    />
                </div>

                <div>
                    <label className="label my-2 font-medium">Email</label>
                    <input
                        type="text"
                        name="userEmail"
                        defaultValue={userEmail}
                        readOnly
                        className="input input-bordered border-primary w-full"
                    />
                </div>

                <div>
                    <label className="label my-2 font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={title}
                        required
                        className="input input-bordered border-primary w-full"
                    />
                </div>

                <div>
                    <label className="label my-2 font-medium">Plant Type / Topic</label>
                    <input
                        type="text"
                        name="plantType"
                        defaultValue={plantType}
                        required
                        className="input input-bordered border-primary w-full"
                    />
                </div>

                <div>
                    <label className="label my-2 font-medium">Difficulty</label>
                    <select
                        name="difficulty"
                        defaultValue={difficulty}
                        className="select select-bordered border-primary w-full"
                    >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </div>

                <div>
                    <label className="label my-2 font-medium">Description</label>
                    <textarea
                        name="description"
                        defaultValue={description}
                        required
                        rows="4"
                        className="textarea textarea-bordered border-primary w-full"
                    ></textarea>
                </div>

                <div>
                    <label className="label my-2 font-medium">Image URL</label>
                    <input
                        type="url"
                        name="imageUrl"
                        defaultValue={imageUrl}
                        className="input input-bordered border-primary w-full"
                    />
                </div>

                <div>
                    <label className="label my-2 font-medium">Category</label>
                    <select
                        name="category"
                        defaultValue={category}
                        className="select select-bordered border-primary w-full"
                    >
                        <option>Composting</option>
                        <option>Plant Care</option>
                        <option>Vertical Gardening</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label className="label my-2 font-medium">Availability</label>
                    <select
                        name="availability"
                        defaultValue={availability}
                        className="select select-bordered border-primary w-full"
                    >
                        <option>Public</option>
                        <option>Hidden</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                    Update
                </button>
            </form>
        </div>


    );
}

export default UpdateTip;
