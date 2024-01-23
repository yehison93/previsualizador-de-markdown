import Form from 'react-bootstrap/Form';
import { myText } from './PlaceHolderText';
import ComponenteCopiarTexto from './ComponenteCopyText';
import Container from 'react-bootstrap/Container';

function ComponenteEditor( { manejarCambio, input, state, onCopy } ) {

  return (
    <Container>
      <Form.Control
        aria-label="text"
        aria-describedby="text-editor"
        id='editor'
        as="textarea"
        type='text'
        placeholder='Escribe aqui tu texto Markdon para ser procesado...'
        onChange={manejarCambio}
        defaultValue={myText}
      />
      {input?<ComponenteCopiarTexto
      textToCopy={input}
      state={state}
      onCopy={onCopy}
      />:null}
    </ Container>
  );
}

export default ComponenteEditor;
