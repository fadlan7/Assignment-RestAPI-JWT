# Assignment build the first RestAPI using JWT

## Setup

- **Install all dependencies:**

  <The request typ>

  npm install

- **Start nodemon:**
  <The request type>

    npm run dev

- **The application is run at `http://localhost:8000`**

## Login

- **User list:**
  check this JSON [User list](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/data/db.json)

- **URL:**
  <The request type>
    /login
- **Method:**
  <The request type>
    POST
- **Success response:**
  ![response login success](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/apiresponse_images/postman-loginuser.png)
- **Error response:**
  <The request type>

      Code: 400
      Content: { "message": "Username not found!" }

      Code: 400
      Content: { "message": "Wrong password!" }

      Code: 500
      Content: { error : "Internal Server Error" }
