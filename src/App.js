import React,{Component,Fragment} from "react";
import {BrowserRouter as Router, Route, Switch ,withRouter} from "react-router-dom";
import CreatePost from "./Components/FormComponents/CreatePost";
import PublishComponent from "./Components/FormComponents/PublishComponent";
class App extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    return<Fragment>
      <section>

     <Router>
        <CreatePost/>
        <footer>
        </footer>
        </Router>
      </section>
    </Fragment>
  }
}
export default withRouter(App);