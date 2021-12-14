import React from "react";
import { Banner, MainContent, Footer } from "../components";
import PortfolioKiri from '../assets/portfolio-kiri.png'


class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            choosenProject : PortfolioKiri,
        }
    }

    changeProject = (value) => {
        this.setState({
          choosenProject : value,
        });
      };

    render(){
        const {choosenProject} = this.state;
        return(
            <div className="landing-page">
                <Banner/>
                <MainContent
                    changeProject={this.changeProject}
                    choosenProject = {choosenProject}
                />
                <Footer />
            </div>
        );
    }
}

export default Main;