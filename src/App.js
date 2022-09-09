import "./App.css";
import { Routes, Route } from "react-router-dom";
import Headpage from "./component/HeadPage";
import Customer from "./component/Customer";
import Business from "./component/Business";

function App() {
  return (
    <div className="App w-full h-full">
      <Routes>
        <Route path="/" element={<Headpage />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </div>
  );
}

export default App;
