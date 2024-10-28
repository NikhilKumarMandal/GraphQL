import express from "express";
import { ApolloServer } from "@apollo/server";

import {expressMiddleware} from "@apollo/server/express4"


export async function initServer() {
    const app = express();
    const graphqlServer = new ApolloServer({
        typeDefs: `
            type Query {

            }

            type Mutation {
            
            }
        `,
        resolvers: {
            Query: {},
            Mutation: {}
        },
    })

    await graphqlServer.start();

    app.use("/graphql", expressMiddleware(graphqlServer))
    
    return app;
}