import './App.css';
import { FolderList } from './Components/FolderContent/FolderList';
import { Header } from './Components/Header/Header';
import { MessageList } from './Components/MessageList/MessageList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div className='folderListContent'> <FolderList /></div>
        <div className='messageListContent'><MessageList /></div>
      </div>
    </div>
  );
}

export default App;
