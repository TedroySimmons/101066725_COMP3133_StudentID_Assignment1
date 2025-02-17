const { gql } = require('apollo-server-express');

// the ql info for users and employees
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        created_at: String!
        updated_at: String!
    }

    type Employee {
        eid: String!
        first_name: String!
        last_name: String!
        email: String
        gender: String!
        designation: String!
        salary: Float!
        date_of_joining: String!
        department: String!
        employee_photo: String
        created_at: String!
        updated_at: String!
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    type Query {
        login(username: String!, password: String!): AuthPayload
        getAllEmployees: [Employee]
        getEmployeeByEid(eid: String!): Employee
        searchEmployees(designation: String, department: String): [Employee]
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): User
        addEmployee(
            eid: String!,
            first_name: String!,
            last_name: String!,
            email: String,
            gender: String!,
            designation: String!,
            salary: Float!,
            date_of_joining: String!,
            department: String!,
            employee_photo: String
        ): Employee
        updateEmployee(
            eid: String!,
            first_name: String,
            last_name: String,
            email: String,
            gender: String,
            designation: String,
            salary: Float,
            date_of_joining: String,
            department: String,
            employee_photo: String
        ): Employee
        deleteEmployee(eid: String!): String
    }
`;

module.exports = typeDefs;
