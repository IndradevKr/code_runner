import { useEffect, useRef, useState } from "react";

interface IResponse {
  type: string | null;
  data: string | null;
}

export const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [response, setResponse] = useState<IResponse>({type: null, data: null});
  const [ready, setReady] = useState(false);
  
  const fullOutputRef = useRef<string>("");

  useEffect(() => {
    const newSocket = new WebSocket(url);
    setSocket(newSocket);

    newSocket.onopen = () => {
      setReady(true);
    };

    newSocket.onmessage = (event) => {
      const {type, data} = JSON.parse(event.data);
      if(data) {
        fullOutputRef.current += data;
      }
      setResponse((prev) => {
        return {
        ...prev,
        type,
        data: fullOutputRef.current
      }});
    };

    newSocket.onclose = () => {
      setReady(false);
      fullOutputRef.current = '';
      setResponse(prev =>{ 
        return {
        ...prev,
        type: null,
        data: null
      }})
    };

    return () => {
      newSocket.close();
      fullOutputRef.current = '';
      setResponse(prev =>{ 
        return {
        ...prev,
        type: null,
        data: null
      }})
    };
  }, [url])

  const sendMessage = (data: unknown) => {
    if(socket) {
      socket.send(JSON.stringify(data));
      fullOutputRef.current = '';
    }
  }

  return {response, sendMessage, ready}
}
