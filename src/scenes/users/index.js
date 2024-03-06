import React, { useEffect, useState } from 'react'
import {
    Box,
    Typography,
    useTheme,
    IconButton,
    Button,
    TextField,
} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Header from '../../components/Header'
import ModalEdit from '../../components/ModalEdit'
import { useDispatch } from 'react-redux'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import GroupAddIcon from '@mui/icons-material/GroupAdd'

const Users = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [data, setData] = useState(null)
    const [dataUsers, setDataUsers] = useState([])
    const [pageSize, setPageSize] = useState(10)

    // const dispatch = useDispatch()
    useEffect(() => {
        fetch('/api/listUser')
            .then((res) => res.json())
            .then((res) => setDataUsers(res.users))
    }, [])

    const [open, setOpen] = useState(false)
    const handleOpen = (row) => {
        setOpen(true)
        setData(row)
    }

    // const handleDelete = (id) => {
    //     console.log(`Delete clicked for id: ${id}`)
    // }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: 'name-column--cell',
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'Number',
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Actions',
            flex: 1,
            sortable: false,
            renderCell: ({ row }) => (
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    gap={1}
                >
                    <IconButton
                        // onClick={() => handleEdit(row.id)}
                        onClick={() => handleOpen(row)}
                        color='secondary'
                        aria-label='edit'
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        // onClick={() => handleDelete(row.id)}
                        aria-label='delete'
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ),
        },
    ]

    const handlePageSizeChange = (newPageSize) => {
        console.log(`New page size: ${newPageSize}`)
        setPageSize(newPageSize)
    }

    return (
        <Box
            m='20px'
            sx={{
                '& .MuiTypography-root.MuiTypography-h2': {
                    margin: '0 0 5px 0',
                },
            }}
        >
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Header title='USERS' subtitle='Managin the Users' />
                <Button
                    size='small'
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                    }}
                >
                    <GroupAddIcon sx={{ mr: '10px' }} />
                    ADD NEW USER
                </Button>
            </Box>
            <Box
                height='75vh'
                m='40px 0 0 0'
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: 'none',
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[300],
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: colors.blueAccent[700],
                    },
                    '& .MuiCheckbox-root': {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${colors.grey[100]} !important`,
                    },
                    '& .MuiDataGrid-footerContainer.css-n830jf-MuiDataGrid-footerContainer':
                        {
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                        },
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    components={{ Toolbar: GridToolbar }}
                    onPageSizeChange={handlePageSizeChange}
                />
            </Box>
            <ModalEdit open={open} setOpen={setOpen} data={data} />
        </Box>
    )
}

export default Users
