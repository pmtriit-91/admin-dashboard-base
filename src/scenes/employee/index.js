import { useState } from 'react'
import {
    Box,
    useTheme,
    Button,
    IconButton,
    Typography,
    Popover,
} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import ModalAdd from '../../components/modal/modalMembers/ModalAdd'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ModalEdit from '../../components/modal/ModalEdit'

const Employee = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [data, setData] = useState(null)
    const [openEdit, setOpenEdit] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)
    const [pageSize, setPageSize] = useState(10)
    const [openDelete, setOpenDelete] = useState(false)
    const [idRowDelete, setIdRowDelete] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null)

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 200,
            cellClassName: 'name-column--cell',
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'Number',
            headerAlign: 'left',
            align: 'left',
            width: 50,
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
            minWidth: 100,
        },
        {
            field: 'address',
            headerName: 'Address',
            flex: 1,
            minWidth: 300,
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1,
            minWidth: 100,
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            minWidth: 100,
            renderCell: ({ row }) => {
                return (
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='flex-start'
                        gap={1}
                        width='100%'
                        sx={{ cursor: 'default' }}
                    >
                        {row.status === 'idle' ? (
                            <Box
                                textAlign='center'
                                fontWeight='600'
                                borderRadius='4px'
                                padding='5px'
                                width='50%'
                                bgcolor='green'
                                color='#e0e0e0'
                            >
                                {row.status}
                            </Box>
                        ) : (
                            <Box
                                textAlign='center'
                                fontWeight='600'
                                borderRadius='4px'
                                padding='5px'
                                width='50%'
                                bgcolor='red'
                                color='#e0e0e0'
                            >
                                {row.status}
                            </Box>
                        )}
                    </Box>
                )
            },
        },
        {
            field: 'action',
            headerName: 'Actions',
            flex: 1,
            minWidth: 100,
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
                        onClick={() => handleOpenEdit(row)}
                        color='secondary'
                        aria-label='edit'
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        onClick={(event) => handleDelete(row.id, event)}
                        aria-label='delete'
                    >
                        <DeleteIcon />
                    </IconButton>
                    <Popover
                        id={idRowDelete}
                        open={openDelete}
                        anchorEl={anchorEl}
                        onClose={handleCloseDelete}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        sx={{
                            '& .css-3bmhjh-MuiPaper-root-MuiPopover-paper': {
                                boxShadow:
                                    'rgba(149, 152, 165, 0.2) 2px 2px 2px',
                            },
                            '& .css-jx6v87-MuiPaper-root-MuiPopover-paper': {
                                border: '1px solid',
                                boxShadow: 'none',
                            },
                            '& .css-l44o5j-MuiButtonBase-root-MuiButton-root:hover':
                                {
                                    bgcolor: '#ffffff4d',
                                },
                        }}
                    >
                        <Box p={2}>
                            <Typography>
                                Are you sure you want to delete this item?
                            </Typography>
                            <Box
                                marginTop='10px'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <Button
                                    size='small'
                                    variant='contained'
                                    color='error'
                                    onClick={handleConfirmDelete}
                                    sx={{
                                        marginRight: '10px',
                                        fontWeight: 600,
                                    }}
                                >
                                    OK
                                </Button>
                                <Button
                                    size='small'
                                    onClick={handleCloseDelete}
                                    variant='outlined'
                                    sx={{
                                        bgcolor:
                                            theme.palette.mode === 'dark'
                                                ? colors.grey[100]
                                                : '',
                                    }}
                                >
                                    Cancel
                                </Button>
                            </Box>
                        </Box>
                    </Popover>
                </Box>
            ),
        },
    ]

    const handleOpenEdit = (row) => {
        setOpenEdit(true)
        setData(row)
    }

    const handleOpenModalAddMember = () => {
        setOpenAdd(true)
    }

    const handleDelete = (id, event) => {
        // console.log(`Delete clicked for id: ${id}`)
        setOpenDelete(true)
        setIdRowDelete(id)
        setAnchorEl(event.currentTarget)
    }

    const handleCloseDelete = () => {
        setOpenDelete(false)
        setAnchorEl(null)
    }

    const handleConfirmDelete = () => {
        console.log('delete')
        setOpenDelete(false)
        setAnchorEl(null)
    }

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
                <Header title='NHÂN VIÊN' subtitle='Trang quản lý nhân viên' />
                <Button
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                    }}
                    onClick={handleOpenModalAddMember}
                >
                    <GroupAddIcon sx={{ mr: '10px' }} />
                    THÊM NHÂN VIÊN
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
                    rows={mockDataContacts}
                    columns={columns}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    components={{ Toolbar: GridToolbar }}
                    onPageSizeChange={handlePageSizeChange}
                />
            </Box>
            <ModalAdd open={openAdd} setOpen={setOpenAdd}></ModalAdd>
            <ModalEdit
                open={openEdit}
                setOpen={setOpenEdit}
                data={data}
                modalOf={'employee'}
            ></ModalEdit>
        </Box>
    )
}

export default Employee
