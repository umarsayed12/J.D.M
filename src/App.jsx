import { useState } from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Customers from "./Components/Customers";
import ContactUs from "./Components/ContactUs";
import Team from "./Components/Team";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Homepage />
      <AboutUs />
      <Team />
      <Services />
      <Customers />
      <ContactUs />
    </>
  );
}

export default App;
