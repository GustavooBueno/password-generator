import { useState } from "react"
import Input from "./components/input";

function App() {

  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  function generate(){
    const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
      let senhaGerada = '';
      for (let i = 0; i < passwordSize; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        senhaGerada += caracteresPermitidos.charAt(indiceAleatorio);
      }
      setPassword(senhaGerada)
      setCopyText("Copiar")
  }

  function copyToClipBoard(){
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div className="App">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar o tamanho</label>
        <input 
          type="checkbox" 
          id="showInput"
          value={showInput}
          onChange={()=> setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput ? (<div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
      </div>) : null}
      
      <button onClick={generate}>Gerar senha de {showInput ? passwordSize : 12} caracteres</button>
      <button onClick={copyToClipBoard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
