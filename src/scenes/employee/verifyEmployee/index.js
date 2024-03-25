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
                <Header title='BẢNG GIÁ' subtitle='Trang quản lý bảng giá' />
                <Button
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                    }}
                    onClick={handleOpenAddPrice}
                >
                    <GroupAddIcon sx={{ mr: '10px' }} />
                    THÊM ƯU ĐÃI
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
