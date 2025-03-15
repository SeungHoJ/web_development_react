import Header from "./components/Header/Header2.jsx";
import  { CORE_CONCEPTS } from './data.js'

function CoreConcepts(props){
  return <li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
}
function App() {
  return (
    <div>
      <Header />
      <main>
        
        <section id="core-concepts">
        <h2>핵심 개념들 of React</h2>
        <ul>
          <CoreConcepts image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
          <CoreConcepts image={CORE_CONCEPTS[1].image} title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description}/>
          <CoreConcepts image={CORE_CONCEPTS[2].image} title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description}/>
          <CoreConcepts image={CORE_CONCEPTS[3].image} title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}/>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
