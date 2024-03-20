import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
    Modal,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockCompanyData } from '../../data/mockData'
import Header from '../../components/Header'
import EditIcon from '@mui/icons-material/Edit'
import ModalAdd from '../../components/modal/modalWorkflow/ModalAdd'
import ModalEdit from '../../components/modal/modalWorkflow/ModalEdit'
import VerifiedIcon from '@mui/icons-material/Verified'

const NewOrder = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [data, setData] = useState(null)
    const [pageSize, setPageSize] = useState(10)
    const [openEdit, setOpenEdit] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)

    const navigate = useNavigate()

    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'name',
            headerName: 'Tên công việc',
            flex: 1,
            cellClassName: 'name-column--cell',
        },
        {
            field: 'createDate',
            headerName: 'Thời gian',
            flex: 1,
        },
        {
            field: 'address',
            headerName: 'Địa điểm',
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
                    <Tooltip title='Xác thực'>
                        <IconButton
                            color='secondary'
                            aria-label='edit'
                            sx={{ fontSize: '40px' }}
                            onClick={() => navigate('/workflow-management')}
                        >
                            <VerifiedIcon fontSize='40px' />
                        </IconButton>
                    </Tooltip>
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
                <Header
                    title='ĐƠN HÀNG MỚI'
                    subtitle='Trang cập nhật đơn hàng mới'
                />
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
                    rows={mockCompanyData}
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

export default NewOrder
