import React from "react"
import "./Contact.css"


function Contact(props) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={props.avatar}
        alt={props.name}
      />
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <h4 className="name">{props.name}</h4>
        <div className="status" style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <p className={props.online ? "status-online" : "status-offline"}></p>
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  )


};

export default Contact;









