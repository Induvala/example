import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import BasicCheckbox from "../atoms/BasicCheckbox";
import BasicInput from "../atoms/BasicInput";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ field: string; message: string } | null>(null);
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


  // Password validation
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  const isPasswordValid = passwordRegex.test(password);
  const isFormValid = userId.trim() !== "" && isPasswordValid &&password;
  

  const handleLogin = () => {
    if (!userId) {
      setError({ field: "userId", message: "Please enter your User ID." });
      return;
    }
    if (!password) {
      setError({ field: "password", message: "Please enter your password." });
      return;
    }
    // if (userId !== "IDIDID222" || password !== "Indu@1996") {
    //   setError({ field: "general", message: "User ID or Password is incorrect." });
    //   return;
    // }
    setError(null);
    if (!isFormValid) return;
    alert(`Login successful!\nUsername: ${userId}`);
    navigate("/main");

  };

  return (
      <div className="w-[500px] bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
        <h1 className="text-center text-3xl font-bold text-yellow-500 mb-8">LANDAS</h1>

        {/* User ID */}
        <div className="mb-5 flex justify-between items-center">
          <label className="block text-sm mb-1 w-[100px]">User ID</label>
          <BasicInput
            type="text"
            placeholder="Enter your User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 ${
              error?.field === "userId" ? "border border-red-500 bg-red-50" : "border-gray-300"
            }`}
          />
          {error?.field === "userId" && (
            <p className="text-sm text-red-500 mt-1">{error.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-3 relative flex justify-between items-center">
          <label className="block  w-[100px] text-sm mb-1">Password</label>
          <BasicInput
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full rounded-md px-4 py-3 pr-10 focus:outline-none focus:ring-2 ${
                  password && !isPasswordValid
                    ? "border-red-400 focus:ring-red-400 focus:border-red-400"
                    : "border-gray-200 focus:ring-yellow-400 focus:border-yellow-400"
                }`}
          />
           <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />} 
              </button>
              
          {error?.field === "password" && (
            <p className="text-sm text-red-500 mt-1">{error.message}</p>
          )}
          {error?.field === "general" && (
            <p className="text-sm text-red-500 mt-1">{error.message}</p>
          )}
        </div>
           <p className={password && !isPasswordValid ?  'mt-2 text-sm text-red-400':"mt-2 text-sm text-gray-400" }>
                Password must be 8–16 characters, include uppercase, lowercase,
                number, and special character.
              </p>

   
        
        {/* Options */}
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center gap-2 text-sm">
            <BasicCheckbox
              checked={remember}
              onChange={() => setRemember(!remember)}
              label="Remember ID"
              className={`
    appearance-none 
    w-4 h-4 rounded 
    border border-gray-300 
    checked:bg-yellow-400 pb-4 checked:border-yellow-400 
    checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:items-center checked:before:justify-center
  `}

            />
          </label>
          <div className="text-sm flex gap-2">
            <button className="hover:underline">Find ID</button>|
            <button className="hover:underline">Find Password</button>
          </div>
        </div>

        {/* Login Button */}
       <button
            type="submit"
            onClick={handleLogin}
            className={`w-full py-3 font-semibold rounded-lg transition ${
              isFormValid
                ? "bg-yellow-400 text-black hover:bg-yellow-500"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            Login
          </button>

        {/* Sign Up */}
        <button
          className="w-full mt-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition"
        >
          Sign Up
        </button>
      </div>
  );
}
