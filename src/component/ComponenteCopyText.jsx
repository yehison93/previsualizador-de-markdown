import { CopyToClipboard } from 'react-copy-to-clipboard';
import Buttom from 'react-bootstrap/Button'
import { Clipboard } from 'react-bootstrap-icons';



const ComponenteCopiarTexto = ({ state, textToCopy, onCopy }) => {

  const textButtom = state?"Copied":"Copy to Clipboard";
  
  return (
    <CopyToClipboard text={textToCopy} value={textToCopy} onCopy={onCopy}>
      <Buttom variant="outline-dark" onClick={onCopy} className='mt-2 p-2 boton-copy'>
        <span className='m-1 fs-6'><Clipboard className='mx-1'/>{textButtom}</ span>
      </Buttom>
    </CopyToClipboard>
  );
};

export default ComponenteCopiarTexto;
