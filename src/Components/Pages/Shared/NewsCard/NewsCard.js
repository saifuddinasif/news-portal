import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {

     const {_id, rating, title,author,details,image_url, total_view } = news;

    return (
        <Card className='mb-5' >
        <Card.Header className='d-flex justify-content-between align-items-center'>
             
         <div className='d-flex'>
         <Image 
            roundedCircle
            src={author?.img}
           style={{height:'60px'}} >
            </Image>  
            <div>
                 <p className='mb-0'>{author?.name}</p>
                 <p>{author?.published_date}</p>
                </div>    
         </div>

            <div>
          <FaRegBookmark className='me-2'></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
                {/* <BiBookmarks></BiBookmarks>
                <AiOutlineShareAlt></AiOutlineShareAlt> */}
            </div>

        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <>
                    {
                    details.length >250 ?
                    <p>{details.slice(0,250) + '...'} <Link to={`/news/${_id}`}>Read More</Link>    </p> :
                    
                    <p>
                      {details}
                    </p>
                    }  
        </>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          
            <div>
                <FaStar className='text-warning'>
                </FaStar>

                    <span>{rating?.number}</span>
               
            </div>

            <div>
                <FaEye></FaEye>
                <span>{total_view}</span>
            </div>
 

        </Card.Footer>
      </Card>
    );
};

export default NewsCard;