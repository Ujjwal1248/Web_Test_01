import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Home search={search} />
    </>
  );
}
