import {useHistory} from "react-router-dom";
import React, {useEffect, useState} from 'react';
// import {Card,Row,Col} from 'react-bootstrap/Card'



function BookList() {
   
   let history = useHistory();

   const [bookDetails, setBookDetails] = useState([]);
   useEffect(() => {
     fetch('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books')
   .then((results) => results.json())
   .then((data) =>{
      setBookDetails(data)
     
     })
   }, [])

return (

   
<>
<button style={{marginLeft:'43%',boxShadow:'0 0 10px 0 black'}} className="btn btn-success"onClick = {() => history.push('/')}>Back to Homepage</button><br/>

{bookDetails.map((book) =>(
<div className="red"> 
<div className="card" style={{width:'18rem',boxShadow:'0 0 10px 0 rgb(30, 109, 65)',borderRadius:'10px'}}>
<h4>Title : {book.title}</h4>   
<h5>Pages : {book.pages}</h5>
<h5>Release Date {book.releaseDate}</h5>
<h5>ISBN : {book.isbn}</h5>
</div>
</div>
))}


</>
        
 );} 
 export default BookList;
