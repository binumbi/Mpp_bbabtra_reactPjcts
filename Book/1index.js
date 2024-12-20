const express=require("express")
const app=express()
const expressGraphQL=require("express-graphql").graphqlHTTP
const authors = [
    { id: 1, name: 'J. K. Rowling' },
    { id: 2, name: 'J. R. R. Tolkien' },
    { id: 3, name: 'Brent Weeks' }
]

const books = [
    { id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
    { id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
    { id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
    { id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
    { id: 5, name: 'The Two Towers', authorId: 2 },
    { id: 6, name: 'The Return of the King', authorId: 2 },
    { id: 7, name: 'The Way of Shadows', authorId: 3 },
    { id: 8, name: 'Beyond the Shadows', authorId: 3 }
]
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt
}=require("graphql")
/*const schema=new GraphQLSchema({
    query: new GraphQLObjectType({
     name:"HelloWorld",
    fields:()=>({
        message:({
            type:GraphQLString,
            resolve:()=>'HelloWorld',
        })
    })  
    })
    
})*/
const BookType=new GraphQLObjectType({
    name:"Book",
    description:"This represents a book written",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name:{type:GraphQLNonNull(GraphQLString)},
        authorId:{type:GraphQLNonNull(GraphQLInt)},
        author:{
            type:AuthorType,
            resolve:(book)=>{
                return authors.find(author=>author.id===book.authorId)
            }
              
        }
    })
})
const AuthorType=new GraphQLObjectType({
    name:"Author",
    description:"This represents Author of a book",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name:{type:GraphQLNonNull(GraphQLString)}
       
    })
})
const RootQueryType=new GraphQLObjectType({
    name:'Query',
    description:'Root Query',
    fields:()=>({
       
        books:{
            type:new GraphQLList(BookType),
            description:'List of books',
            resolve:()=>books
        },
        book:{
            type:new GraphQLList(BookType),
            description:'Single of book',
            args:{
                id:{type:GraphQLInt}
            },
            resolve:(parent,args)=>books.find(book=>book.id===args.id)
        }
    })
})

const schema=new GraphQLSchema({
  query:RootQueryType  
})
app.use("/graphql",expressGraphQL({
    schema:schema,
    graphiql:true
}))
app.listen(5000,()=>console.log('Server is running @5000'))