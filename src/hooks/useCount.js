import {useState} from 'react';

export default function useCount(){
    const [count, setCount] = useState(0);
  
    function increment(){
      setCount(c => c + 1);
    }
  
    function decrement(){
      setCount(c => c > 0 ? c - 1 : c);
    }
  
    return {
      count, increment, decrement
    }
}
