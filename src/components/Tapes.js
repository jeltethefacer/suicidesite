import React, {Component} from 'react'

function TapeList(){
  var listItems = []
  for (var i = 1; i <= 69; i++) {
    listItems.push(
      <li key={i} className="list-group-item">
        <span className="col">tape: #{i}</span>
        <audio controls className="col">
          <source src="horse.mp3" type="audio/mp3" />
        </audio>
      </li>)
  }

    return(
      listItems
    )
  }


class Tapes extends Component{


  render(){
    return(
      <ul className="list-group">
        <TapeList />
      </ul>
    )
  }
}

export default Tapes
