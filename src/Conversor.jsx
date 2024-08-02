import { useState } from 'react'

import './App.css'

function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState('')
  const [vozATexto, setVozATexto] = useState('')


  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value)
  }

  function ConvertirTextoAVoz() {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAVoz)
    synth.speak(utterThis)
  }

  function resultado(event) {
    setVozATexto(event.results[0][0].transcript)
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'es-ES'
    recognition.start()
    recognition.onresult = resultado
  }



    return (
      <>
        <br/>
        <h3>Conversor de Texto a Voz</h3>
        <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiarTexto} />
        <button onClick={ConvertirTextoAVoz}>Convertir</button>


        <h3>Conversor de Voz a Texto</h3>
        <button onClick={grabarVozATexto}>Grabar</button>
        {vozATexto}
      </>
    );

}



export default Conversor
