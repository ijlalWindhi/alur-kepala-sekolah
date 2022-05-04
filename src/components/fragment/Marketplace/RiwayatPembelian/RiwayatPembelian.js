// inisasi library default
import React from 'react';
// inisiasi component
import Item from '../../../../assets/item.svg';
import Horizontal from "../../../../assets/more-horizontal.png"

export default class ItemCard extends React.Component {
  render() {
    return (
      <div class="p-6 card bg-white rounded-3xl">
        <div className='grid grid-cols-6'>
            <div className='col-span-1 flex items-center'>
                <img className="" src={Item}></img>
            </div>
            <div className='col-span-4 flex flex-col'>
                <h5 className="text-sm text-gray-500 font-medium">13 Januari 2022</h5>
                <p className="text-2xl font-semibold ">SMK Telkom Malang - Intel Core i7 10th Gen</p>
                <p className="font-normal text-sm text-red-500">INV/BUY/11928410</p>
                <h6 className="font-normal text-normal text-grey-700 mt-2">Rp4.599.000,00 x 1</h6>
            </div>
            <div className=''>
                <img src={Horizontal}/>
            </div>
        </div>
      </div>
    );
  }
}
