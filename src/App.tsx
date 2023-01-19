import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./views/HomePage";
import TrainingPage from "./views/TrainingPage";



function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/train" element={<TrainingPage/>}/>
        </Routes>
    );
}

export default App;
