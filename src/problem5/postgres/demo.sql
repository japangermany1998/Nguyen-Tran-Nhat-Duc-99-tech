CREATE TABLE resources (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    UNIQUE(name)
);