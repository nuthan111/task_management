import './product.scss'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummydata'
import { Publish } from '@mui/icons-material'
const Product = () => {
  return (
    <div className='product'>
      <div className='productTitileContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://www.businessinsider.in/photo/88898120/sony-wf-1000xm4-tws-earbuds-review.jpg?imgsize=65900'
              alt=''
              className='productInfoImg'
            />
            <span className='productName'>WF-1000XM4</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales</span>
              <span className='productInfoValue'>500</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label htmlFor=''>Product Name</label>
            <input type='text' placeholder='WF-1000XM4' />

            <label htmlFor=''>In Stock</label>
            <select name='instock' id='instock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>

            <label htmlFor=''>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='https://www.businessinsider.in/photo/88898120/sony-wf-1000xm4-tws-earbuds-review.jpg?imgsize=65900'
                alt=''
                className='productUploadImg'
              />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
