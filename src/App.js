import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
    return (
        // use BEM styling convention
        <div className='App'>
            <Header />
            <TinderCards />
            <SwipeButtons />
        </div>
    );
}

export default App;
