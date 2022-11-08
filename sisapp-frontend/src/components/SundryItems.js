import React, { Component } from 'react';
import {SERVER_URL} from '../constants.js'
import ReactTable from "react-table";
import 'react-table/react-table.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddSundryItem from './AddSundryItem';
import EditSundryItem from './EditSundryItem';


class SundryItems extends Component {
  constructor(props) {
  super(props);
  this.state = { SundryItems: [] };
  }

  fetchSundryItems = () => {
    fetch(SERVER_URL + 'sundryItems')
    .then((response) => response.json()) 
    .then((responseData) => { 
      this.setState({ 
        SundryItems: responseData._embedded.sundryItems,
      }); 
    })
    .catch(err => console.error(err)); 
  }

// Delete SundryItem
onDelClick = (link) => {
  if (window.confirm('Are you sure to delete?')) {
    fetch(link, {method: 'DELETE'})
    .then(res => {
      toast.success("Sundry Item deleted", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      this.fetchSundryItems();
    })
    .catch(err => {
      toast.error("Error when deleting", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      console.error(err)
    }) 
  } 
}

// Add new SundryItem
addSundryItem(SundryItem) {
  fetch(SERVER_URL + 'sundryItems', 
    { method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(SundryItem)
    })
  .then(res => this.fetchSundryItems())
  .catch(err => console.error(err))
} 
 
// Update sundryItem
updateSundryItem(sundryItem, link) {
  fetch(link, 
  { method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sundryItem)
  })
  .then(res => {
    toast.success("Changes saved", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    this.fetchSundryItems();
  })
  .catch(err => 
    toast.error("Error when saving", {
      position: toast.POSITION.BOTTOM_LEFT
    }) 
  )
}

componentDidMount() {
  this.fetchSundryItems();
  }

  render() {
    const columns = [{
      Header: 'Category',
      accessor: 'category'
    }, {
      Header: 'Description',
      accessor: 'description',
    }, {
      Header: 'Details',
      accessor: 'details',
    },
    {
      sortable: false,
      filterable: false,
      width: 100,      
      accessor: '_links.self.href',
      Cell: ({value, row}) => (<EditSundryItem sundryItem={row} link={value} updateSundryItem={this.updateSundryItem} fetchSundryItems={this.fetchSundryItems} />),
    },
    {
      id: 'delbutton',
      sortable: false,
      filterable: false,
      width: 100,
      accessor: '_links.self.href',
      Cell: ({value}) => (<button onClick={()=>{this.onDelClick(value)}}>Delete</button>)
    }
]

    return (
      <div className="App">
        <AddSundryItem AddSundryItem={this.addSundryItem} fetchSundryItems={this.fetchSundryItems} />

        <ReactTable data={this.state.SundryItems} columns={columns} 
          filterable={true}/>
        <ToastContainer autoClose={1500} /> 
      </div>
      
    );
  }

}

export default SundryItems;
