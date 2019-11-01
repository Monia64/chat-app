import React from "react"
import "./Contact.css"


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }
  render() {
    return (
    <div class="Contact">
      <img
        class="avatar"
        src={this.props.avatar}
        alt={this.props.name}
      />
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <h4 class="name">{this.props.name}</h4>
        <div class="status" style={{
          display: "flex",
          flexDirection: "row"
        }}>
          { <p class={this.props.online ? "status-online" : "status-offline"}></p> }
          {  <p class="status-text">{this.props.online ? "online" : "offline"}</p> }  
          
         </div>
      </div>
    </div>
    );
      }
    }




export default Contact;








