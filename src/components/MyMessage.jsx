const MyMessage = ({ message }) => {


    const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedTime = date.toLocaleString('en-US', options);
    return formattedTime;
    };

    if (message.attachments && message.attachments.length > 0) {

        return (
            <div>
              <div className="message" style={{ float: "right", marginRight: "18px", color: "black", backgroundColor: "#cabcdc" }}>
                <div style={{ position: "relative" }}>
                  <img
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                  />
                  <div className="time-container" style={{ position: "absolute", bottom: "0", right: "0", padding: "5px"}}>
                    <span className="message-time">{formatTime(message.created)}</span>
                  </div>
                </div>
              </div>
            </div>
          );
          
          
          
    }

    return (
        <div>
            <div className="message" style={{ float: "right", marginRight: "18px", colour: "white", backgroundColor: "#cabcdc" }}>
                {message.text}
                <span className="message-time">{formatTime(message.created)}</span>
            </div>
        </div>
    )
}
export default MyMessage;