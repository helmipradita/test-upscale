-- Active: 1679422596725@@127.0.0.1@5432@postgres

DROP TABLE tasks;

CREATE TABLE tasks (
    id VARCHAR PRIMARY KEY,
	judul VARCHAR,
    deskripsi VARCHAR,
    selesai BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP,
	updated_at TIMESTAMP
);