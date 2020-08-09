import React,{Component,Fragment} from "react";
import { contains } from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'; 
const PublishComponent=(props)=>{
  const{data} = props;
  console.log(data) 
    const title = localStorage.getItem('myData');
    const post=localStorage.getItem('myData1');
    //this.setState({ user, rememberMe }); 
    var i=0;  
    var app=[];
    app[i]=title;
    i=i+1;
  
    console.log(app);
    return(
      <Fragment>
        <section className="publish">
         {data && data.map(item => (
           <>
           <h1>{item.title}</h1>
           <p>{item.post}</p>
           </>
         ))}

        </section>
        
      </Fragment>
        
              )

        }
  
export default PublishComponent;