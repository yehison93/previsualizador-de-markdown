import './App.css';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PencilFill from 'react-bootstrap-icons/dist/icons/pencil-fill';
import TextCenter from 'react-bootstrap-icons/dist/icons/text-center';
import ComponenteEditor from './component/ComponenteEditor';
import { useState, useCallback, useEffect } from 'react';
import { myText } from './component/PlaceHolderText';
import Markdown from 'marked-react';
import ComponenteCopiarTexto from "./component/ComponenteCopyText"


function App() {
  
  const [input, setInput] = useState(myText);
  const [state, setState] = useState(false);
      
  // const setTextMarkDown = <Markdown>{input}</Markdown>;
  
  const manejarCambio = useCallback((e) => {
    setInput(e.target.value);
  },[]);

  useEffect(()=>{setState(false)},[input])

  const onCopy = useCallback (() => {
    setState(true);
  },[]);


  return (
  <div>
    <Container fluid className='App'>
      <Card className='bg-dark contenedor-principal'>
        <Card.Header style={{ boxShadow:"0 0 10px white"}} className='text-white text-center h1'>
          Markdown Previewer
        </Card.Header>
        <Card.Body className='contenedor-accordion'>
          <Accordion defaultActiveKey={['']} flush alwaysOpen className='contenedor-input'>
            <Accordion.Item eventKey="0" className='caja-contenido'>
              <Accordion.Header className='bg-dark'>
                <span className='fs-3'><PencilFill className='mx-3'/>Editor</span></Accordion.Header>
              <Accordion.Body style={{minHeight:"100px", width:"100%",}}>
              <ComponenteEditor manejarCambio={manejarCambio} input={input} onCopy={onCopy} state={state}/>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey={['']} flush alwaysOpen className='contenedor-output'>
            <Accordion.Item eventKey="0" className='caja-contenido'>
              <Accordion.Header ><span className='fs-3'><TextCenter className='mx-3'/>Previewer</span></Accordion.Header>
              <Accordion.Body  style={{minHeight:"50px", width:"100%"}}>
                <span id='preview'>
                  <Markdown >{input}</ Markdown>
                </span>
                {input?<ComponenteCopiarTexto
                textToCopy={input}
                state={state}
                onCopy={onCopy}
                />:null}
              </Accordion.Body>              
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  </div>

  );
}

export default App;
