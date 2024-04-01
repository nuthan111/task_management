import './productList.scss'
import { useState } from 'react'
import { DeleteOutline } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import { productRows } from '../../dummydata'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [data, setData] = useState(productRows)

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'product',
      headerName: 'Product',
      width: 220,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img src={params.row.img} alt='' className='productListImg' />
            {params.row.name}
          </div>
        )
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='productListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]
  return (
    <div className='productList'>
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList
