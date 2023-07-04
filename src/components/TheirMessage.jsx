const TheirMessage = ({ lastMessage, message }) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formattedTime = date.toLocaleString('en-US', options);
        return formattedTime;
    };


    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundColor: message.sender && `url(${message.sender.avatar})` }}
                />

                // <div
                //     className="message-avatar"
                //     style={{ backgroundImage: `url(${message.sender && message.sender.avatar})` }}
                // />
            )}
            {message.atachments && message.atachments.length > 0
                ? (
                    
                        <div className="message" style={{ float: "left", marginRight: "18px", color: "black", backgroundColor: "#cabcdc" }}>
                            <div style={{ position: "relative" }}>
                                <img
                                    src={message.attachments[0].file}
                                    alt="message-attachment"
                                    className="message-image"
                                    style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
                                />
                                <div className="time-container" style={{ position: "absolute", bottom: "0", right: "0", padding: "5px"}}>
                                    <span className="message-time">{formatTime(message.created)}</span>
                                </div>
                            </div>
                        </div>
                    
                )
                : (
                    <div>
                        <div className="message" style={{ float: "left", backgroundColor: "#CABCDC", marginLeft: isFirstMessageByUser ? "4px" : "48px" }}>
                            {message.text}
                            <span className="message-time">{formatTime(message.created)}</span>

                        </div>
                    </div>
                )}
        </div>
    )
}
export default TheirMessage
