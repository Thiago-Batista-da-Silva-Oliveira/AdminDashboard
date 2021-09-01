import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import './home.css'
import {userData} from '../../dummyData'
import WidGetSmall from '../../components/WidGetSmall/WidGetSmall'
import WidGetLg from '../../components/WidGetLg/WidGetLg'

export default function Home(){
    return (
        <div className="home">
             <FeaturedInfo />
             <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
             <div className="homeWidgets">
                 <WidGetSmall />
                 <WidGetLg />
             </div>
        </div>
    )
}