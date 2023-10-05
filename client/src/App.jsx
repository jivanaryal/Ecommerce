import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./hoc/layout/Layout";
import Homepages from "./components/pages/homepages";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepages />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
