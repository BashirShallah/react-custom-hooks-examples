import {useEffect} from 'react';

const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

export default function useDocumentBg(){
    useEffect(() => {
      function handleBGColor(){
        document.body.style.background = randomColour();
      }
  
      handleBGColor();
  
      window.addEventListener('mousedown', handleBGColor);
  
      return () => {
        window.removeEventListener('mousedown', handleBGColor);
      }
    }, []);
}
