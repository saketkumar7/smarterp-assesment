import React,{Component,Fragment} from "react";
import {Link} from "react-router-dom";
import PublishComponent from "./PublishComponent";
import "./FormComponent1.style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import { data } from "jquery";
class CreatePost extends Component{
  constructor(props){
    super(props);
    this.state={
        title:"",
        post:"",
        data:[],
        show:true,
        search:"",
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  };

  handleChange(e){
      const value=e.target.value;
      const {title} = this.state;
      this.setState({title:value});
  }
  handleChange2(e){
      const value = e.target.value;
      const {post} = this.state;
      this.setState({post:value});
  }
  handleSubmit(e){
      e.preventDefault();
     const {data,post,title} = this.state;
    this.setState({data:[...data, {'title':title,'post':post}]})
  }
  clickPost = () => {
      this.setState({show:!this.state.show})
  }
  /*onChange=e=>{
    const value=e.target.value;
    const {search} = this.state;
    this.setState({search:value});
  }
  renderData=info=>{    
      const {search}=this.state;
      var code=this.state.data.title;
      if(search!=="" && data.title.indexOf(search)===-1){
          return null
          

      }
  }*/
  render() {
    return<Fragment>
        <section id="searchbar">
        <article>
            <div>
            <span className="search-icon" id="remove" value={this.state.res}>
              <FontAwesomeIcon icon={faSearch} />
              </span>
              <input type="text" placeholder=" Search all your post here..."
               className="search" onClick={this.onChange}/>
            <span className="cancel" ><FontAwesomeIcon icon={faTimes} /></span>
            </div>
        </article>
    </section>
        <section className="menu">
          <article>
              <a  className="one">Create Post</a>
              <a className="two" onClick={this.clickPost}>Published Post</a>
              </article>        
      </section>
        
      <section className="post">
          <div className="container">
          <div className="left">
              <form onSubmit={this.handleSubmit}>
                  <div className="title">
                      <label>Title</label>
                      <input type="text" placeholder="Enter your title..." 
                      name="title" required onChange={this.handleChange} value={this.state.title}/>
                  </div>
                  <div className="textarea">
                  <label>Text</label>
                      <textarea name="textEditor" cols="50" rows="7" placeholder="Enter the article ..." name="post" required 
                      onChange={this.handleChange2} value={this.state.post}></textarea>
                  </div>
                  <div>
                      <button>
                          Publish
                      </button>
                  </div>
              </form>
          </div>
         {this.state.show &&
          <div className="right">
              <PublishComponent data={this.state.data}/>
          </div>}
          </div>
      </section>
    </Fragment>
  }
}
export default CreatePost;