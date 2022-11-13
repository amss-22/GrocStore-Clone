import React from 'react'
import Newlaunch from "../Component/Landingpage/Newland"
import Mybasket from "../Component/Landingpage/Mybasket"
import Bank from "../Component/Landingpage/Bank"
import Bestsell from "../Component/Landingpage/bestseller"
import Topoffer from "../Component/Landingpage/Topoffer"
import Fruit from "../Component/Landingpage/Fruit"
import Beverage from "../Component/Landingpage/Beverage"
import Snack from "../Component/Landingpage/Snack"
import Cleaning from "../Component/Landingpage/Cleaning"
import Beauty from "../Component/Landingpage/Beauty"
import Kitchen from "../Component/Landingpage/Kitchen"
import Banner from "../Component/Landingpage/banner"
import Brand from "../Component/Landingpage/Brand"
import Featured from "../Component/Landingpage/Featured"
import Bigonline from "../Component/Landingpage/bigonline"
import "../Component/Landingpage/Landing.Module.css"
const HomePage = () => {
  return (
    <div>

      <Newlaunch />
      <Mybasket />
      <Bank />
      <Bestsell />
      <Topoffer />
      <Fruit />
      <Beverage />
      <Snack />
      <Cleaning />
      <Beauty />
      <Kitchen />
      <Banner/>
      <Brand />
      <Featured />
      <Bigonline />
    </div>
    
  )
}

export default HomePage