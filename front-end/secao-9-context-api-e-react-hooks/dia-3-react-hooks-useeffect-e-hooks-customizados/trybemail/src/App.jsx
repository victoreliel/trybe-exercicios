import './App.css';
import { useEffect, useState } from 'react';
import messagesList from './data/messagesList';
import { READ, UNREAD } from './constants';
import Controls from './components/Controls';
import List from './components/List';

function App() {
  const [messages, setMessages] = useState(messagesList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === READ);

    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [messages]);

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      } 
      return currentMessage;
    });
    setMessages(updatedMessages);
  }

  const markAllAsRead = () => {
    const allAsRead = messages.map((message) => ({ ...message, status: READ }));
    setMessages(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsUnread = messages.map((message) => ({ ...message, status: UNREAD }));
    setMessages(allAsUnread);
  }

  return (
    <div>
      <header>
        <h1>TrybeMail</h1>
      </header>

      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />

      <List
        messages={ messages }
        setMessageStatus={ setMessageStatus }
      />
    </div>
  );
}

export default App;
