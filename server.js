const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/comp3133__101066725_assigment1';

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    server.applyMiddleware({ app });
// Server Connected
    mongoose
        .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log(` Connected to MongoDB: ${MONGO_URI}`);
            app.listen(PORT, () => {
                console.log(` Server running at http://localhost:${PORT}/graphql`);
            });
        })
        .catch(err => console.error("MongoDB connection error:", err));
}

startServer();
