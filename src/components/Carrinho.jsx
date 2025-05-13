import React from 'react'
import tenis from '../assets/tenis.svg'

const Carrinho = () => {
  return (
    <div className=' h-full'>
        <table className='w-full font-inter'>
            <thead>
                <tr className='flex text-[#474747] bg-primary'>
                    <th className='flex-3 text-left'>MEU CARRINHO</th>
                    <th className='flex-1 font-medium'>QUANTIDADE</th>
                    <th className='flex-1 font-medium'>UNITÁRIO</th>
                    <th className='flex-1 font-medium'>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr className='flex'>
                    <td className='flex-3'>
                        <div className='bg-[#E2E3FF] h-28 w-32 flex items-center justify-center rounded-sm '>
                            <img src={tenis} alt="tênis Nike" />
                        </div>
                    </td>
                    <td className='flex-1 bg-amber-700'></td>
                    <td className='flex-1 bg-blue-700'></td>
                    <td className='flex-1 bg-fuchsia-600'></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Carrinho