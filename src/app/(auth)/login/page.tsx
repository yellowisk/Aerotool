import { LoginForm } from "@/components/login-form";
import { User } from "lucide-react";

export default function Login() {
  return (
    <div className="flex flex-1 flex-col space-y-4 h-screen items-center justify-center">
      <div className="flex flex-col space-y-6 w-1/3 p-8 border-2 border-white/10 rounded">
        <div className="flex flex-row space-x-2 items-center">
          <User />
          <h1 className="uppercase text-xl font-semibold">Login</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
