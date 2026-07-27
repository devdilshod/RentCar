import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    if (!data.username || !data.email || !data.password) {
        toast.error("Please fill in all fields!");
        return null;
    }

    toast.success("Account created successfully!");
    return redirect("/login"); 
}

const Register = () => {
    return (
        <section className="h-screen grid place-items-center bg-base-200 transition-colors duration-300 px-4">
            <Form method="POST" className="w-full max-w-md p-8 bg-base-100 border border-base-300 rounded-2xl shadow-sm flex flex-col gap-y-4">
                <div className="text-center space-y-1 mb-2">
                    <h2 className="text-primary text-3xl font-bold tracking-tight">MORENT</h2>
                    <p className="text-sm text-base-content/60 font-medium">Create a new account</p>
                </div>

                <div className="form-control w-full">
                    <label className="label text-sm font-semibold text-base-content">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter your name"
                        className="input input-bordered w-full bg-base-100 border-base-300 text-base-content focus:border-primary rounded-xl h-12 px-4" 
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label text-sm font-semibold text-base-content">Email Address</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="example@gmail.com"
                        className="input input-bordered w-full bg-base-100 border-base-300 text-base-content focus:border-primary rounded-xl h-12 px-4" 
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label text-sm font-semibold text-base-content">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="******"
                        className="input input-bordered w-full bg-base-100 border-base-300 text-base-content focus:border-primary rounded-xl h-12 px-4" 
                    />
                </div>

                <button type="submit" className="w-full btn btn-primary text-white font-semibold py-3 rounded-xl mt-2 transition-colors cursor-pointer">
                    REGISTER
                </button>

                <p className="text-center text-sm text-base-content/60 font-medium mt-2">
                    Already a member?
                    <Link to="/login" className="text-primary hover:underline ml-1 font-semibold">Sign In</Link>
                </p>
            </Form>
        </section>
    );
}

export default Register;