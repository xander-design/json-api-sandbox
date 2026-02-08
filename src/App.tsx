import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/table/Table";
import TableDetail from "./components/table-detail/table-detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/detail/:id" element={<TableDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
