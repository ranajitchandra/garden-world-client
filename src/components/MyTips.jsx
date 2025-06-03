



import { useContext, useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContextProvider";
import Swal from "sweetalert2";
import Loading from "./Loading";

export default function MyTips() {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()

    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    if (user?.email && data?.length) {
        setTips(data.filter(item => item.userEmail === user.email));
        setLoading(false)
    }
}, [user?.email, data]);

    // useEffect(() => {
    //     fetch("https://graden-world-server.vercel.app/gardenTips")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setTips(data.filter(item => item.userEmail == user?.email))
    //         });
    // }, []);


    const handleDeleteTip = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                fetch(`https://graden-world-server.vercel.app/gardenTips/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Tip has been deleted.",
                                icon: "success"
                            });

                            const remainingTips = tips.filter(tip => tip._id !== id);
                            setTips(remainingTips);
                        }
                    })


            }
        });

    }


    if (loading) {
            return <Loading></Loading>
        }
    


    return (
        <>
            <div className="overflow-x-auto max-w-11/12 mx-auto my-8">
                <table className="table shadow-lg w-full">
                    <thead className="bg-primary text-white text-sm">
                        <tr className="">
                            <th className="py-4 text-left">Image</th>
                            <th className="py-4 text-left">Title</th>
                            <th className="py-4 text-left">Plant Type</th>
                            <th className="py-4 text-left">Difficulty</th>
                            <th className="py-4 text-left">Category</th>
                            <th className="py-4 text-left">Availability</th>
                            <th className="py-4 text-left">User Name</th>
                            <th className="py-4 text-left">User Email</th>
                            <th className="py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tips.map((tip) => (
                            <>
                                <tr
                                    key={tip._id}
                                    className="hover:bg-primary/5 border-b border-b-gray-300 transition duration-200"
                                >
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12 border border-primary">
                                                    <img src={tip.imageUrl} alt={tip.title} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-accent font-bold">{tip.title}</td>
                                    <td className="text-accent">{tip.plantType.split(" ").slice(0, 2).join(" ")}</td>
                                    <td className="text-accent">{tip.difficulty}</td>
                                    <td className="text-accent">{tip.category}</td>
                                    <td className="text-accent">{tip.availability}</td>
                                    <td className="text-accent">{tip.userName}</td>
                                    <td className="text-accent">{tip.userEmail}</td>
                                    <td className="flex gap-2 justify-end items-center mt-2">
                                        <Link to={`/my_tips/update/${tip._id}`}
                                            className="btn btn-white btn-sm text-white flex items-center gap-2 hover:scale-115 hover:brightness-110 transition-transform"
                                        >
                                            <FaEdit color="green" size={20} />
                                        </Link>
                                        <button onClick={() => handleDeleteTip(tip._id)}
                                            className="btn btn-white btn-sm text-white flex items-center gap-2 hover:scale-115 hover:brightness-110 transition-transform"
                                        >
                                            <FaTrashAlt color="red" size={20} />
                                        </button>
                                    </td>
                                </tr>
                            </>

                        ))}
                    </tbody>
                </table>




            </div>
        </>


    );
}
