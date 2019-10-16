import React from 'react';
//  import './App.css';
import Contact from './Contact'
 import "./Contact.css"
class ContactList extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: [
        
        {
            name: "Peter Walls",
            avatar: "https://randomuser.me/api/portraits/men/53.jpg",
            online: false  
          }, {

          
            name: "Mary Collins",
            avatar: "https://randomuser.me/api/portraits/women/31.jpg",
            online: true   
          }, {
        
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
      <div className="ContactList">
        {
          this.state.contacts.map(contact => {
            return <Contact {...contact} />
          })
        }
      </div>
    );
  }
}

export default ContactList;
