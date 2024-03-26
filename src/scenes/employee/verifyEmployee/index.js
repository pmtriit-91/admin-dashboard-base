import React, { useEffect, useState } from 'react'
import {
    Box,
    Typography,
    useTheme,
    IconButton,
    Button,
    TextField,
    Popover,
} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../../theme'
import { pricingData } from '../../../data/mockData'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Header from '../../../components/Header'
import { useDispatch } from 'react-redux'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import ModalEdit from '../../../components/modal/ModalEdit'
import ModalAdd from '../../../components/modal/ModalAdd'

const VerifyEmployee = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [data, setData] = useState(null)
    const [dataUsers, setDataUsers] = useState([])
    const [pageSize, setPageSize] = useState(10)
    const [openEdit, setOpenEdit] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [idRowDelete, setIdRowDelete] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpenEdit = (row) => {
        setOpenEdit(true)
        setData(row)
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'package',
            headerName: 'Tên gói',
            flex: 1,
            cellClassName: 'name-column--cell',
        },
        {
            field: 'price',
            headerName: 'Giá',
            flex: 1,
        },
        {
            field: 'discount',
            headerName: 'Khuyến mãi(%)',
            flex: 1,
        },
        {
            field: 'createDate',
            headerName: 'Ngày tạo',
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: 'action',
            headerName: 'Hành động',
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
                        onClick={() => handleOpenEdit(row)}
                        color='secondary'
                        aria-label='edit'
                    >
                        <EditIcon />
                    </IconButton>
                </Box>
            ),
        },
    ]

    const handleOpenAddPrice = () => {
        setOpenAdd(true)
    }

    const handlePageSizeChange = (newPageSize) => {
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
                    title='XÉT DUYỆT NGƯỜI LAO ĐỘNG'
                    subtitle='Trang xét duyệt người lao động'
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
                    '& .cost-column': { display: 'flex', alignItems: 'center' },
                    '& .status-column, .action-column': { display: 'flex' },
                    '& .MuiDataGrid-columnHeaders': {
                        background:
                            theme.palette.mode === 'dark'
                                ? 'linear-gradient(to right, #2b5876, #4e4376)'
                                : 'linear-gradient(to right, #b993d6, #8ca6db)',
                    },
                    '& .css-1essi2g-MuiDataGrid-columnHeaderRow': {
                        background: 'unset !important',
                    },
                    '& .css-jmgi9p::after': {
                        display: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        background:
                            theme.palette.mode === 'dark'
                                ? 'linear-gradient(to right, #2b5876, #4e4376)'
                                : 'linear-gradient(to right, #b993d6, #8ca6db)',
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                    },
                    '& .MuiCheckbox-root': {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${colors.grey[100]} !important`,
                    },
                    '& .css-1kwdphh-MuiDataGrid-virtualScrollerContent, .css-tgsonj':
                        {
                            borderLeft: '1px solid rgba(0, 0, 0, 0.15)',
                            borderRight: '1px solid rgba(0, 0, 0, 0.15)',
                        },
                }}
            >
                <DataGrid
                    rows={pricingData}
                    columns={columns}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    components={{ Toolbar: GridToolbar }}
                    onPageSizeChange={handlePageSizeChange}
                />
            </Box>
            <ModalEdit
                open={openEdit}
                setOpen={setOpenEdit}
                data={data}
                modalOf={'PriceList'}
            />
            <ModalAdd
                open={openAdd}
                setOpen={setOpenAdd}
                modalOf={'PriceList'}
            />
        </Box>
    )
}

export default VerifyEmployee
