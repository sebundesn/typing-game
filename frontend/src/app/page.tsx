"use client";

import {useState, useRef, useEffect} from "react";

type Question = {
  text: string;
  answer: string;
};

export default function Home() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const typeSound = useRef<HTMLAudioElement | null>(null);
  const missSound = useRef<HTMLAudioElement | null>(null);
  const correctSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    typeSound.current = new Audio("/sounds/type.mp3");
    missSound.current = new Audio("/sounds/miss.mp3");
    correctSound.current = new Audio("/sounds/correct.mp3");
  }, []);

  const playSound = (audioRef: React.RefObject<HTMLAudioElement | null>) => {
    if(!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {})
  };

  const fetchQuestion = async () => {
    const res = await fetch("http://localhost:8080/api/question");
    const data = await res.json();
    setQuestion(data);
    setInput("");
    setResult("");
  };

  useEffect(() => { fetchQuestion()}, []);

  const handleChange = (value: string) => {
    if(!question) return;

    const correctPrefix = question.answer.slice(0, value.length);

    if(value === correctPrefix){
      playSound(typeSound);
      setInput(value);
      setResult("");
    }else{
      setResult(" ");
      playSound(missSound);
    }

    if(value === question.answer){
      playSound(correctSound);
      setResult("CLEAR! ✨");
      setTimeout(() => {
        fetchQuestion();
      }, 300);
    }
  };

  return (
    <main style={{ paddingTop: 120, display: "flex", flexDirection: "column",
      alignItems: "center",  justifyContent: "center", minHeight: "100vh",
      textAlign: "center"
    }}>

      <header style={{position: "fixed", top: 0, width: "100%", backgroundColor: "#bde2ec",
        borderBottom: "1px solid #a4a1a1", zIndex: 1000, padding: "20px 0",
      }}>
        <h1 style={{fontSize: 50, margin: 0}}>
          typing game
        </h1>
      </header>

      {question && (
        <>
          <h2 style={{marginBottom: 40, fontSize: 50}}>{question.text}</h2>

          <div style={{ position: 'relative', display: 'inline-block', width: "100%", maxWidth: 400 }}>
    
            <div style={{
              position: 'absolute', top: -15, width: '100%',
              height: '100%', padding: "12px 20px",
              fontSize: 40, color: '#ccc', pointerEvents: 'none',
              textAlign: 'center', zIndex: 1, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              whiteSpace: 'pre'
            }}>

              <span style={{ color: 'transparent' }}>{input}</span>
              {question.answer.slice(input.length)}
            </div>

            <input
              autoFocus
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              style={{ 
                position: 'relative', fontSize: 40, padding: "12px 20px", 
                borderRadius: 8, border: result === " " ? "3px solid #ff4d4d" : "2px solid #ccc",
                backgroundColor: "transparent", zIndex: 2, width: "100%", 
                textAlign: "center", outline: "none",  color: "black"
              }}
            />
          </div>

          <p style={{marginTop: 50, fontSize: 20, fontWeight: "bold"}}>{result}</p>
        </>
      )}
    </main>
  )
};