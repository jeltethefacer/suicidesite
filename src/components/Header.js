import React,{Component} from 'react';

class Header extends Component  {
  constructor(props){
    super(props)

    this.state = {
      title : "Jelte's tapes"
    }
  }

  render(){
    return(
      <div className="col">
        <h1>{this.state.title}</h1>
        <p>
          Heey it's Jelte, Jelte Boelens. That's right don't click away in whatever browser you are viewing this.
          It's me not so live and in html with some bootstrap.
        </p>
      </div>
    )
  }
}

export default Header
