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
        <section className="h-screen grid place-items-center bg-[#F6F7F9]">
            <Form method="POST" className="w-full max-w-100 p-8 bg-white border border-[#C3D4E9]/50 rounded-2xl shadow-sm flex flex-col gap-y-4">
                <div className="text-center space-y-1 mb-2">
                    <h2 className="text-[#3563E9] text-3xl font-bold tracking-tight">MORENT</h2>
                    <p className="text-sm text-[#596780] font-medium">Create a new account</p>
                </div>

                <div className="form-control w-full">
                    <label className="label text-sm font-semibold text-[#1A202C]">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter your name"
                        className="input input-bordered w-full bg-white border-[#C3D4E9] text-[#1A202C] focus:border-[#3563E9] rounded-xl h-12 px-4" 
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label text-sm font-semibold text-[#1A202C]">Email Address</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="example@gmail.com"
                        className="input input-bordered w-full bg-white border-[#C3D4E9]  text-[#1A202C] focus:border-[#3563E9] rounded-xl h-12 px-4" 
                    />
                </div>

                <div className="form-control w-full">
                    <label className="label text-sm font-semibold text-[#1A202C]">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="******"
                        className="input input-bordered w-full bg-white border-[#C3D4E9] text-[#1A202C] focus:border-[#3563E9] rounded-xl h-12 px-4" 
                    />
                </div>

                <button type="submit" className="w-full bg-[#3563E9] hover:bg-[#2A52D4] text-white font-semibold py-3 rounded-xl mt-2 transition-colors cursor-pointer">
                    REGISTER
                </button>

                <p className="text-center text-sm text-[#596780] font-medium mt-2">
                Already a member?
                    <Link to="/login" className="text-[#3563E9] hover:underline ml-1 font-semibold">Sign In</Link>
                </p>
            </Form>
        </section>
    );
}

export default Register;