import React from "react";
import { Header } from './layout/header';
import { Shop } from './layout/shop';
import { Footer } from './layout/footer';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Shop/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;