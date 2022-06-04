import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import MovieList from "./Components/MovieList";
import Register from "./Components/Register";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/movieList" element={<MovieList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
