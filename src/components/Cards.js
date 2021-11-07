import React from 'react'
import CardItem from './CardItem'
import './css/Cards.css'
import '../App.css'
function Cards() {
    return (
        <div className='cards'>
          <h1>What We Do</h1>  
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem
                            src='images/img_1.jpg'
                            text='GPS Installation on All Fleet Vehicles'
                            label='Fleet' 
                            path='/services'
                        />
                         <CardItem
                            src='images/img_2.jpg'
                            text='Car Sharing Hardware Installation'
                            label='Telematics' 
                            path='/services'
                        />                   
                          <CardItem
                            src='images/img_3.jpg'
                            text='Straight Off the Lot Camera Installs'
                            label='Cameras' 
                            path='/services'
                        />              
                        </ul>
                        </div>
            </div>
        </div>
    )
}

export default Cards
