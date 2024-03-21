import React, { useEffect, useState } from 'react'
import {
    Box,
    Typography,
    useTheme,
    IconButton,
    Button,
    Popover,
    Tooltip,
    TextField,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    ListItemAvatar,
    Checkbox,
    Avatar,
    Menu,
    MenuItem,
} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockCompanyData } from '../../data/mockData'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Header from '../../components/Header'
import { useDispatch } from 'react-redux'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import ModalEdit from '../../components/modal/ModalEdit'
import ModalAdd from '../../components/modal/ModalAdd'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import CommentIcon from '@mui/icons-material/Comment'
import useMediaQuery from '@mui/material/useMediaQuery'

const CompanyManagement = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [data, setData] = useState(null)
    const [dataUsers, setDataUsers] = useState([])
    const [pageSize, setPageSize] = useState(5)
    const [openEdit, setOpenEdit] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [idRowDelete, setIdRowDelete] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorElService, setAnchorElService] = useState(null)

    //add ten class cho column
    const getRowClassName = (params) => {
        console.log({ params })
        switch (params.row.status) {
            case 'Đã thanh toán':
                return 'paid'
            case 'Chưa thanh toán':
                return 'pending-pay'
            default:
                return ''
        }
    }

    //media query
    const matches = useMediaQuery('(min-width:900px)')

    //checked
    const [checked, setChecked] = React.useState([null])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    //service
    const handleOpenService = (event) => {
        console.log('aaa')
        setAnchorElService(event.currentTarget)
    }

    const handleCloseService = () => {
        setAnchorElService(null)
    }

    //edit
    const handleOpenEdit = (row) => {
        setOpenEdit(true)
        setData(row)
    }

    //delete
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

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 20,
        },
        {
            field: 'name',
            headerName: 'Tên công ty',
            flex: 1,
            cellClassName: 'name-column--cell',
        },
        {
            field: 'service',
            headerName: 'Kiểu Dịch vụ',
            flex: 1,
        },
        {
            field: 'phone',
            headerName: 'Điện thoại',
            flex: 1,
        },
        {
            field: 'address',
            headerName: 'Địa chỉ',
            flex: 1,
        },
        {
            field: 'createDate',
            headerName: 'Ngày tạo',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            flex: 1,
        },
        {
            field: 'action',
            headerName: 'Hành động',
            width: 150,
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
                    <Tooltip
                        title='Gán dịch vụ'
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
                        <IconButton color='default' onClick={handleOpenService}>
                            <MiscellaneousServicesIcon />
                        </IconButton>
                    </Tooltip>
                    <IconButton
                        onClick={(event) => handleDelete(row.id, event)}
                        aria-label='delete'
                        color='error'
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
                // alignItems='center'
                sx={{
                    flexDirection: matches ? 'row' : 'column',
                    alignItems: matches ? 'center' : 'flex-start',
                }}
            >
                <Header
                    title='QUẢN LÝ CÔNG TY'
                    subtitle='Trang quản lý công ty'
                />
                <Button
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                        marginTop: 1,
                    }}
                    onClick={handleOpenModalAddUser}
                >
                    <GroupAddIcon sx={{ mr: '10px' }} />
                    THÊM CÔNG TY
                </Button>
            </Box>
            <Box
                height={matches ? '75vh' : '100%'}
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
                    rows={mockCompanyData}
                    columns={columns}
                    pageSize={pageSize}
                    initialState={{
                        ...mockCompanyData.initialState,
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    pagination
                    slots={{ toolbar: GridToolbar }}
                    onPageSizeChange={handlePageSizeChange}
                    getRowClassName={getRowClassName}
                    sx={{
                        '& .pending-pay': {
                            background:
                                // 'linear-gradient(to right, #fd746c, #ff9068)',
                                theme.palette.mode === 'dark'
                                    ? 'linear-gradient(to right, #200122, #6f0000)'
                                    : 'linear-gradient(to right, #fd746c, #ff9068)',
                            '&:hover': {
                                bgcolor: colors.redAccent[900],
                            },
                        },
                        '& .css-bvbdia-MuiTablePagination-root .MuiTablePagination-input':
                            {
                                display: 'flex',
                            },
                    }}
                />
            </Box>
            <ModalEdit
                open={openEdit}
                setOpen={setOpenEdit}
                data={data}
                modalOf={'companyManagement'}
            />
            <ModalAdd
                open={openAdd}
                setOpen={setOpenAdd}
                modalOf={'companyManagement'}
            />
            <Popover
                open={Boolean(anchorElService)}
                onClose={handleCloseService}
                anchorEl={anchorElService}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Box>
                    <Typography
                        variant='h5'
                        bgcolor={colors.primary[400]}
                        color={colors.grey[100]}
                        p='10px 20px'
                        fontWeight='600'
                    >
                        Danh sách dịch vụ
                    </Typography>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: colors.primary[500],
                        }}
                    >
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`

                            return (
                                <ListItem
                                    key={value}
                                    secondaryAction={
                                        <IconButton
                                            edge='end'
                                            aria-label='comments'
                                        >
                                            <CommentIcon />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton
                                        role={undefined}
                                        onClick={handleToggle(value)}
                                        dense
                                    >
                                        <ListItemIcon>
                                            <Checkbox
                                                edge='start'
                                                checked={
                                                    checked.indexOf(value) !==
                                                    -1
                                                }
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                                color='secondary'
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            id={labelId}
                                            primary={`Line item ${value + 1}`}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                    <Box
                        bgcolor={colors.primary[400]}
                        display='flex'
                        justifyContent='flex-end'
                    >
                        <Button color='secondary' onClick={handleCloseService}>
                            Chọn
                        </Button>
                        <Button
                            sx={{
                                color: colors.grey[100],
                            }}
                        >
                            Huỷ
                        </Button>
                    </Box>
                </Box>
            </Popover>
        </Box>
    )
}

export default CompanyManagement
