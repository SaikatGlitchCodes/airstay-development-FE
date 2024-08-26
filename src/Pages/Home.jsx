import React from 'react'
import Navbar from '../components/Navbar'
import IconsList from '../components/Home/IconsList'
import Card from '../components/Card'

const cardData = [
  {
    title: 'Discover New Destinations',
    image: 'https://picsum.photos/id/1005/500/300',
    description: 'Discover hidden gems like lighthouses, waterfalls, and breathtaking vistas.',
    price: '1500',
    live: true
  },
  {
    title: 'Book Your Stay',
    image: 'https://picsum.photos/id/1006/500/300',
    description: 'Book your perfect stay at our luxurious properties.',
    price: '2500',
  },
  {
    title: 'Host Your Space',
    image: 'https://picsum.photos/id/1007/500/300',
    description: 'Elevate your home to a world-class experience with our premium properties.',
    price: '3500',
    live:true
  },
  {
    title: 'Join Our Community',
    image: 'https://picsum.photos/id/1008/500/300',
    description: 'Connect with like-minded hosts and share your experiences.',
    price: '4500',
  },
  {
    title: 'Discover Our Blog',
    image: 'https://picsum.photos/id/1009/500/300',
    description: 'Stay updated with the latest travel news and tips.',
    price: '5500',
  },
  {
    title: 'Book Your Stay',
    image: 'https://picsum.photos/id/1010/500/300',
    description: 'Book your perfect stay at our luxurious properties.',
    price: '6500',
  }
]

export default function Home() {
  return (
    <div>
        <Navbar/>
        <IconsList/>
        <div className="flex flex-wrap p-12 gap-7">
          {
            cardData.map((card, index) => 
              <Card key={index} card={card} />
            )
          }
        </div>
        
    </div>
  )
}
