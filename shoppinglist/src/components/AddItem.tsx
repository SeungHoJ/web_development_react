import { useState } from "react"
import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Item } from "../App2"

type AddItemProps = {
  addItem : (item:Item) => void;

}


function AddItem(props: AddItemProps){
  const [open,setOpen] = useState(false)

  const [item, setItem] = useState<Item>({
    product: '',
    amount: '',
  });

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const addItem = () =>{
    props.addItem(item);
    setItem({
      product: '',
      amount: '',
    })
    
    handleClose();
    alert(`품목 : ${item.product}`)
    
  }

  return(
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>Add Item</Button>
      <br />
      <dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField value={item.product} margin="dense"
            onChange ={e => setItem({...item, product: e.target.value})}
            label="Product" fullWidth />

          <TextField value={item.amount} margin="dense"
            onChange ={e => setItem({...item, amount: e.target.value})}
            label="Amount" fullWidth />



        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={addItem}>Add</Button>
        </DialogActions>
      </dialog>
    </>
  )
}

export default AddItem