import Header from "./components/Header/Header2.jsx";
import  { CORE_CONCEPTS} from './data.js'
import CoreConcepts from "./components/CoreConcepts.jsx"
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import TabContent from "./components/TabContent.jsx";

function App() {

  const [selectedTopic,setSelectedTopic] = useState('');

    function handleSelect(selectedTopic) {
      console.log(selectedTopic);
      setSelectedTopic(selectedTopic)
    return(
      <>
      
      </>
    );
  }

  return (
    <div>
      <Header />
      <main>
        
        <section id="core-concepts">
        <h2>핵심 개념들 of React</h2>
        <ul>
          <CoreConcepts image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
          <CoreConcepts {... CORE_CONCEPTS[1]}/>
          <CoreConcepts {... CORE_CONCEPTS[2]}/>
          <CoreConcepts {... CORE_CONCEPTS[3]}/>
          
        </ul>
        <h2>예시들</h2>
        <menu>
          {/* <TabButton label='Components' />
          <TabButton label='Jsx' />
          <TabButton label='Props' />
          <TabButton label='State' /> */}
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        {selectedTopic}
        <TabContent name={selectedTopic} />
        
        </section>
      </main>
    </div>
  );
}

export default App;
