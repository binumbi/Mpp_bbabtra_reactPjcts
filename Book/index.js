const express=require("express")
const cors = require('cors')
const app=express()
app.use(cors());

const expressGraphQL=require("express-graphql").graphqlHTTP
const authors = [
    { id: 1, name: 'J. K. Rowling' },
    { id: 2, name: 'J. R. R. Tolkien' },
    { id: 3, name: 'Brent Weeks' }
]
//
const category= [
    { id:1, name:'Genaeral', slug:'GEN'},
    { id:2, name:'Politics', slug:'POL'},
    { id:3, name:'Travel', slug:'TRL'},
    { id:4, name:'Technology', slug:'TECH'}
]

const articles = [
    { id: 1, title: 'Harry Potter and the Chamber of Secrets',image:"bkjwherho",description:"weer", authorId: 1,categoryId:1 },
    { id: 2, title: 'Harry Potter and the Prisoner of Azkaban', image:"awsed",description:"werwe",authorId: 1 },
    { id: 3, title: 'Harry Potter and the Goblet of Fire', image:"asd3",description:"escs",authorId: 1 },
    { id: 4, title: 'The Fellowship of the Ring',image:"",description:"", authorId: 2 },
    { id: 5, title: 'The Two Towers', image:"",description:"",authorId: 2 },
    { id: 6, title: 'The Return of the King',image:"",description:"", authorId: 2 },
    { id: 7, title: 'The Way of Shadows',image:"",description:"",authorId: 3 },
    { id: 8, title: 'Beyond the Shadows',image:"",description:"", authorId: 3 }
]

const newsarticles =[
    {id:1,title: "New Discoveries in Space",date: "2024-10-29",author: "Jane Doe",content: "Scientists have made groundbreaking discoveries about exoplanets in recent studies, revealing new insights into their atmospheres and potential for life.",
    image: {
          url: "https://example.com/images/space-discovery.jpg",
          alt: "A stunning view of exoplanets in the galaxy"
        },
        category: "Science",
        tags: ["space", "exoplanets", "discovery"]
      },
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

const NewsType = new GraphQLObjectType({
    name:"NewsList",
    description:"This represents a News Content",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        title:{type:GraphQLNonNull(GraphQLString)},
        content:{type:GraphQLNonNull(GraphQLString)},
    })
})
const CategoryType = new GraphQLObjectType({
    name:"Category",
    description:"This represents a News Category",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name:{type:GraphQLNonNull(GraphQLString)},
        slug:{type:GraphQLNonNull(GraphQLString)},
    })
})

const ArticleType=new GraphQLObjectType({
    name:"News",
    description:"This represents a Author written",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        title:{type:GraphQLNonNull(GraphQLString)},
        image:{type:GraphQLNonNull(GraphQLString)},
        description:{type:GraphQLNonNull(GraphQLString)},
        authorId:{type:GraphQLNonNull(GraphQLInt)},
        author:{
            type:AuthorType,
            resolve:(articles)=>{
                return authors.find(author=>author.id===articles.authorId)
            }
              
        }
    })
})
const AuthorType=new GraphQLObjectType({
    name:"Author",
    description:"This represents Author of a Artilce",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name:{type:GraphQLNonNull(GraphQLString)}
       
    })
})
const RootQueryType=new GraphQLObjectType({
    name:'Query',
    description:'Root Query',
    fields:()=>({
       
        articles:{
            type:new GraphQLList(ArticleType),
            description:'List of news',
            resolve:()=>articles
        },
        book:{
            type:new GraphQLList(ArticleType),
            description:'Single of Article',
            args:{
                id:{type:GraphQLInt}
            },
            resolve:(parent,args)=>books.find(book=>book.id===args.id)
        },
        categories:{
            type:new GraphQLList(CategoryType),
            description:'List Categories',
            resolve:()=>category
        },
        newsarticles:{
            type:new GraphQLList(NewsType),
            description:'List News',
            resolve:()=>newsarticles
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