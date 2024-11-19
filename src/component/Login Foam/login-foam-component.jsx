import React, { useState } from "react";
import { Link} from "react-router-dom";
import InputFieldsComponent from "../Input Fields/input-fields-component";
import { ButtonComponent } from "../Home";

export default function LoginFoamComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log("Email:", email);
        console.log("Password:", password);
        // Add your custom login logic here
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {/* Form Wrapper */}
            <form
                className="w-full max-w-md bg-white border border-gray-300 px-8 py-10 shadow-lg rounded-lg"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-poppins font-semibold text-center text-black mb-6">
                    3legant.
                </h1>


                <InputFieldsComponent
                    placeholder="Email"
                    required={true}
                    value={email}
                    onChanged={(e) => setEmail(e.target.value)}
                    className="w-full mb-4"
                />

                {/* Password Field */}
                <InputFieldsComponent
                    placeholder="Password"
                    value={password}
                    required={true}

                    onChanged={(e) => setPassword(e.target.value)}
                    className="w-full mb-6"
                />

                {/* Submit Button */}
                <ButtonComponent type="submit" className="w-full bg-black text-black hover:text-white py-2 rounded-md hover:bg-gray-800 transition-all duration-200" children={<h1 className="font-poppins font-medium ">Login</h1>}>
                </ButtonComponent>
                <div className={`flex justify-between px-2 pt-4`}>
                    <Link to={"/"}> <h1 className="font-poppins font-medium text-sm hover:text-customNavGreen">Forgot Password?</h1></Link>
                    <Link to={"/"}>  <h1 className="font-poppins font-medium text-sm hover:text-customNavGreen">Sign Up</h1></Link>


                </div>
                <div className="mt-5 flex text-center justify-center text-sm text-gray-400">
                    <p>
                        This site is protected by reCAPTCHA and the Google <br />
                        <Link to={"/"} className="underline">Privacy Policy</Link>  and <Link to={"/"} className="underline" href="">Terms of Service</Link>  apply.
                    </p>
                </div>
                

               
            </form>
           
        </div>
    );
}
