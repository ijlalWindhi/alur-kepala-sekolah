// inisasi library default
import React from 'react';
// inisiasi component
// import Item from '../../../../assets/item.svg';

export default class ItemCard extends React.Component {
  render() {
    return (
      <div class="p-6 card bg-white rounded-3xl">
        <div className="flex justify-center">
          <img className="" src={this.props.image}></img>
        </div>
        <h5 className="mb-2 text-base font-medium mt-10">{this.props.name}</h5>
        <p className="font-normal text-sm text-red-600">Kota Malang</p>
        <h6 className="font-normal text-sm text-grey-700 mt-2">Rp. {this.props.price}</h6>
        <button className="btn btn-md bg-red-600 py-2 px-6 rounded-full text-white mt-6">
          Beli
        </button>
      </div>
    );
  }
}
