const express=require("express")
const app=express()
const expressGraphQL=require("express-graphql").graphqlHTTP
const {GraphQLSchema,GraphQLObjectType,GraphQLString}=require("graphql")

const schema=new GraphQLSchema({
    query: new GraphQLObjectType({
     name:"HelloWorld",
    fields:()=>({
        message:({
            type:GraphQLString,
            resolve:()=>'HelloWorld',
        })
    })  
    })
    
})

app.use("/graphql",expressGraphQL({
    schema:schema,
    graphiql:true

}));
app.listen(5500,()=>console.log("Servr is running @5500"))