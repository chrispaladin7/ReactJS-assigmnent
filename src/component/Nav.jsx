import axios from "axios";
import React from "react";


const baseURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6cc4c09c9d374e3eaba3bf30ee379d73"

export default function App() {
  const [post, setPost] = React.useState(null);
 

  React.useEffect(() => {


      axios.get(baseURL)
      .then((response) => {
        setPost(response.data.articles);
        console.log(JSON.stringify(response.data.articles));
      })
      .catch(error => console.log(`Error: ${error}`));
   

  },[]);



   if (!post) return null;

  return (

    // -- Styling the API data
    <div>
     
       
      {post.filter((ele,index) => index < 5).map((item) => (
        <>
          <img src={item.urlToImage} alt="articleImage" width="100" />
          <h4><strong>{item.title}</strong></h4>
          <p><strong>Author: </strong> {item.author}</p>
          <p>{item.description}</p>
          <p><strong>Published At: </strong>{item.publishedAt}</p>
          <hr/>                                 
        </>
      ))}
      </div>
   
  );
}