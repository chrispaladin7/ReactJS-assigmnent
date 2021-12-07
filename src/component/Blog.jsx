import { useParams } from "react-router";

import BlogDetails from "./BlogDetails";
import * as blogPosts from "../mockupData/dbBlogData.json";
import { useEffect, useState } from "react";

const Blog = () =>{
  
    const [accepted, setAccepted] = useState(false);
    const { id } = useParams();
    
    useEffect(() => {
        
        setTimeout(() => {
            setAccepted(!accepted);

          }, 5000);
        
      }, [accepted]);

    return(
        <div className="posts-container">
            {!!id &&  (
                blogPosts.default.filter(item => item.id === id).map(ele => (
                    <BlogDetails key={ele.id} post={ele} />
                ))
             )}
	    </div>
    );
}

export default Blog;