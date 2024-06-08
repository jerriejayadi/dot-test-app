import { useEffect, useState } from "react";
import Button from "../../components/Atoms/Button";
import Input from "../../components/Atoms/Input";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      if (email === "admin@admin.com" && password === "admin123") {
        localStorage.setItem("secret_token", "allowed");
        navigate("/");
      } else {
        setError(true);
        setLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    if (email.length === 0 || password.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, password]);

  return (
    <main
      className={`w-screen h-screen flex items-center justify-center bg-[#FFFAFA]`}
    >
      <form
        className={`p-16 flex flex-col drop-shadow-lg bg-white gap-6 w-[500px] rounded-lg `}
      >
        {/* Title */}
        <div className={`text-2xl font-bold text-center`}>Login Page </div>

        {/* Login Form */}
        <div className={`flex flex-col gap-3`}>
          <div className={`flex flex-col text-lg gap-3`}>
            <label htmlFor={"email"}>Email</label>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
                error && setError(false);
              }}
              id={`email`}
              className={``}
              type={`email`}
              placeholder={`Enter your email`}
            />
          </div>
          <div className={`flex flex-col text-lg gap-2`}>
            <label htmlFor={"password"}>Password</label>
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
                error && setError(false);
              }}
              id={`password`}
              className={``}
              type={`password`}
              placeholder={`Enter your password`}
            />
          </div>
          {error && (
            <div className={`text-red-500`}>Invalid username/password!</div>
          )}
        </div>

        {/* CTA */}
        <div>
          <Button
            disabled={disabled}
            isLoading={isLoading}
            onClick={() => {
              handleLogin();
            }}
            className={`text-lg`}
            type={"submit"}
          >
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
