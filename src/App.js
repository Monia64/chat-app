import React from 'react';
import './App.css';
import Contact from './components/Contact'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: [
        {
          name: "Anita Sutton",
          avatar: "https://randomuser.me/api/portraits/women/65.jpg",
          online: true
        }, {
          name: "Jim George",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg",
          online: false
        }, {
          name: "Charlotte Ryan",
          avatar: "https://randomuser.me/api/portraits/women/33.jpg",
          online: true
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.contacts.map(contact => {
            return <Contact {...contact} />
          })
        }
      </div>
    );
  }
}

export default App;
