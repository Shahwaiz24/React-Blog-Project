import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputFieldsComponent from "../Input Fields/input-fields-component";
import { ButtonComponent } from "../Home";
import { AuthService } from "../../services/auth-services/Back-end-Services";
import { useDispatch } from "react-redux";
import { login } from "../../services/Slices/Auth-Slices";

export default function LoginFoamComponent() {
    const [email, setEmail] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEmailValidation = (event) => {
        const value = event.target.value;
        if (!value.includes("@") || !value.endsWith(".com")) {
            event.target.setCustomValidity("Email must include '@' and end with '.com'.");
        } else {
            event.target.setCustomValidity(""); // Clear the error
        }
    };

    const handlePasswordValidation = (event) => {
        const value = event.target.value;
        if (value.length <= 5) {
            event.target.setCustomValidity("Password must be longer than 5 characters.");
        } else {
            event.target.setCustomValidity(""); // Clear the error
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
            console.log("Email:", email);
            console.log("Password:", password);
            let loginRequest = await AuthService.login({email:email.toString(),password:password.toString()});
            if(loginRequest == true){
                setLoading(false);
                setEmail("");
                setPassword("");
                dispatch(login());
                navigate("/")
            }else{
                setLoading(false);
            setError(true)
            }
      
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8">
            {/* Form Wrapper */}
            <form
                className="w-full max-w-md bg-white border border-gray-300 px-6 py-8 sm:px-8 sm:py-10 shadow-lg rounded-lg"
                onSubmit={handleSubmit}
            >
               
                {/* Title */}
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold text-center text-black mb-6">
                    3legant.
                </h1>
                {
                    isError == true && <div className="pt-2 pl-2 pb-2 flex flex-row justify-start ">
                        <h1>❗</h1>
                        <h1 style={{ color: "red" }} className="pl-1">An Error Occured, Please Try Again Later</h1>
                    </div>
                }

                {/* Email Field */}
                <div className="mb-4">
                    <InputFieldsComponent
                        onInputValidation={handleEmailValidation}
                        placeholder="Email"
                        required={true}
                        value={email}
                        onChanged={(e) => setEmail(e.target.value)}
                        className="w-full text-sm sm:text-base lg:text-lg"
                    />
                    
                </div>

                {/* Password Field with Toggle */}
                <div className="relative w-full mb-6">
                    <InputFieldsComponent
                        placeholder="Password"
                        type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                        value={password}
                        onInputValidation={handlePasswordValidation}
                        required={true}
                        onChanged={(e) => setPassword(e.target.value)}
                        className="w-full pr-10"
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide" : "Show"} {/* Text or icon */}
                    </button>
                    
                </div>

                {/* Submit Button */}
                <ButtonComponent
                 bgColor={`${isLoading == true ? "bg-black cursor-not-allowed" : "bg-customNavGreen  hover:bg-gray-800"}`}
                    type="submit"
                    className={`w-full py-2 rounded-md flex justify-center items-center text-white text-sm sm:text-base lg:text-lg transition-all duration-200 `}                >
                    {
                        isLoading == true ? (
                            <div className="animate-spin rounded-full h-7 w-7 border-t-4 border-white border-opacity-100"></div>
                        ) : <h1 className="font-poppins font-medium">Login</h1>
                   } 
                </ButtonComponent>

                {/* Links */}
                <div className="flex justify-between px-2 pt-4 text-xs sm:text-sm lg:text-base">
                    <Link to={"/"}>
                        <h1 className="font-poppins font-medium hover:text-customNavGreen">
                            Forgot Password?
                        </h1>
                    </Link>
                    <Link to={"/signup"}>
                        <h1 className="font-poppins font-medium hover:text-customNavGreen">
                            Sign Up
                        </h1>
                    </Link>
                </div>

                {/* Recaptcha Notice */}
                <div className="mt-5 text-center text-xs sm:text-sm lg:text-base text-gray-400">
                    <p>
                        This site is protected by reCAPTCHA and the Google <br />
                        <Link className="underline">Privacy Policy</Link> and{" "}
                        <Link className="underline">Terms of Service</Link> apply.
                    </p>
                </div>
            </form>
        </div>
    );
}
