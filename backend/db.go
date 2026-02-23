package main

import (
	"context"
	"log"

	"github.com/jackc/pgx/v5/pgxpool"
)

var db *pgxpool.Pool

func initDB() {
	var err error
	dsn := "postgres://postgres:postgres@localhost:5432/typing_game"

	db, err := pgxpool.New(context.Background(), dsn)

	if err != nil {
		log.Fatal(err)
	}

	if err = db.Ping(context.Background()); err != nil {
		log.Fatal(err)
	}

	log.Println("Connected to PostgreSQL")
}
