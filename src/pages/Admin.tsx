import { useState } from "react";
import AdminLogin from "../components/AdminLogin";
import AdminPanel from "../components/AdminPanel";

function Admin() {
  const [authorized, setAuthorized] = useState(false);

  const handleLogin = (name: string, pass: string) => {
    if (name === "user" && pass === "kiscolorkichaddipehnyho") {
      setAuthorized(true);
    } else alert("invalid credentials");
  };

  return (
    <div>
      {authorized ? <AdminPanel /> : <AdminLogin onLogin={handleLogin} />}
    </div>
  );
}
export default Admin;
