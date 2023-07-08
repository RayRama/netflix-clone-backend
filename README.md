# Netflix Backend

This is the backend for the Netflix Clone project. Using this API, you can create, read, update and delete movies and series. You can also create, read, update and delete users. The API is built with Node.js, Express.js and MongoDB.

## App Repository

```bash
https://github.com/rayrama/netflix-clone
```

## Tech Stack

**Dashboard:** React, TailwindCSS

**API:** Node, Express, MongoDB

You can check the package.json files for more information in each folder.

## Folder Structure

```bash
.
├── README.md (This page)
├── api # API
|  ├── controllers # Controllers for all logic
|  ├── models # Models for all schemas
|  ├── routes # Routes for all crud operations
├── dashboard # Client
|  ├── public # Public
|  ├── src # Source
|  |  ├── components # Components
|  |  ├── pages # Pages
```

## Installation

```bash
For the api folder:
cd api && yarn

For the dashboard folder:
cd dashboard && yarn
```

Before running the app, you need to create a .env file in the api folder with the following variables:

```bash
MONGO_URL=your_mongo_url
SECRET_KEY=your_secret
```

For **MONGO_URL**, you can use a local mongo database or a cloud database like MongoDB Atlas. Register [here](https://www.mongodb.com/cloud/atlas) to get a free account.

For **SECRET_KEY**, you can use any string you want. I recommend you to use a random string generator like [this](https://randomkeygen.com/) or [this](https://generate-random.org/encryption-key-generator).

## Running the app

You shold run the api firstly and then the dashboard.

```bash
For the api folder:
yarn start

For the dashboard folder:
yarn start
```

## API Collection

Download [this](api/example/Netflix.postman_collection.json) file and import it to Postman to get the API collection.
