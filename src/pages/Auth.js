import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, redirect } from "react-router-dom";
const EventForm = () => {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const login = useMutation({
    mutationFn: async () => {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(
        auth,
        loginFormData.email,
        loginFormData.password
      );
      return response;
    },
    onSuccess: (data) => {
      sessionStorage.setItem("user", data.user.uid);
      navigate("/event/new");
    },
    onError: () => {},
  });
  const handleAuthFormChange = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login.mutate();
  };

  return (
    <div className="flex-grow mt-[55px] px-[25px] text-light">
      <div className="container">
        <form
          onSubmit={handleLogin}
          className="bg-gray-800 p-6 rounded-lg flex flex-col gap-4"
        >
          <div>
            <label
              htmlFor="topics"
              className="block text-gray-400 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginFormData.email}
              onChange={handleAuthFormChange}
              className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-400 font-semibold mb-2"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginFormData.password}
              onChange={handleAuthFormChange}
              className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
            />
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-teal text-black py-2 px-4 rounded mr-4"
            >
              Submit
            </button>
            {login.isLoading && <ClipLoader color="#5BBEC0"></ClipLoader>}
            {login.isSuccess && (
              <p className="text-teal">Sign in Successful.</p>
            )}
            {login.isError && (
              <p className="text-[#dc2626]">Invalid credentials.</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
export const requireAuth = () => {
  const user = sessionStorage.getItem("user");
  if (!user) return redirect("/auth");
  return null;
};
