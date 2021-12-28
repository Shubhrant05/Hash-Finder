import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
const Tweetcard = (props) => {
    return (
        <div className='d-flex justify-content-center column '>
            <Card style={{ width: '38rem' }} className='m-3 shadow p-3 mb-3 bg-white rounded'>
                <Card.Img variant="top" src={props.image} className=' rounded-circle' style={{ height: "70px", width: "70px" }} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">@{props.id}</Card.Subtitle>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Button variant="primary"><a href={props.tweet_url} style={{ color: "white", fontSize: "1rem", textDecoration: "none" }}>View Tweet</a></Button>
                    <Card.Subtitle className="mt-3 text-muted">Tweeted at : {props.time}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Tweetcard
