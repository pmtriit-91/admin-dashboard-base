import { useState } from 'react'
import {
    Box,
    Typography,
    useTheme,
    IconButton,
    Popover,
    Button,
    Tooltip,
    Table,
    TableCell,
    TableHead,
    TableBody,
    TableRow,
} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataWork, mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'
import EditIcon from '@mui/icons-material/Edit'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AddIcon from '@mui/icons-material/Add'
import ModalAdd from '../../components/modal/modalWorkflow/ModalAdd'
import ModalEdit from '../../components/modal/modalWorkflow/ModalEdit'
import PortraitIcon from '@mui/icons-material/Portrait'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const Workflow = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [data, setData] = useState(null)
    const [pageSize, setPageSize] = useState(10)
    const [openEdit, setOpenEdit] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)

    //show box gán nhân viên
    const [openBoxAsignEmployee, setOpenBoxAsignEmployee] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'name',
            headerName: 'Job Name',
            flex: 1,
            cellClassName: 'name-column--cell',
        },
        {
            field: 'cost',
            headerName: 'Cost/1h',
            flex: 1,
            renderCell: (params) => {
                return <Typography>${params.row.cost}</Typography>
            },
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
        },
        {
            field: 'jobType',
            headerName: 'Job Type',
            flex: 1,
        },

        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
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
                    <Tooltip title='chỉnh sửa'>
                        <IconButton
                            // onClick={() => handleEdit(row.id)}
                            onClick={() => handleOpenEdit(row)}
                            color='secondary'
                            aria-label='edit'
                        >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='gán nhân viên'>
                        <IconButton
                            onClick={(e) => handleOpenBoxAsignEmployee(row, e)}
                            color='secondary'
                            aria-label='edit'
                        >
                            <PortraitIcon />
                        </IconButton>
                    </Tooltip>
                    <PopoverBoxAsignEmployee />
                    <Tooltip title='chi tiết'>
                        <IconButton
                            // onClick={() => handleEdit(row.id)}
                            onClick={() => handleOpenEdit(row)}
                            color='secondary'
                            aria-label='edit'
                        >
                            <MoreHorizIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            ),
        },
    ]

    const PopoverBoxAsignEmployee = () => {
        return (
            <Popover
                open={openBoxAsignEmployee}
                anchorEl={anchorEl}
                onClose={handleCloseBoxAsignEmployee}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{
                    '& .css-3bmhjh-MuiPaper-root-MuiPopover-paper': {
                        boxShadow: 'rgba(149, 152, 165, 0.2) 2px 2px 2px',
                    },
                    '& .css-jx6v87-MuiPaper-root-MuiPopover-paper': {
                        border: '1px solid',
                        boxShadow: 'none',
                    },
                    '& .css-l44o5j-MuiButtonBase-root-MuiButton-root:hover': {
                        bgcolor: '#ffffff4d',
                    },
                }}
            >
                <Box p='20px' sx={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableCell
                                sx={{
                                    color: colors.greenAccent[400],
                                    fontWeight: 600,
                                    paddingTop: 0,
                                }}
                            >
                                Danh sách nhân viên
                            </TableCell>
                        </TableHead>
                        <TableBody>
                            {mockDataContacts.map((employee) => {
                                console.log(employee.name)
                                return (
                                    <TableRow
                                        key={employee.id}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                { border: 0 },
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <TableCell component='th' scope='row'>
                                            {employee.name}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </Popover>
        )
    }

    const handleOpenBoxAsignEmployee = (row, event) => {
        setOpenBoxAsignEmployee(true)
        setAnchorEl(event.currentTarget)
    }

    const handleCloseBoxAsignEmployee = () => {
        setOpenBoxAsignEmployee(false)
        setAnchorEl(null)
    }

    const handleOpenEdit = (row) => {
        setOpenEdit(true)
        setData(row)
    }

    const handleOpenModalAddUser = () => {
        setOpenAdd(true)
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
                <Header
                    title='WORKFLOW MANAGEMENT'
                    subtitle='Work management page'
                />
                <Button
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                    }}
                    onClick={handleOpenModalAddUser}
                >
                    <AddIcon sx={{ mr: '10px' }} />
                    ADD NEW JOB
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
                    '& .MuiDataGrid-footerContainer.css-n830jf-MuiDataGrid-footerContainer':
                        {
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                        },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataWork}
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
            ></ModalEdit>
        </Box>
    )
}

export default Workflow
