## Requirements:
To run the application, your OS needs to install these requirements:
- Node.js version 20, npm package
- docker, docker compose
- make package

## Installation:
- make up
- npm install

## Run:
- npm run dev

## Endpoints

### 1. Create a Resource

**Command**: `curl -X POST http://localhost:8080/api/resources/ -H 'Content-Type: application/json' -d '{"name": "<enter name here>"}'`

**Method:**  `POST`

**Endpoint:**  `/api/resources`

**Request Body:**

```json
{
  "name": <string>
}
```
**Response:**
- **201 Created**

```json
{
  "id": <int>,
  "name": <string>
}
```


- **500 Internal Server Error**

```json
{
  "error": error.message
}
```

### 2. List resources with basic filters

**Command**: `curl -X GET 'http://localhost:8080/api/resources?name=<enter keyword here>'`

**Method:**  `GET`

**Endpoint:**  `/api/resources?name=`


**Response:**
- **200 OK**

```json
[
  {
    "id": <int>,
    "name": <string>
  }
  ...
]
```

- **500 Internal Server Error**

```json
{
  "error": error.message
}
```

### 3. Get details of a resource

**Command**: `curl -X GET http://localhost:8080/api/resources/<enter id of resource here>`

**Method:**  `GET`

**Endpoint:**  `/api/resources/{id}`

**Response:**
- **200 OK**

```json
{
  "id": <int>,
  "name": <string>
}
```

- **404 Internal Server Error**

```json
{
  "error": "Resource not found"
}
```

- **500 Internal Server Error**

```json
{
  "error": error.message
}
```

### 4. Update Resource

**Command**: `curl -X PUT http://localhost:8080/api/resources/<enter id of resource here> -H 'Content-Type: application/json' -d '{"name": "<enter the updated name here>"}'`

**Method:**  `PUT`

**Endpoint:**  `/api/resources/{id}`

**Request Body:**

```json
{
  "name": <string>
}
```
**Response:**
- **200 OK**

```json
  "Updated successfully"
```


- **500 Internal Server Error**

```json
{
  "error": error.message
}
```

### 5. Delete Resource

**Command**: `curl -X DELETE http://localhost:8080/api/resources/<enter id of resource here>`

**Method:**  `DELETE`

**Endpoint:**  `/api/resources/{id}`

**Response:**
- **204 Delete**

- **500 Internal Server Error**

```json
{
  "error": error.message
}
```

## Uninstallation:
- make down
