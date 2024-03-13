import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { Page1 } from "./component/page1";
import { Page2 } from "./component/page2";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/page1"
          element={
            <Page1 counter={counter} handleIncrement={handleIncrement} />
          }
        />
        <Route path="/page2/:counter" element={<Page2 />} />
        <Route path="/" element={<Navigate to="/page1" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
