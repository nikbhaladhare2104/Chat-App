import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contextProviders/AuthContext";

function App() {
  const { currentUser } = useAuth();
  // console.log(currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={currentUser ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
