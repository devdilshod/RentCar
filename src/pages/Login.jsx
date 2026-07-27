import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const action = (store) => async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    if (!data.identifier || !data.password) {
        toast.error("Please fill in all fields!");
        return null;
    }

    const fakeUser = {
        username: data.identifier.split('@')[0],
        email: data.identifier
    };

    store.dispatch(loginUser(fakeUser));
    toast.success("Login in successfully");

    return redirect("/");
}

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginAsGuestUser = () => {
        const guestUser = { username: "Demo", email: "demo@test.com" };
        dispatch(loginUser(guestUser));
        toast.success("Welcome Guest User");
        navigate("/");
    }

    return (
        <section className="h-screen grid place-items-center bg-base-200 transition-colors duration-300 px-4">
            <Form method="POST" className="w-full max-w-md p-8 bg-base-100 border border-base-300 rounded-2xl shadow-sm flex flex-col gap-y-4">
                <div className="text-center space-y-1 mb-2">
                    <h2 className="text-primary text-3xl font-bold tracking-tight">MORENT</h2>
                    <p className="text-sm text-base-content/60 font-medium">Login</p>
                </div>

                <div className="form-control w-full">
                    <label className="label text-sm font-semibold text-base-content">Email Address</label>
                    <input
                        type="email"
                        name="identifier"
                        className="input input-bordered w-full bg-base-100 border-base-300 text-base-content focus:border-primary rounded-xl h-12 px-4"
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label text-sm font-semibold text-base-content">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="input input-bordered w-full bg-base-100 border-base-300 text-base-content focus:border-primary rounded-xl h-12 px-4"
                    />
                </div>

                <button type="submit" className="w-full btn btn-primary text-white font-semibold py-3 rounded-xl mt-2 transition-colors cursor-pointer">
                    LOGIN
                </button>

                <button type="button" className="w-full btn btn-ghost border border-base-300 hover:bg-base-200 text-base-content/80 font-medium py-3 rounded-xl cursor-pointer" onClick={loginAsGuestUser}>
                    SIGN IN AS GUEST
                </button>

                <p className="text-center text-sm text-base-content/60 font-medium mt-2">
                    Not a member yet?
                    <Link to="/register" className="text-primary hover:underline ml-1 font-semibold">Register</Link>
                </p>
            </Form>
        </section>
    );
}

export default Login;