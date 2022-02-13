import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import FetchAPI from '../../../API/FetchAPI'
import Tweetcard from './Tweetcard'
import Tagchart from './Tagchart'
import Footer from '../Footer'
import loadingsvg from '../loading.svg'
const Taginput = () => {

    const [data, setData] = useState(false)
    const [hashtag, setHashTag] = useState('')
    const [searchLoader , setSearchLoader] = useState(false);

    const handleChange = (event) => {
        setHashTag(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSearchLoader(true)
        await FetchAPI(hashtag)
            .then((response) => {
                setData(response)
                setSearchLoader(false)
            })
            .catch((error) => console.log(error))


    }
    return (
        <>
            <div style={{ height: "40rem" }}>
                <Form className='d-flex align-self-center w-50 row mx-auto mt-5 mb-5 '>
                    <Form.Control onChange={handleChange} type="text" className="mb-2 shadow-none" placeholder="Enter hashtag (eg: bitcoin)" />
                    <Button type="submit" onClick={handleSubmit} className="shadow-none">Get details</Button>
                </Form>
                {(searchLoader) ?         
                <div className="d-flex justify-content-center" >
                <img src={loadingsvg} alt = "loader"/>
                </div>:<>
                {
                    data ? (data.Tweets ? <div className="mx-auto" style={{ height: "50vh" }}> <Tagchart positive={data.Sentiment.positive} negative={data.Sentiment.negative} neutral={data.Sentiment.neutral} /></div> : null) : null
                }
                {
                    data ? (data.Tweets ? data.Tweets.tweets.map((tweet, index) => {
                        if (index >= 20) {
                            return null
                        }

                        return (
                            <>
                                <Tweetcard text={tweet.Tweet_Text} name={tweet.name} id={tweet.screen_name} image={tweet.profile_image} tweet_url={tweet.url} time = {tweet.created_at} />
                            </>
                        )
                    }) : <h3 style={{ textAlign: "center" }}>No Tweets found!! Try some other tags</h3>) : <h3 style={{ textAlign: "center" }}>Enter some tags</h3>

                }
                {data.Tweets ? <Footer /> : null}
                </>}
            </div>
            {data.Tweets ? null : <Footer />}
        </>
    )
}

export default Taginput
