import { useEffect } from "react";

const FacebookLoginButton = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "663888783285781",
        cookie: true,
        xfbml: true,
        version: 'v19.0',
      });
    };
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login(function (response) {
      if (response.authResponse) {
        const { accessToken, userID } = response.authResponse;

        // Enviar accessToken y userID a tu backend
        fetch("https://tu-backend.com/api/auth/facebook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ access_token: accessToken, user_id: userID }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("jwt", data.token);
            console.log("JWT del backend:", data.token);
          });
      } else {
        console.log("Login cancelado o no autorizado");
      }
    }, { scope: "public_profile,email" });
  };

  return (
    <button type='button' className='bg-azul-fb h-[40px] rounded-[50px] flex gap-2 items-center px-4' onClick={handleFacebookLogin}>
      <img src="/svg/login/fb.svg" className="w-[20px]" />
      <p className='inter-16 blanco'>Ingresa Con Facebook</p>
    </button>
  );
};

export default FacebookLoginButton;