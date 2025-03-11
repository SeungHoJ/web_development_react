
import './App.css'
import { Container } from '@mui/material'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AddItem from './components/AddItem'

export type Item ={
  product: string;
  amount: string;
}

function App() {
  const [items,setItems] = useState<Item[]>([]);
  const addItem = (item: Item) => {
    setItems([item, ...items])
  }
 

  return (
    <>
      <Container maxWidth ="lg">
        <AppBar position="static">
          <Toolbar>
            <Typography>
              장바구니
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <AddItem addItem={addItem} />
      </Container>
    </>
  )
}

export default App
