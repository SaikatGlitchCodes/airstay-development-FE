import React from 'react'
import Modal from '../Modal'
import DropDown from '../shared/dropDown'

const searchElement = [
    {
        title: 'Where',
        placeHolder: 'Search Destinationss',
        width: '250'
    },
    {
        title: 'Check-in',
        placeHolder: 'Add Dates',
        width: '200'
    },
    {
        title: 'Check-out',
        placeHolder: 'Add Dates',
        width: '200'
    },
    {
        title: 'Who',
        placeHolder: 'Add Guests',
        width: '300'        
    }
]

export default function Navbar() {
    return (
        <nav className="flex flex-col justify-center px-16 py-8 font-sans border-b-2 border-shadow">
            <div className='h-[16px] flex items-center justify-between'>
                <div className="flex items-center brand text-airstay-red">
                    <i className="text-4xl fi fi-brands-airbnb"></i> <h1 className='text-2xl font-semibold ms-1'>airstay</h1>
                </div>
                <div className='flex w-[180px] text-lg items-start justify-between'>
                    <h1>Stays</h1>
                    <h1>Experiences</h1>
                </div>
                <div className='flex items-center settings gap-x-2'>
                    <h1 className='text-sm px-5 py-3 hover:bg-[#ebebeb] flex items-center rounded-full cursor-pointer'>Airstay Your Home</h1>
                    <i onClick={() => document.getElementById('my_modal_1').showModal()} className=" rounded-full px-3 py-2 hover:bg-[#ebebeb] fi fi-br-world"></i>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className=' px-4 h-[50px] w-24 rounded-full flex items-center justify-between border-[0.5px] border-[#b3b3b3] hover:shadow-md'>
                            <i className="fi fi-br-menu-burger"></i>
                            <i className="text-2xl fi fi-br-user-skill-gear text-[#595959]"></i>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Sign Up</a></li>
                            <li><a>Sign In</a></li>
                            <hr className='my-2' />
                            <li><a href="">Airstay Your Home</a></li>
                            <li><a href="">Help!</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='mt-10 h-[65px] mx-auto shadow-lg rounded-full border-[1px] border-shadow flex overflow-hidden '>
                {
                    searchElement.map((element) => (
                        
                        <div key={element.title} className={`h-full cursor-pointer hover:bg-shadow px-5 flex flex-col justify-center rounded-full`} style={{ width: `${element.width}px` }}>
                            <h1 className='text-base'>{element.title}</h1>
                            <p className='text-sm text-light'>{element.placeHolder}</p>
                        </div>
                    ))
                }
            </div>
            {/* Modal code here */}
            <Modal backgroudClose={true} closeBtn={true}>
                <h3 className="text-5xl font-bold">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
            </Modal>
        </nav>
    )
}
