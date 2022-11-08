import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const EditSundryItem = (props) => {
  const [open, setOpen] = useState(false);
  const [sundryItem, setSundryItems] = useState({ category: '', description: '', details: '' });

  const handleClickOpen = () => {
      setSundryItems({category: props.sundryItem.category, description: props.sundryItem.description, details: props.sundryItem.details })
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSundryItems({...sundryItem, [event.target.name]: event.target.value});
  }

  // Update SundryItem and close modal form
  const handleSave = () => {
    props.updateSundryItem(sundryItem, props.link);
    handleClose();
  }

  return (
    <div>
      <Button color="primary" size="small" onClick={handleClickOpen}>Edit</Button>
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Sundry Item</DialogTitle>
          <DialogContent>
            <TextField autoFocus fullWidth label="Category" name="category" 
                value={sundryItem.category} onChange={handleChange}/> 
              <TextField fullWidth label="Description" name="description" 
                value={sundryItem.description} onChange={handleChange}/>
              <TextField fullWidth label="Details" name="details" 
                value={sundryItem.details} onChange={handleChange}/>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={handleClose}>Cancel</Button>
            <Button color="primary" onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>      
    </div>
  );
};

export default EditSundryItem;