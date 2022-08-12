import React from 'react' 
import ReactDOM from 'react-dom' 
import YT,{favProg, myName} from './App'



ReactDOM.render(
  <>
    <ul>
      <li>Thapa</li>
      <li>{YT}</li>
      <li>{favProg}</li>
      <li>{myName()}</li>

    </ul>
    
  </>, document.getElementById('root')
)