import './App.css';
import UseMemoMethodDemo from './components/memoMethodDemo';
import UseMemoDemo from './components/useMemo';
import UseRefDemo from './components/useRef';
// import UseEffectDemo from './components/useEffect';
// import UseStateDemo from './components/useState';


function App() {


  return (
    <div className="App">
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <UseEffectDemo></UseEffectDemo> */}
      {/* <UseRefDemo></UseRefDemo> */}
      {/* <UseMemoDemo></UseMemoDemo> */}
      <UseMemoMethodDemo></UseMemoMethodDemo>
    </div>
  );
}
export default App;
