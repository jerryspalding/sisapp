import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddSundryItem = (props) => {
  const [open, setOpen] = useState(false);
  const [sundryItem, setSundryItem] = useState({category: '', description: '', details: ''});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSundryItem({...sundryItem, [event.target.name]: event.target.value});
  }

  // Save SundryItem and close modal form
  const handleSave = () => {
    props.AddSundryItem(sundryItem);
    handleClose();
  }

  return (
    <div>
      <Button variant="outlined" color="primary" style={{margin: 10}} onClick={handleClickOpen}>
        Add New Stig Item
      </Button>
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Stig Item</DialogTitle>
          <DialogContent>
            <TextField autoFocus fullWidth label="Category" name="category" 
              value={sundryItem.category} onChange={handleChange}/> 
            <TextField fullWidth label="Description" name="description" 
              value={sundryItem.description} onChange={handleChange}/>
            <TextField fullWidth label="Details" name="details" 
              value={sundryItem.Details} onChange={handleChange}/>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={handleClose}>Cancel</Button>
            <Button color="primary" onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>      
    </div>
  );
};

export default AddSundryItem;
