import { FormEvent, useState } from "react";

interface LoginProps {
  onLogin: (username: string, pass: string) => void;
}

const AdminLogin: React.FC<LoginProps> = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [pass, setPassword] = useState("");

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    onLogin(name, pass);
  };

  return (
    <div className="bg-zinc-800 flex items-center justify-center min-h-[100vh] max-w-[100%] ">
      <div className="bg-white rounded-md lg:w-1/2 w-full px-2 ">
        <div className="flex flex-col px-10 py-10 gap-8">
          <h1>Sign In</h1>
          <form onSubmit={handleOnSubmit} className="flex flex-col">
            <label>Name: </label>
            <input
              required
              className="px-4 py-3 border-2"
              type="text"
              placeholder="Enter name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Password: </label>
            <input
              required
              className="px-4 py-3 border-2"
              type="password"
              placeholder="Enter password..."
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
