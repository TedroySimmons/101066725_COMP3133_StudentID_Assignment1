# Employee Management System - Backend

## Project Overview
This is a **GraphQL-based Employee Management System** built using **Node.js, Express, Apollo Server, and MongoDB**. It allows users to:
- **Sign up** and **log in** with authentication.
- **Manage employees** (CRUD operations).
- **Search employees** by ID, designation, or department.

## Installation & Setup
### 1 Clone the Repository

### 2 Install Dependencies
```sh
npm install
```

### 3 Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=mongodb+srv://your_username:your_password@yourcluster.mongodb.net/comp3133__101066725_assigment1?retryWrites=true&w=majority
```
- Replace `your_username`, `your_password`, and `yourcluster` with your MongoDB Atlas info.

### 4 Start the Server
```sh
node server.js
```
Once started, the **GraphQL API** will be available at:
```
http://localhost:5000/graphql
```

---

## GraphQL API Endpoints
### 1 **User Authentication**
#### - **Signup (Mutation)**
```graphql
mutation {
  signup(username: "john_doe", email: "john@example.com", password: "securepassword") {
    id
    username
    email
    created_at
    updated_at
  }
}
```

#### - **Login (Query)**
```graphql
query {
  login(email: "john@example.com", password: "securepassword") {
    token
    user {
      id
      username
    }
  }
}
```

### 2 **Employee Management**
#### - **Get All Employees (Query)**
```graphql
query {
  getAllEmployees {
    id
    first_name
    last_name
    email
    designation
    department
    created_at
    updated_at
  }
}
```

#### - **Search Employee by ID (Query)**
```graphql
query {
  getEmployeeById(eid: "EMP123") {
    first_name
    last_name
    email
    designation
    department
    created_at
    updated_at
  }
}
```

#### - **Add Employee (Mutation)**
```graphql
mutation {
  addEmployee(
    first_name: "Alice"
    last_name: "Smith"
    email: "alice.smith@example.com"
    gender: "Female"
    designation: "Software Engineer"
    salary: 5000
    date_of_joining: "2022-06-15"
    department: "Engineering"
    employee_photo: "alice.jpg"
  ) {
    eid
    first_name
    last_name
    email
    department
    created_at
    updated_at
  }
}
```

#### - **Update Employee (Mutation)**
```graphql
mutation {
  updateEmployee(
    eid: "EMP123"
    first_name: "Updated Name"
    designation: "Senior Engineer"
    salary: 6000
  ) {
    eid
    first_name
    designation
    salary
    created_at
    updated_at
  }
}
```

#### - **Delete Employee (Mutation)**
```graphql
mutation {
  deleteEmployee(eid: "EMP123") {
    message
  }
}
```

### 3 **Search Employees by Designation or Department (Query)**
```graphql
query {
  searchEmployees(designation: "Software Engineer", department: "Engineering") {
    id
    first_name
    last_name
    designation
    department
    created_at
    updated_at
  }
}
```

## Testing with Postman
1. **Open Postman**.
2. **Set method to `POST`** and enter:
   ```
   http://localhost:5000/graphql
   ```
3. **Go to Body → Select GraphQL**.
4. **Write your query or mutation** and click **Send**.
