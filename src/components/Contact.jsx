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
    const statusAlternation = e => {
      const status = !this.state.online;
       this.setState({ online: status });
    };
    return (
     
    <div className="Contact">
      <img
        class="avatar"
        src={this.props.avatar}
        alt={this.props.name}
     />
     
      { <div style={{
        display: "flex",
        flexDirection: "column"
      }}></div> }
        <h4 className="name">{this.props.name}</h4>
        <div className="status" onClick={statusAlternation}>
        <div className="status" style={{
          display: "flex",
          flexDirection: "row"
        }}>
          
          { <p class={this.state.online ? "status-online" : "status-offline"}></p> }
          { <p class="status-text">{this.state.online ? "online" : "offline"}</p> }  
          
         </div>
      </div>
    </div>
    );
      }
}




export default Contact;







