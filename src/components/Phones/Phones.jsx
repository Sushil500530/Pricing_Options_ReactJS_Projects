
import axios from "axios";
import {useState,useEffect} from "react"
import { BarChart, Bar, XAxis, YAxis,Tooltip} from 'recharts';
import { Bars,Puff} from  'react-loader-spinner' ;
import React from 'react'


const Phones = () => {
    const [phones,setPhones] =useState([]) ;
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data =>setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesData = data.data.data;
            const phonesWidthFakeData = phonesData.map(phone =>{
                const object = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return object ;
            })
            console.log(phonesWidthFakeData);
            setPhones(phonesWidthFakeData)
            setLoading(false)
        })
    },[])

    // console.log(phones);
    return (
        <div>
            {loading && <div className="flex justify-center items-center">
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
                <Puff
                    height="80"
                    width="80"
                    radius={1}
                    color="#4fa94d"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
                </div>}
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            
            <BarChart width={1200} height={400} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;