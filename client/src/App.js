//Components
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import Home from "./components/Home";
import Missing from "./components/Missing";

import PersistLogin from "./components/PersistLogin";
import { Routes, Route } from "react-router-dom";
import Lesson from "./components/Lesson";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor, ROLES.User]} />}>
              <Route path="lesson" element={<Lesson />} />
            </Route>
          </Route>

          {/* Just changes the allowedRoles array to change the allowed roles */}

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
