
import './App.css'
import { useState } from 'react'
import { Container, ListItem, ListItemText } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'

import AddItem from './components/AddItem'

type Item ={
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

        <List>
          {
            items.map((item,index) => 
              <ListItem key={index} divider>
                <ListItemText primary={item.product} secondary={item.amount}>
                </ListItemText>
              </ListItem>
            )
          }
        </List>
      </Container>
    </>
  )
}

export default App
