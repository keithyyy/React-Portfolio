import React from 'react'
import Header from '../../components/Header'

const Home = ({ title }) => {

    title = "About Keith Crooc"

    return (
        <div>
            <Header title={title} />
        </div>
    )
}

export default Home
