import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { toast } from "react-toastify";


function ShareGardenTip() {

    const { user, loading, balance, logOutUser } = useContext(AuthContext)



    console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const tipData = {
            title: form.title.value,
            plantType: form.plantType.value,
            difficulty: form.difficulty.value,
            description: form.description.value,
            imageUrl: form.imageUrl.value,
            category: form.category.value,
            availability: form.availability.value,
            userName: form.userName.value,
            userEmail: form.userEmail.value,
        };

        fetch('https://graden-world-server.vercel.app/gardenTips', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tipData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('added successfully.')

                    toast.success(`added successfully.`);

                    //   form.reset()
                    form.reset();
                }
            })
        console.log("Submitted Tip:", tipData);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-base-100 rounded-lg shadow my-10">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                Share a Garden Tip
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <input type="text" name="userName" defaultValue={user && user.displayName} readOnly className="input input-bordered w-full bg-gray-100" />
                <input type="text" name="userEmail" defaultValue={user && user.email} readOnly className="input input-bordered w-full bg-gray-100" />


                <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
                <input type="text" name="plantType" placeholder="Plant Type / Topic" className="input input-bordered w-full" required />

                <select name="difficulty" className="select select-bordered w-full">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>

                <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" rows="4" required></textarea>

                <input type="url" name="imageUrl" placeholder="Image URL" className="input input-bordered w-full" />

                <select name="category" className="select select-bordered w-full">
                    <option>Composting</option>
                    <option>Plant Care</option>
                    <option>Vertical Gardening</option>
                    <option>Other</option>
                </select>

                <select name="availability" className="select select-bordered w-full">
                    <option>Public</option>
                    <option>Hidden</option>
                </select>


                <button type="submit" className="btn btn-primary w-full">
                    Submit Tip
                </button>
            </form>
        </div>
    );
}

export default ShareGardenTip;
