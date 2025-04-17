import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import Error404 from "./pages/Error404";
import Breadcrumb from "./dynamic-components/Breadcrumb";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/course" Component={Course}/>
          <Route path="/blogs" Component={Blogs}/>
          <Route path="/listings" Component={Listings}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/bread-crumb" Component={Breadcrumb }/>
          <Route path="/sign-in" Component={SignIn }/>
          <Route path="/sign-up" Component={SignUp }/>
          <Route path="/users" Component={Users}/>
          <Route path="*" Component={Error404}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


('/name/:userId')