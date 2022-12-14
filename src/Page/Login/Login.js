import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import SetTitle from "../../hooks/setTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  SetTitle("Login");
  const { signInUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((data) => {
        const user = data.user;
        const currentUser = { email: user.email};

        fetch('https://11-dental-care-server.vercel.app/jwt',{
          method: "POST",
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data=>{
          // console.log('data after sending jwt: ',data);
          localStorage.setItem('token',data.token);
          navigate(from, {replace: true});
        });
      })
      .catch((e) => console.error("email signup error => ", e));
  };

  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/register" className=" link link-hover">
                  No account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Login;
