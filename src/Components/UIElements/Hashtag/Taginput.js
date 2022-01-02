import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import FetchAPI from '../../../API/FetchAPI'
import Tweetcard from './Tweetcard'
import Tagchart from './Tagchart'
import Footer from '../Footer'
const Taginput = () => {

    const [data, setData] = useState(false)
    const [hashtag, setHashTag] = useState('')

    const handleChange = (event) => {
        setHashTag(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await FetchAPI(hashtag)
            .then((response) => {
                setData(response)
            })
            .catch((error) => console.log(error))


    }
    return (
        <>
            <div style={{ height: "40rem" }}>
                <Form className='d-flex align-self-center w-50 row mx-auto mt-5 mb-5'>
                    <Form.Control onChange={handleChange} type="text" className="mb-2" placeholder="Enter hashtag (eg: bitcoin)" />
                    <Button type="submit" onClick={handleSubmit}>Get details</Button>
                </Form>
                {
                    data ? (data.Tweets ? <div className="mx-auto" style={{ height: "50vh" }}> <Tagchart positive={data.Sentiment.positive} negative={data.Sentiment.negative} neutral={data.Sentiment.neutral} /></div> : null) : null
                }
                {
                    data ? (data.Tweets ? data.Tweets.tweets.map((tweet, index) => {
                        if (index >= 20){
                            return
                        }

                        return (
                            <>
                                <Tweetcard text={tweet.Tweet_Text} name={tweet.name} id={tweet.screen_name} image={tweet.profile_image} tweet_url={tweet.url} time = {tweet.created_at} />
                            </>
                        )
                    }) : <h3 style={{ textAlign: "center" }}>No Tweets found!! Try some other tags</h3>) : <h3 style={{ textAlign: "center" }}>Enter some tags</h3>

                }
                {data.Tweets ? <Footer /> : null}

            </div>
            {data.Tweets ? null : <Footer />}
        </>
    )
}

export default Taginput
