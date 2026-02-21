package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Question struct {
	Text   string `json:"text"`
	Answer string `json:"answer"`
}

var questions = []Question{
	{"hello world", "hello world"},
	{"golang is fun", "golang is fun"},
	{"next js typing", "next js typing"},
}

func getQuestion(w http.ResponseWriter, r *http.Request) {
	q := questions[0]
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(q)
}

func main() {
	http.HandleFunc("/api/question", getQuestion)
	log.Println("Server running on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
