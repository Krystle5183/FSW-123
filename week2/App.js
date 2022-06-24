import './App.css';
import Card from './Card'

function App() {

  return (
    <div>
      <Card style = {{backgroundColor: 'red'}} bkgColor = 'red' title = 'Title 1' subtitle = 'Sub Title 1' desc = 'Hello World 1!' width = '300px'/>
      <Card style = {{backgroundColor: 'orange'}} bkgColor = 'orange' title = 'Title 2' subtitle = 'Sub Title 2' desc = 'Hello World 2!' width = '300px'/>
      <Card style = {{backgroundColor: 'yellow'}} bkgColor = 'yellow' title = 'Title 3' subtitle = 'Sub Title 3' desc = 'Hello World 3!' width = '300px'/>
      <Card style = {{backgroundColor: 'green'}} bkgColor = 'green' title = 'Title 4' subtitle = 'Sub Title 4' desc = 'Hello World 4!' width = '300px'/>
    </div>  
  );
}

export default App;