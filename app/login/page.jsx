import { LoginForm } from "./_components/login-form";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100">
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;