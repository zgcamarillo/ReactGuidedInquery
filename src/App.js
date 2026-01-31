import BasicInfo from './BasicInfo';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = 
    {
      people: [
        {
        name: "Bluey Heeler",
        phone: "9803716068",
        birthdate: "December 4",
        email: "blueyheeler@gmail.com"
      },
       {
        name: "Bingo Heeler",
        phone: "9803716069",
        birthdate: "July 4",
        email: "bingoheeler@gmail.com"
      },
       {
        name: "Coco Heeler",
        phone: "9803716070",
        birthdate: "March 4",
        email: "cocoheeler@gmail.com"
      }
    ]
  };
}
  render() {
    return (
    <div className="App">
        {this.state.people.map(person => (
          <BasicInfo person={person} key={person.email} />
        ))}
    </div>
  )}
};
export default App;
