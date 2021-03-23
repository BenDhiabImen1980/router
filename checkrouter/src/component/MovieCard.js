
import React from 'react'
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStarRating from "react-star-ratings-component";
import Description from './Description'
import {Link} from 'react-router-dom'


const MovieCard=({movie})=> {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Link to ={"/Description/"+movie.Id}>
                    
                    <Card.Title>{movie.title}</Card.Title>
                </Link> 
                <Card.Img variant="top" src={movie.Poster} />
            {/* <ReactStarRating
                 name="rate" 
                 starCount={5}
                 value={movie.rate} /> */}
                <ReactStarRating
                    numberOfStar={5}
                    numberOfSelectedStar={movie.rate}
                    colorFilledStar="red"
                    colorEmptyStar="black"
                    starSize="20px"
                    spaceBetweenStar="10px"
                    disableOnSelect={false}
                //   onSelectStar={movie.rate}
                />
            </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard;
