package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
)

//プロジェクト開始時: go mod init (プロジェクト名)
//新しいライブラリを import した時: go mod tidy
//他人のプロジェクトを clone した時: go mod tidy または go mod download
//git clone [url]

type Question struct {
	Text   string `json:"text"`
	Answer string `json:"answer"`
}

var questions = []Question{
	{"hello world", "hello world"},
	{"golang is fun", "golang is fun"},
	{"next js typing", "next js typing"},
}

// CORS(Cross-Origin Resource Sharing)
func enableCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT DELETE OPTIONS")
	w.Header().Set("Access-Control-Allow-Origiin", "Content-Type")
}

func getQuestion(w http.ResponseWriter, r *http.Request) {
	enableCORS(w)

	//preflight 対応
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusNoContent)
		return
	}

	if r.Method == http.MethodGet {
		index := rand.Intn(len(questions))
		q := questions[index]
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(q)
	}
}

func main() {
	http.HandleFunc("/api/question", getQuestion)
	log.Println("Server running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
