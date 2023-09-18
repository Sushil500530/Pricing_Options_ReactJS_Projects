
import axios from "axios";
import {useState,useEffect} from "react"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones,setPhones] =useState([])

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
        })
    },[])

    // console.log(phones);
    return (
        <div>
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