import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <ProSidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ProSidebarProvider>
  );
}

export default App;
