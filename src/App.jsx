import { useState } from "react"

function App() {

  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState("Copiar")

  function generate(){
    const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
      const comprimentoSenha = 12;
      let senhaGerada = '';
      for (let i = 0; i < comprimentoSenha; i++) {
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
      <button onClick={generate}>Gerar!</button>
      <button onClick={copyToClipBoard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
