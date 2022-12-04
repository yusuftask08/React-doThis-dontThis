import React, { useState, useEffect } from 'react'
import '../style.css'
import axios from 'axios';

const useFetchDoThis = () => {
    const [loading, setLoading] = useState(true);
    const [data1, setData1] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();
    const [error, setError] = useState();

    const url = 'https://catfact.ninja/fact'

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        axios.get(url, { signal: controller.signal })
            .then((res) => {
                setData1(res.data);
                console.log('res.data1 do this', res.data)
            }
            )
            .catch((err) => setError(err))
            .finally(() => setLoading(false));

        return () => {
            controller.abort();
        }

    }, [])

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        axios.get(url, { signal: controller.signal })
            .then((res) => {
                setData2(res.data);
                console.log('res.data2 do this', res.data)
            }
            )
            .catch((err) => setError(err))
            .finally(() => setLoading(false));

        return () => {
            controller.abort();
        }

    }, [url])

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        axios.get(url, { signal: controller.signal })
            .then((res) => {
                setData3(res.data);
                console.log('res.data3 do this', res.data)
            }
            )
            .catch((err) => setError(err))
            .finally(() => setLoading(false));

        return () => {
            controller.abort();
        }
    }, [url])

    return (
        <div className='dont-this'>
            <div className='title'>
                <h1> UseFetch Do This ✅</h1>
            </div>
            <span>Data1: </span>
            <p>  {data1?.fact}</p>
            <span>Data2: </span>
            <br />
            <p> {data2?.fact}</p>
            <span>Data3: </span>
            <br />
            <p> {data3?.fact}</p>
        </div>
    )

}

export default useFetchDoThis