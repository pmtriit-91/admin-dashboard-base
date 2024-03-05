import React, { useState } from 'react'
import {
    Box,
    Typography,
    useTheme,
    IconButton,
    Button,
    TextField,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Header from '../../components/Header'
import ModalEdit from '../../components/ModalEdit'

const Team = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [data, setData] = useState(null)

    const [open, setOpen] = React.useState(false)
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

    return (
        <Box
            m='20px'
            sx={{
                '& .MuiTypography-root.MuiTypography-h2': {
                    margin: '0 0 5px 0',
                },
            }}
        >
            <Header title='TEAM' subtitle='Managin the Team Members' />
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
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    sortModel={[{ field: 'id', sort: 'asc' }]}
                />
            </Box>
            <ModalEdit open={open} setOpen={setOpen} data={data} />
        </Box>
    )
}

export default Team
