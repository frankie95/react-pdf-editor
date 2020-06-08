import React, { useState,useEffect } from 'react';
import './App.css';
import * as jsPDF from 'jspdf'

var doc
const generatePDF = (text) => {
  doc = new jsPDF({format: 'a4'});
  try {
    eval(text)
  } catch (e) {}
  return doc.output('datauristring');
}
function App() {

  const [string,setString] = useState(generatePDF(`doc.text("Hello world!", 20, 20);
  doc.text("This is client-side Javascript, pumping out a PDF.", 20, 30);`))
  return (
    <div className="App">
      <div class="split left">
        <Input setString={setString} />
      </div>
      <div class="split right">
        <embed width='100%' height='100%' src={string} />
      </div>
    </div>
  );
}
const Input = ({setString}) => {
  
  const [text, setText] = useState(`doc.text("Hello world!", 20, 20);
  doc.text("This is client-side Javascript, pumping out a PDF.", 20, 30);`
)

  return <><textarea id="w3review" name="w3review" rows="4" cols="50" onChange={e => setText(e.target.value)}>
    {text}
  </textarea>
  <br/>
  <button onClick={()=>setString(generatePDF(text))} type="primary">update</button>
  <br/>
  <button onClick={()=>doc.save("output")} type="primary">download</button>
  </>

}
export default App;
