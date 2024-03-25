import React, { useEffect, useState } from 'react'
import {
    Box,
    Typography,
    useTheme,
    IconButton,
    Button,
    Tooltip,
    Modal,
} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../../theme'
import { dataCompetence } from '../../../data/mockData'
import Header from '../../../components/Header'
import { useDispatch } from 'react-redux'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import Pie from '../../pie'

const Competence = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [data, setData] = useState(null)
    const [dataUsers, setDataUsers] = useState([])
    const [pageSize, setPageSize] = useState(10)
    const [openChart, setOpenChart] = useState(false)
    const [dataRow, setDataRow] = useState({})
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpenEdit = (row) => {
        setOpenEdit(true)
        setData(row)
    }

    const columns = [
        {
            field: 'name',
            headerName: 'Tên nhân viên',
            cellClassName: 'name-column--cell',
            flex: 1,
            minWidth: 300,
        },
        {
            field: 'level',
            headerName: 'Level',
            flex: 1,
            minWidth: 100,
        },
        {
            field: 'rating',
            headerName: 'Đánh giá',
            flex: 1,
            minWidth: 100,
        },
        {
            field: 'completedTask',
            headerName: 'Đơn thành công',
            flex: 1,
            minWidth: 100,
        },
        {
            field: 'failedTask',
            headerName: 'Đơn thất bại',
            // headerAlign: 'left',
            // align: 'left',
            flex: 1,
            minWidth: 100,
        },
        {
            field: 'cancelledTask',
            headerName: 'Đơn huỷ',
            flex: 1,
            minWidth: 100,
        },
        {
            field: 'chart',
            headerName: 'Biểu đồ',
            flex: 1,
            renderCell: ({ row }) => (
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    gap={1}
                >
                    <Tooltip
                        title='Mở biểu đồ'
                        arrow
                        slotProps={{
                            popper: {
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, -5],
                                        },
                                    },
                                ],
                            },
                        }}
                    >
                        <IconButton
                            color='default'
                            onClick={() => handleOpenChart(row)}
                        >
                            <PieChartOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            ),
        },
    ]

    const handleOpenChart = (row) => {
        setDataRow(row)
        setOpenChart(true)
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
                    title='QUẢN LÝ NĂNG LỰC'
                    subtitle='Trang quản lý năng lực'
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
                    rows={dataCompetence}
                    columns={columns}
                    pageSize={pageSize}
                    initialState={{
                        ...dataCompetence.initialState,
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    pagination
                    slots={{ toolbar: GridToolbar }}
                    onPageSizeChange={handlePageSizeChange}
                />
            </Box>
            <Modal
                open={openChart}
                onClose={() => setOpenChart(false)}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                style={{ backdropFilter: 'blur(5px)' }}
            >
                <Box
                    sx={{
                        borderRadius: '5px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 700,
                        // height: '80vh',
                        bgcolor:
                            theme.palette.mode === 'dark'
                                ? '#1F2A40'
                                : '#e0e0e0',
                        border: '1px solid rgba(0, 0, 0, 0.1) 0px 4px 12px',
                        boxShadow: 24,
                        '& .css-1lybvg8-MuiButtonBase-root-MuiButton-root:hover':
                            {
                                bgcolor: '#ffffff4d',
                            },
                    }}
                >
                    <Pie data={dataRow} />
                </Box>
            </Modal>
        </Box>
    )
}

export default Competence
