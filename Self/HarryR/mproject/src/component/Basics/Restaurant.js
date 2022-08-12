import React, { useState } from 'react';
import './style.css'
import Menu from "./menuApi"
import Menucard from './Menucard';
import Navbar from './Navbar';

const uniquelist = [
    ...new Set(
     Menu.map((curElem) => {
    return curElem.category
    }) 
 ),
 "All",
]

console.log(uniquelist)


const Restaurant = () => {

    const [menuData, setMenudata] = useState(Menu);
    const [menuList, setMenuList] = useState(uniquelist)


    const filterItem = (category) => {

        if(category === "All") {
            setMenudata(Menu)
            return
        }


    const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })

        setMenudata(updatedList);
    };




    return (
        <>
            
            <Navbar filterItem={filterItem} menuList={menuList} />
            <Menucard  data={menuData} />
        </>
    );
};

export default Restaurant;