import React, {Component} from 'react';

class Film extends Component{
      
   render(){
      console.log(this.props.url);
      return(
         <>
         <p><a href={this.props.url} target="_blank">{this.props.name}</a></p>
         </>
      );
   }
   

}

export default Film;