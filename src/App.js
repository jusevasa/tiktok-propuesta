import Swal from 'sweetalert2'

import './App.css';

function App() {

  const handleMoveButton = (e) => {
    let x = Math.round(Math.random() * 94)
    let y = Math.round(Math.random() * 94)

    e.target.style = `left:${x}% ; top:${y}%; position:absolute`
  }

  const handleClickBtn = () => {
    Swal.fire({
      title: 'Lo sabia 👀',
      text: 'Ya estas comprometida bb 🥴',
      icon: 'success',
      confirmButtonText: 'Cool'
    }).then(() => {
      window.location.href = 'https://www.youtube.com/watch?v=rzNiP2fbUio&ab_channel=CloudyNetwork'
    })
  }

  return (
    <div className="App">
      <h1>¿Quieres ser mi novia?</h1>
      <div className="container">
        <button onClick={handleClickBtn}>Si</button>
        <button onMouseMove={(e) => handleMoveButton(e)}>No</button>
      </div>
    </div>
  );
}

export default App;
