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

  const checkAnswer = () => {
    if(input === question?.answer){
      setResult("✅ Correct!");
    }else{
      setResult("❌ Wrong");
    };
  };

  return (
    <main style={{ padding: 40}}>
      <h1>typing game MVP</h1>

      {question && (
        <>
          <h2>{question.text}</h2>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{fontSize: 20, padding: 8}}
          />

          <div style={{marginTop: 20}}>
            <button onClick={checkAnswer}>Check</button>
            <button onClick={fetchQuestion} style={{marginLeft: 10}}>Next</button>
          </div>

          <p>{result}</p>
        </>
      )}
    </main>
  )
};