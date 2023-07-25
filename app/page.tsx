import Image from 'next/image'
const Claude = require('claude-ai');

// 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
async function cx1() {
  

  const claude = new Claude({
    sessionKey: 'YOUR_SESSION_KEY'
  });

  const conversation = await claude.startConversation('Hello Claude!');

  await conversation.sendMessage('How are you today?');
}

export default function Home() {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
    <div style={{width: '100%', height: 81, left: 0, top: 0, position: 'absolute', background: '#D9D9D9'}} />
    <div style={{width: 284, height: 153, left: 54, top: 133, position: 'absolute', background: '#D9D9D9'}} />
    <div style={{width: 358, height: 188, left: 17, top: 361, position: 'absolute', background: '#D9D9D9'}} />
    <div style={{width: 299, height: 102, left: 62, top: 656, position: 'absolute', background: '#D9D9D9'}} />
    </div>
    //
  )
}
