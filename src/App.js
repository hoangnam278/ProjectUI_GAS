import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Loading from "./components/Loading";

function App() {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingPage = () =>
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    loadingPage();
    return () => clearTimeout(loadingPage);
  }, []);

  return <div className="App">{loading ? <Loading /> : <Login />}</div>;
}

export default App;
