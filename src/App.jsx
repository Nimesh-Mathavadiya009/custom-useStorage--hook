import { useState } from 'react'
import './App.css'
import { useStorage } from './hooks/useStorag'

function App() {
  const [value, setIValue] = useState("")
  const [output, setOutput] = useState("")
  const {setValue,getValue,removeValue} = useStorage("myKey","defaultValue","local")

  return (
    <>
        <div id="root">
          <div id="main">
               <div id="container">
                <table border={1}>
                  <thead>
                    <tr>
                      <td style={{color:"white"}}>
                        INPUT
                      </td>
                      <td>
                        <div className="fields">
                          <input type="text"
                          value={value}
                          onChange={(event) => setIValue(event.target.value)} 
                          placeholder='Enter Value for Stored on Storage :'/>
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <div className="fields">
                          <button onClick={() => {
                            const Value = setValue(value)
                            setOutput(Value)
                          }}>ADD</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <div className="fields">
                          <button onClick={() => {
                            const Value = removeValue()
                            setOutput(Value)}}>REMOVE</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <div className="fields">
                          <button onClick={() => {
                          const Value = getValue()
                          setOutput(Value)
                          }}>GET</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <div className="fields">
                          <input type="text" 
                          value={output} readOnly/>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
               </div>
          </div>
        </div>   
    </>
  )
}

export default App
