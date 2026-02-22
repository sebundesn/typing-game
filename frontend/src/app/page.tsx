"use client";

import {useState, useEffect} from "react";

type Question = {
  text: string;
  answer: string;
};

export default function Home() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const fetchQuestion = async () => {
    const res = await fetch("http://localhost:8080/api/question");
    const data = await res.json();
    setQuestion(data);
    setInput("");
    setResult("");
  };

  useEffect(() => { fetchQuestion()}, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      if(input === question?.answer){
        fetchQuestion();
        setResult("");
      }else{
        setResult("❌ Wrong! Try again");
        setInput("");
    };
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

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={question.answer}
            style={{fontSize: 40, padding: "12px 20px", borderRadius: 8,
              border: "2px solid #ccc", width: "100%", maxWidth: 400, textAlign: "center"
            }}/>

          <p style={{marginTop: 20, fontSize: 20, fontWeight: "bold"}}>{result}</p>
        </>
      )}
    </main>
  )
};