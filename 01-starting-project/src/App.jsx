import Header from "./components/Header/Header2.jsx";
import  { CORE_CONCEPTS } from './data.js'
import CoreConcepts from "./components/CoreConcepts.jsx"
import TabButton from "./components/TabButton.jsx";

function App() {
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
          {/* <TabButton>Components</TabButton>
          <TabButton>Components</TabButton>
          <TabButton>Components</TabButton>
          <TabButton>Components</TabButton>  */}
          <TabButton label='Components' />
          <TabButton label='Jsx' />
          <TabButton label='Props' />
          <TabButton label='State' />
        </menu>
        동적인 버튼 클릭의 결과물
        </section>
      </main>
    </div>
  );
}

export default App;
