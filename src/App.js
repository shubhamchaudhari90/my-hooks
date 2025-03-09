import './App.css';
import UseMemoMethodDemo from './components/memoMethodDemo';
import Parent from './components/parent-child/parent';
import CallbackDemo from './components/useCallback';
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
      {/* <UseMemoMethodDemo></UseMemoMethodDemo> */}
      {/* <CallbackDemo></CallbackDemo> */}
      <Parent></Parent>
    </div>
  );
}
export default App;
