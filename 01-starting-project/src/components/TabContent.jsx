import { EXAMPLES } from "../data"
function TabContent(props){
  if(props.name == ''){
    return(
      <h3>버튼을 클릭하세요</h3>
    )
  }
  else{
    return(
      <div id="tab-content">
            <h3>{EXAMPLES[props.name].title}</h3>
            <p>{EXAMPLES[props.name].description}</p>
            <pre><code>{EXAMPLES[props.name].code}</code></pre>
      </div>
    )
  }
}

export default TabContent