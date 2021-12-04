import React from "react";
import { Banner, MainContent, Footer } from "../components";


class Main extends React.Component{
    render(){
        return(
            <div className="landing-page">
                <Banner/>
                <MainContent/>
                <Footer />
            </div>
        );
    }
}

export default Main;