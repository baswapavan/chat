import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import { useState } from 'react';

function App() {
  const [isReloadChatFeed, setIsReloadChatFeed] = useState(false);
  
  if(!localStorage.getItem("username")) return <LoginForm/>

  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="174bb376-e495-4e80-82b0-7f994fbcaa18"
        userName = {localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed =  { (chatAppProps) => <ChatFeed {...chatAppProps}/>}
        onNewMessage = {() => new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}
        onTyping={(chatId, username) => {}}
        setIsReloadChatFeed = { setIsReloadChatFeed}
      />
    </div>
  );
}

export default App;
