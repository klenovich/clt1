// 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

import React, { useState, useRef, useEffect } from 'react';
import AI from 'claude-ai';

export default function MainPage() {
  const [messages, setMessages] = useState([]);
  const [temperature, setTemperature] = useState(0.7);
  const [prompt, setPrompt] = useState('Hello, Claude!');
  const [userName, setUserName] = useState('');
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage(text) {
    setMessages([...messages, { type: 'user', text, timestamp: new Date() }]);
    const aiInstance = new AI({ sessionKey: 'YOUR_SESSION_KEY' });
    const chat = await aiInstance.startConversation(prompt);
    const response = await chat.sendMessage(text, { temperature });
    setMessages([...messages, { type: 'ai', text: response.message, timestamp: new Date() }]);
  }

  function clearChat() {
    setMessages([]);
  }

  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative', background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Message History */}
      <div style={{ flex: 1, overflow: 'auto', padding: '20px', paddingBottom: '60px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: message.type === 'user' ? 'right' : 'left' }}>
            <div style={{ background: message.type === 'user' ? '#007BFF' : '#D9D9D9', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
              {userName && message.type === 'user' && <span style={{ color: 'gray', fontSize: '12px' }}>{userName}</span>}
              {message.text}
            </div>
            <div style={{ fontSize: '10px', textAlign: message.type === 'user' ? 'right' : 'left', color: 'gray' }}>
              {new Date(message.timestamp).toLocaleTimeString()}
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      
      {/* User Input */}
      <div style={{ background: '#D9D9D9', padding: '20px', borderTop: '1px solid #999' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Type your message..."
            style={{ flex: 1, padding: '5px', borderRadius: '5px', marginRight: '10px' }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
          <button style={{ background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', padding: '8px 15px' }} onClick={() => sendMessage(document.querySelector('input').value)}>Send</button>
        </div>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>Temperature: </label>
          <input
            type="number"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            style={{ width: '50px', padding: '5px', borderRadius: '5px' }}
          />
          <span style={{ marginLeft: '20px', marginRight: '10px' }}>Prompt: </span>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{ flex: 1, padding: '5px', borderRadius: '5px' }}
          />
          <span style={{ marginLeft: '20px', marginRight: '10px' }}>Your Name: </span>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ flex: 1, padding: '5px', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button onClick={clearChat} style={{ background: '#FF4500', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px' }}>Clear Chat</button>
        </div>
      </div>
    </div>
  );
}