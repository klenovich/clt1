// 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

import React, { useEffect } from 'react';
import Picture from 'next/image';
import AI from 'claude-ai';

export default function MainPage() {
  useEffect(() => {
    async function startConversation() {
      const aiInstance = new AI({ sessionKey: 'YOUR_SESSION_KEY' });
      const chat = await aiInstance.startConversation('Hello Claude!');
      await chat.sendMessage('How are you today?');
    }
    startConversation();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
      {/* Header */}
      <div style={{ width: '100%', height: 81, left: 0, top: 0, position: 'absolute', background: '#D9D9D9' }}>
        <h1 style={{ textAlign: 'center', lineHeight: '81px', margin: 0, color: 'black' }}>Welcome to Our World</h1>
      </div>
      
      {/* Feature Section */}
      <div style={{ width: 284, height: 153, left: 54, top: 133, position: 'absolute', background: '#D9D9D9' }}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2 style={{ margin: 0, color: 'black' }}>Discover Our Features</h2>
          <p>Explore a wide range of features that will revolutionize the way you interact with our platform.</p>
          <button style={{ background: 'blue', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Learn More</button>
        </div>
      </div>
      
      {/* Showcase Section */}
      <div style={{ width: 358, height: 188, left: 17, top: 361, position: 'absolute', background: '#D9D9D9' }}>
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: 'black' }}>See Our Success Stories</h2>
          <p>Discover how our platform has transformed the lives of individuals and businesses alike.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '30%', background: 'white', borderRadius: '5px', padding: '10px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
              <h3>Client A</h3>
              <p>"This platform helped me increase my productivity by 200%."</p>
            </div>
            <div style={{ width: '30%', background: 'white', borderRadius: '5px', padding: '10px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
              <h3>Company B</h3>
              <p>"Our revenue skyrocketed after implementing these solutions."</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div style={{ width: 299, height: 102, left: 62, top: 656, position: 'absolute', background: '#D9D9D9' }}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2 style={{ margin: 0, color: 'black' }}>Join Us Today</h2>
          <p>Don't miss out on the opportunity to be a part of our ever-growing community.</p>
          <button style={{ background: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Sign Up Now</button>
        </div>
      </div>
    </div>
  );
}