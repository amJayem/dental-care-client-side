import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const SocialLogin = () => {
  const { signInWithSocial } = useContext(AuthContext);
  const providerGoogle = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithSocial(providerGoogle)
      .then((data) => {
        const user = data.user;
        const currentUser = { email: user.email };

        fetch("https://11-dental-care-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("data after sending jwt: ", data);
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((e) => console.error("google signIn error => ", e));
  };

  return (
    <div className="text-center mb-10 mx-5">
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-wide">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
