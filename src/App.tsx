import React, { useEffect } from 'react';
import {useMessageBundle} from "./Language/selector";
import {useDispatch} from "react-redux";
import { loadLanguage } from './Language/resourceActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLanguage());
  }, [dispatch]);

  return (
    <div className="App">
      {useMessageBundle("browser_title")}
    </div>
  );
}

export default App;
