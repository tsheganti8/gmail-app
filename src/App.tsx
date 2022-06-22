import './App.css';
import { FolderList } from './Components/FolderContent/FolderList';
import { Header } from './Components/Header/Header';
import { MessageList } from './Components/MessageList/MessageList';
import React from 'react';

function App() {

  const [currentFolder, setCurrentFolder] = React.useState<string>('');

  const handleFolderClick = (item: string) => {
    setCurrentFolder(item);
  }

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div className='folderListContent'> <FolderList onFolderClick={handleFolderClick} /></div>
        <div className='messageListContent'><MessageList currentFolder={currentFolder} /></div>
      </div>
    </div>
  );
}

export default App;
