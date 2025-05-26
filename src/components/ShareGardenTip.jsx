


function ShareGardenTip() {
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
            userEmail: "example@email.com", // Replace with real user data
            userName: "John Doe",           // Replace with real user data
        };

        console.log("Submitted Tip:", tipData);
        form.reset();
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-base-100 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-primary mb-4">
                ➕ Share a Garden Tip
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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

                <input type="text" value="example@email.com" readOnly className="input input-bordered w-full bg-gray-100" />
                <input type="text" value="John Doe" readOnly className="input input-bordered w-full bg-gray-100" />

                <button type="submit" className="btn btn-primary w-full">
                    Submit Tip
                </button>
            </form>
        </div>
    );
}

export default ShareGardenTip;
