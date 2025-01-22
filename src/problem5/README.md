## Requirements:
- Node.js version 20, npm package
- docker, docker compose, make

## Installation:
- make up
- npm install

## Run:
- npm run dev

## Endpoints

### 1. Create a Resource

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
