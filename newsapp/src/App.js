import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ContextApi from './Components/ContextApi/ContextApi';
//import Classcomponent from './Components/Classcomponet/Classcomponent';

function App() {
const [newsteaser, setTeaser]=useState();
const [resultData,setResult]=useState([]);
  const getnews=()=>{
      console.log("But click");
      //code starts
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "action": "getArticles",
        "keyword": "Tesla Inc",
        "sourceLocationUri": [
          "http://en.wikipedia.org/wiki/United_States",
          "http://en.wikipedia.org/wiki/Canada",
          "http://en.wikipedia.org/wiki/United_Kingdom"
        ],
        "ignoreSourceGroupUri": "paywall/paywalled_sources",
        "articlesPage": 1,
        "articlesCount": 100,
        "articlesSortBy": "date",
        "articlesSortByAsc": false,
        "dataType": [
          "news",
          "pr"
        ],
        "forceMaxDataTimeWindow": 31,
        "resultType": "articles",
        "apiKey": "4bc0ab43-a0af-4555-9f95-14b27d2ae8b8"
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      fetch("https://eventregistry.org/api/v1/article/getArticles", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setResult(result["articles"]['results']);
          console.log(result);
        })
        .catch((error) => console.error(error));

      //code ends
  }
  //
  useEffect(()=>{
    getnews();
  },[])

 
  return (
    <Container>
      <Row>
        <Col className='bg-red-200  p-4 m-4 w-1/2'>
        <input type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={getnews} value="Get News"/>
       {/* <Classcomponent value={"hello"}></Classcomponent> */}
       <ContextApi></ContextApi>
        </Col>
        </Row>
    <Row>
        {
          resultData.map((item)=>{
             return <Col className='columns-3'><Card style={{ width: '18rem' }}>
             
               <Card.Body>
               <Card.Img variant="top" src={item.image}/>
                 <Card.Title>{item.title}</Card.Title>
                 <p>Published Date: {item.date}</p>
                 {item.authors.map((auth)=>{
                    return <p>Author : {auth.name}</p>
                 })}
                 <Card.Link href={item.url}>Read more</Card.Link>
                 <a href="www.facebook.com"><p className='socialIcons'><i class="fa-brands fa-facebook"></i></p></a>
               </Card.Body>
           </Card></Col>
          })
        } 
        </Row>
 
    </Container>
  );
}

export default App;
