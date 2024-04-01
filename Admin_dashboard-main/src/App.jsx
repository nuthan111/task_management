import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topBar/Topbar'
import './app.scss'
import Home from './pages/home/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './pages/userlist/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
const App = () => {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />

          {/* Users */}
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />

          {/* Products */}
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newProduct' element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
