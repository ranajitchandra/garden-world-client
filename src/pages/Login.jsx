import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContextProvider";

export default function Login() {
    const { loginUser, loginWithGoogle, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,}$/;

    const validateField = (field, value) => {
        const newErrors = { ...errors };

        if (field === "email") {
            if (!emailRegex.test(value)) {
                newErrors.email = "Invalid email format";
            } else {
                delete newErrors.email;
            }
        }

        if (field === "password") {
            if (!passwordRegex.test(value)) {
                newErrors.password =
                    "Password must be at least 8 characters and include an uppercase and a lowercase letter with a special character.";
            } else {
                delete newErrors.password;
            }
        }
        setErrors(newErrors);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateField("email", value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validateField("password", value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        validateField("email", email);
        validateField("password", password);
        if (Object.keys(errors).length === 0) {
            loginUser(email, password)
                .then((result) => {
                    toast.success(`Login Successful, ${result.user.displayName}`);
                    navigate(location.state || "/");
                })
                .catch((err) => {
                    toast.info("Doesn't Match, Create an account");
                });
        }
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                toast.success(`Login Successful, ${result.user.displayName}`);
                navigate(location.state || "/");
            })
            .catch(() => toast.error("Google Login Failed"));
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        const resetEmail = e.target.email.value;

        resetPassword(resetEmail)
            .then(() => {
                toast.success(`Password reset email sent!`);
            })
            .catch((error) => {
                toast.error("Something wrong");
            });
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <form
                    onSubmit={handleLogin}
                    className="bg-white p-8 rounded-md shadow-2xl w-96"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="text"
                            className={`w-full px-3 py-2 border border-primary rounded ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            className={`w-full px-3 py-2 border border-primary rounded ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>
                    <p
                        onClick={() => document.getElementById("my_modal_2").showModal()}
                        className="mt-4 text-right text-sm text-cyan-800 py-2 font-semibold cursor-pointer"
                    >
                        Forgot Password?
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded hover:bg-cyan-700 transition"
                    >
                        Signin
                    </button>
                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="w-full flex items-center justify-center cursor-pointer mt-4 py-2 border border-primary rounded bg-white hover:bg-gray-100 transition"
                    >
                        <FcGoogle className="mr-2" /> Login with Google
                    </button>
                </form>
            </div>

            <dialog id="my_modal_2" className="modal">
                <form onSubmit={handleForgotPassword} method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Reset Password</h3>
                    <p className="py-4">Enter your email to reset your password.</p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full mb-4"
                        name="email"
                        required
                    />
                    <div className="flex justify-end gap-2">
                        <button type="submit" className="btn bg-primary text-white">
                            Reset Password
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => document.getElementById("my_modal_2").close()}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
}