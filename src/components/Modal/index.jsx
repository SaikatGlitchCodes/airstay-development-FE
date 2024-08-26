import React from 'react'

export default function Modal({ children, backgroudClose, closeBtn }) {
    console.log(backgroudClose)
    return (
        <dialog id="my_modal_1" className="w-full modal">
            <div className="h-[80%] max-w-[80%] modal-box">
                {closeBtn && <form method="dialog">
                    <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                </form>}
                {children}
            </div>
            {backgroudClose && <form method="dialog" className="modal-backdrop ">
                <button>close</button>
            </form>}
        </dialog>
    )
}
