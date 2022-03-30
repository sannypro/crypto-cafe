import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [id])
    console.log(coin);
    return (
        <div className='px-4 h-[90vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4  content-center items-center'>
                <div>
                    <h1 className='text-3xl'> general-info:</h1>
                    <hr />
                    <h1>coin name: {coin.name}</h1>
                    <h1>coin market cap rank: {coin.market_cap_rank}</h1>
                    <h1>origin: {coin.country_origin ? coin.country_origin : "Not found"}</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={coin.image?.large} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;