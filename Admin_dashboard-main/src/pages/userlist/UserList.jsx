/* eslint-disable no-unused-vars */
import './userList.scss'
import { useState } from 'react'
import { DeleteOutline } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { userRows } from '../../dummydata'
// import PropTypes from 'prop-types'

const UserList = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 220,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt='' className='userListImg' />
            {params.row.username}
          </div>
        )
      },
    },
    { field: 'email', headerName: 'email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className='userList'>
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

UserList.propTypes = {}
export default UserList
