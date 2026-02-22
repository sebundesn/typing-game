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

  useEffect(() => {fetchQuestion()}, []);

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
    <main style={{display: "flex", flexDirection: "column",
      alignItems: "center",  justifyContent: "center", minHeight: "100vh",
      textAlign: "center"
    }}>

      <h1 style={{fontSize: 50, marginBottom: 50}}>typing game</h1>

      {question && (
        <>
          <h2 style={{marginBottom: 40, fontSize: 50}}>{question.text}</h2>

          <div style={{ position: 'relative', width: "100%", maxWidth: 400 }}>
    
            <div style={{position: 'absolute', top: 10, fontSize: 40,
              pointerEvents: 'none', textAlign: 'center', width: "100%", whiteSpace: "nowrap"
            }}>
              <span style={{ color: "#000" }}>
                {question.answer.slice(0, input.length)}
              </span>
              <span style={{color: "#bbb"}}>
                {question.answer.slice(input.length)}
              </span>
            </div>

            <input
              type="password"
              autoComplete="off"
              autoFocus
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              style={{ 
                padding: "30px 20px", color: "transparent",
                borderRadius: 8, border: result === " " ? "3px solid #ff4d4d" : "2px solid black",
                background: "transparent", width: "100%", outline: "none"
              }}
            />
          </div>

          <p style={{marginTop: 50, fontSize: 20, fontWeight: "bold"}}>{result}</p>
        </>
      )}
    </main>
  )
};