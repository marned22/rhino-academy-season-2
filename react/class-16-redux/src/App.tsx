import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navbar from './navbar/Navbar'
import { decrement, increment, toggle } from './store/actions/counterActions';

function App() {
  const count = useSelector((state: any) => state.counter.count);
  const enabled = useSelector((state: any) => state.counter.enabled);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <span style={{ fontSize: "2em", margin: "1em" }}>{count}</span>
      <div>
        <button
          onClick={() => dispatch(decrement())}
          disabled={!enabled}
          style={{
            color: "white",
            backgroundColor: "red",
            fontSize: "2em",
            margin: "0 1em",
            cursor: enabled ? "pointer" : "not-allowed",
            padding: "0.5em 1.5em",
            border: "none",
            borderRadius: "8px"
          }}
        >
          -
        </button>
        <button
          onClick={() => dispatch(increment())}
          disabled={!enabled}
          style={{
            color: "white",
            backgroundColor: "green",
            fontSize: "2em",
            margin: "0 1em",
            cursor: enabled ? "pointer" : "not-allowed",
            padding: "0.5em 1.5em",
            border: "none",
            borderRadius: "8px"
          }}
        >
          +
        </button>
      </div>
      <div style={{ marginTop: "2em" }}>
        <label>
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => dispatch(toggle())}
          />
          {enabled ? " Disable" : " Enable"}
        </label>
      </div>
    </div>
  )
}

export default App
