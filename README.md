# Table of Contents

* [About the Project](#about-the-project)
* [Run Locally](#run-locally)
* [Demo](#demo)
  *  [x] [API Deploy](#api-deploy)
  *  [x] [API Postman - Website](#api-postman)
  *  [x] [API Reference - Task](#api-reference---task)
* [Contact](#contact)

# About The Project

Sebuah project REST API untuk mengelola task yang ditujukan untuk test

# Run Locally

Clone the project

```bash
  git clone https://github.com/helmipradita/test-upscale
```

Go to the project directory

```bash
  cd test-upscale
```

Install dependencies

```bash
  npm install
```

Setup .env copy from .env.example

```bash
  HOST=localhost
  PORT=8000
  PG_CONNECT=postgresql://postgres:LD6TM34C0ayAXCgH3EZM@containers-us-west-43.railway.app:6288/railway
```

Start the server

```bash
  npm run dev
```

# Demo

## API Deploy 

```bash
https://test-upscale.helmipradita.dev
```

## API Postman
```bash
https://helmi-pradita.postman.co/workspace/Team-Workspace~33b9ca7f-04ba-427e-8cfb-cd8cf1a93588/collection/26506164-4786656b-9d24-4dbd-9a28-25b2c9acdf3c?action=share&creator=26506164
```

## API Reference - Task

<details>
<summary>Show</summary>
<br>

#### Insert task

```
  POST /task
```

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `judul`     | `string` | **Required**. Judul task yang di inginkan    |
| `deskripsi`     | `string` | **Required**. Deskripsi task yang di inginkan    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "34e984cc-2cfb-4b68-a9d0-6ee380ab808d",
    "judul": "Judul 3",
    "deskripsi": "Ini adalah deskripsi judul 3"
  },
  "message": "insert tasks success"
}
```

#### Get all task

```
  GET /task
```

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "34e984cc-2cfb-4b68-a9d0-6ee380ab808d",
      "judul": "Judul 3",
      "deskripsi": "Ini adalah deskripsi judul 3",
      "selesai": false,
      "created_at": "wednesday, 22 Mar 2023, 15:35",
      "updated_at": "wednesday, 22 Mar 2023, 15:35"
    },
    {
      "id": "c6c263da-b65c-4eb3-bfc5-cb2b1af43f47",
      "judul": "Judul 2",
      "deskripsi": "Ini adalah deskripsi judul 2",
      "selesai": true,
      "created_at": "tuesday  , 21 Mar 2023, 19:14",
      "updated_at": "tuesday  , 21 Mar 2023, 19:16"
    },
    {
      "id": "087b386b-dcab-4ff4-b667-3505892fd017",
      "judul": "Judul 1",
      "deskripsi": "Ini adalah deskripsi",
      "selesai": false,
      "created_at": "tuesday  , 21 Mar 2023, 19:13",
      "updated_at": "tuesday  , 21 Mar 2023, 19:13"
    }
  ],
  "message": "get tasks success",
  "pagination": {
    "page": 0,
    "limit": 12,
    "totalRows": 3,
    "totalPage": 1
  }
}
```

#### Get task by user id

```
  GET /task/:id
```

Field body params

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id dari task yang ingin di lihat    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "c6c263da-b65c-4eb3-bfc5-cb2b1af43f47",
    "judul": "Judul 2",
    "deskripsi": "Ini adalah deskripsi judul 2",
    "selesai": false,
    "created_at": "tuesday  , 21 Mar 2023, 19:14",
    "updated_at": "tuesday  , 21 Mar 2023, 19:16"
  },
  "message": "get data tasks success"
}
```

#### Update task

```
  PUT /task/:id
```

Field body params

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id dari task yang ingin di edit    |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `judul`     | `string` | **Required**. Judul task yang di inginkan    |
| `deskripsi`     | `string` | **Required**. Deskripsi task yang di inginkan    |
| `selesai`     | `boolean` | **Required**. Status task yang di inginkan    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "c6c263da-b65c-4eb3-bfc5-cb2b1af43f47",
    "judul": "Judul 2",
    "deskripsi": "Ini adalah deskripsi judul 2",
    "selesai": "true"
  },
  "message": "edit tasks success"
}
```

#### Delete task

```
  PUT /task/:id
```

Field body params

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `id` | `string` | **Required**. id dari task yang ingin di lihat        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "delete tasks success"
}
```

</details>


# Contact

Contributors names and contact info
  * Helmi Pradita [@helmipradita](https://github.com/helmipradita)
