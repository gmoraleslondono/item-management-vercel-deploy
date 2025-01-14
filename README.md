# Item Management Vercel Deploy

This project is a full-stack application for managing items, built with a React frontend and an Express/MongoDB backend. The application is deployed on Vercel.

<!-- https://www.youtube.com/watch?v=QXXY2Fyclp0 -->

## Project Structure

Coming soon ...

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/item-management-vercel-deploy.git
cd item-management-vercel-deploy
```

2. Install dependencies for both client and server:

cd client
npm install
cd ../server
npm install

3. Set up environment variables:

Create a .env file in the server directory with the following content:

```
MONGODB_URI=your-mongodb-uri
PORT=5000
```

### Running the Application

1. Start the server:

```
cd server
npm run dev
```

2. Start the client:

```
cd client
npm run dev
```

The client will be available at http://localhost:3000 and the server at http://localhost:5000.

### API Endpoints

- GET /items - Retrieve all items
- GET /items/name - Retrieve items by name
- GET /items/quantity - Retrieve items with quantity greater than 5
- GET /items/sorted - Retrieve items sorted by name
- GET /items/grouped - Retrieve items grouped by name
- GET /items/count - Retrieve the count of all items
- POST /items - Create a new item
- PATCH /items/:id - Update the quantity of an item by ID
- PUT /items/:id - Update an item by ID
- DELETE /items/:id - Delete an item by ID
- DELETE /items/deleteMany - Delete items with quantity less than 5

### Deployment

The application is deployed on Vercel. You can find the deployment configuration in the vercel.json file in the server directory.

## License

This project is licensed under the MIT License.
