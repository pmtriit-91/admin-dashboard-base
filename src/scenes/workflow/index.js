import { useState, useRef, useEffect } from 'react'
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
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataOrder, mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'
import EditIcon from '@mui/icons-material/Edit'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AddIcon from '@mui/icons-material/Add'
import ModalAdd from '../../components/modal/modalWorkflow/ModalAdd'
import ModalEdit from '../../components/modal/modalWorkflow/ModalEdit'
import PortraitIcon from '@mui/icons-material/Portrait'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import DeleteIcon from '@mui/icons-material/Delete'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
import { ClickAwayListener } from '@mui/base/ClickAwayListener'

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

    //modal details
    const [detailsAnchorEl, setDetailsAnchorEl] = useState(null)

    const handleOpenDetailsModal = (row, event) => {
        setDetailsAnchorEl(event.currentTarget)
    }

    const ModalDetails = () => {
        return (
            <Modal
                open={Boolean(detailsAnchorEl)}
                onClose={() => setDetailsAnchorEl(false)}
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
                        bgcolor:
                            theme.palette.mode === 'dark'
                                ? '#1F2A40'
                                : '#e0e0e0',
                        border: '1px solid rgba(0, 0, 0, 0.1) 0px 4px 12px',
                        boxShadow: 24,
                        p: 4,
                        '& .css-1lybvg8-MuiButtonBase-root-MuiButton-root:hover':
                            {
                                bgcolor: '#ffffff4d',
                            },
                    }}
                >
                    <Typography variant='h4' color={colors.grey[100]}>
                        CHI TIẾT ĐƠN HÀNG
                    </Typography>
                    <Box
                        id='modal-modal-description'
                        sx={{
                            mt: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '70%' },
                                display: 'flex',
                                // justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            noValidate
                            autoComplete='off'
                        >
                            <Box display='flex' alignItems='end' gap='20px'>
                                <Typography variant='h5' fontWeight='600'>
                                    Đơn hàng:
                                </Typography>
                                <Typography
                                    color={colors.greenAccent[400]}
                                    fontWeight='600'
                                >
                                    Chăm sóc người già
                                </Typography>
                            </Box>
                            <Box display='flex' alignItems='end' gap='20px'>
                                <Typography variant='h5' fontWeight='600'>
                                    Khách hàng:
                                </Typography>
                                <Typography
                                    color={colors.greenAccent[400]}
                                    fontWeight='600'
                                >
                                    Lê Thị Bông Gấm
                                </Typography>
                            </Box>
                            <Box display='flex' alignItems='end' gap='20px'>
                                <Typography variant='h5' fontWeight='600'>
                                    Số điện thoại:
                                </Typography>
                                <Typography
                                    color={colors.greenAccent[400]}
                                    fontWeight='600'
                                >
                                    0912.123.458
                                </Typography>
                            </Box>
                            <Box display='flex' alignItems='end' gap='20px'>
                                <Typography
                                    flex='1 0 auto'
                                    variant='h5'
                                    fontWeight='600'
                                    alignSelf='flex-start'
                                >
                                    Địa chỉ:
                                </Typography>
                                <Typography
                                    color={colors.greenAccent[400]}
                                    fontWeight='600'
                                >
                                    22 Nguyễn Huệ, Phường Phú Hội, Thành Phố Huế
                                </Typography>
                            </Box>
                            {/* <Box display='flex' alignItems='end' gap='20px'>
                                <Typography variant='h5' fontWeight='600'>
                                    Thời gian:
                                </Typography>
                                <Typography
                                    color={colors.greenAccent[400]}
                                    fontWeight='600'
                                >
                                    23h-1h
                                </Typography>
                            </Box> */}
                            <Box display='flex' alignItems='end' gap='20px'>
                                <Typography
                                    flex='1 0 auto'
                                    variant='h5'
                                    fontWeight='600'
                                    alignSelf='flex-start'
                                >
                                    Lưu ý:
                                </Typography>
                                <Typography
                                    color={colors.greenAccent[400]}
                                    fontWeight='600'
                                >
                                    Mang theo dụng cụ 'xe lu' để ủi quẩn áo, vui
                                    lòng bật nhạc Rách 5 củ để chủ nhà vui vẻ
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box display='flex' alignItems='end' gap='20px'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component='img'
                                            height='140'
                                            image={`${process.env.PUBLIC_URL}/assets/user.jpeg`}
                                            alt='green iguana'
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant='h5'
                                                component='div'
                                            >
                                                Trí Đấm Bóp
                                            </Typography>
                                            <Typography
                                                variant='body2'
                                                color='text.secondary'
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles, with over
                                                6,000 species, ranging across
                                                all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        )
    }

    //add ten class cho column
    const getRowClassName = (params) => {
        switch (params.row.status) {
            case 'đã huỷ':
                return 'cancelled-row' // Đặt lớp CSS cho các hàng đã huỷ
            case 'chờ giao nhân viên':
                return 'pending-row' // Đặt lớp CSS cho các hàng chờ giao nhân viên
            case 'đã hoàn thành':
                return 'completed-row' // Đặt lớp CSS cho các hàng đã hoàn thành
            default:
                return '' // Trả về lớp CSS mặc định nếu không phải các trường hợp trên
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'name',
            headerName: 'Job Name',
            maxWidth: 300,
            flex: 1,
            cellClassName: 'name-column--cell',
        },
        // {
        //     field: 'jobType',
        //     headerName: 'Job Type',
        //     flex: 0,
        // },
        {
            field: 'cost',
            headerName: 'Cost',
            maxWidth: 200,
            flex: 1,
            cellClassName: 'cost-column',
            renderCell: (params) => {
                return <Typography>${params.row.cost}</Typography>
            },
        },
        {
            field: 'date',
            headerName: 'Date',
            maxWidth: 200,
            flex: 1,
        },
        {
            field: 'address',
            headerName: 'Địa điểm',
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
            minWidth: 200,
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
                    <Tooltip title='xoá'>
                        <IconButton color='error'>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='chi tiết'>
                        <IconButton
                            // onClick={() => handleEdit(row.id)}
                            onClick={(e) => handleOpenDetailsModal(row, e)}
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
        // const inputRef = useRef(null)
        const [name, setName] = useState('')
        // const columns = [
        //     { field: 'name', headerName: 'Tên nhân viên', flex: 1 },
        // ]
        // useEffect(() => {
        //     const timeout = setTimeout(() => {
        //         if (openBoxAsignEmployee && inputRef.current) {
        //             inputRef.current.focus()
        //         }
        //     }, 0)

        //     return () => clearTimeout(timeout)
        // }, [openBoxAsignEmployee])

        const handleChangeEmployee = (e) => {
            setName(e.target.value)
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            setOpenBoxAsignEmployee(false)
        }

        return (
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleCloseBoxAsignEmployee}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
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
                    '& .MuiBox-root': { bgcolor: colors.primary[400] },
                }}
            >
                <Box
                    p='20px'
                    sx={{
                        '& .css-y3n1jv-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: colors.grey[100],
                                borderWidth: '1px',
                            },
                        '& .css-75gcxd-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                            {
                                color: colors.grey[100],
                            },
                        '& .css-1sw3p5j-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: colors.grey[100],
                                borderWidth: '1px',
                            },
                        '& .css-kc02vp-MuiPaper-root-MuiPopover-paper-MuiMenu-paper':
                            {
                                maxHeight: 200,
                            },
                    }}
                >
                    <Typography
                        variant='h5'
                        marginBottom='10px'
                        color={colors.greenAccent[500]}
                    >
                        Danh sách nhân viên
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ m: 1, width: 220 }} size='medium'>
                            <InputLabel id='demo-select-small-label'>
                                Tên nhân viên
                            </InputLabel>
                            <Select
                                labelId='demo-select-small-label'
                                id='demo-select-small'
                                value={name}
                                label='Tên nhân viên'
                                onChange={handleChangeEmployee}
                                MenuProps={{
                                    PaperProps: { sx: { maxHeight: 300 } },
                                }}
                            >
                                {mockDataContacts.map((elm) => {
                                    return (
                                        <MenuItem key={elm.id} value={elm.name}>
                                            {elm.name}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                            <Box
                                marginTop='10px'
                                display='flex'
                                justifyContent='flex-end'
                            >
                                <Button
                                    variant='contained'
                                    type='submit'
                                    size='small'
                                    color='success'
                                    sx={{
                                        fontWeight: 600,
                                        color: 'white',
                                    }}
                                    // onClick={handleSubmit}
                                >
                                    Chọn
                                </Button>
                                <Button
                                    variant='text'
                                    sx={{
                                        color: colors.grey[100],
                                    }}
                                    onClick={handleCloseBoxAsignEmployee}
                                >
                                    Huỷ
                                </Button>
                            </Box>
                        </FormControl>
                    </form>
                </Box>
            </Popover>
            // <Popover
            //     open={openBoxAsignEmployee}
            //     anchorEl={anchorEl}
            //     onClose={handleCloseBoxAsignEmployee}
            //     anchorOrigin={{
            //         vertical: 'center',
            //         horizontal: 'center',
            //     }}
            //     transformOrigin={{
            //         vertical: 'top',
            //         horizontal: 'right',
            //     }}
            //     sx={{
            //         '& .css-3bmhjh-MuiPaper-root-MuiPopover-paper': {
            //             boxShadow: 'rgba(149, 152, 165, 0.2) 2px 2px 2px',
            //         },
            //         '& .css-jx6v87-MuiPaper-root-MuiPopover-paper': {
            //             border: '1px solid',
            //             boxShadow: 'none',
            //         },
            //         '& .css-l44o5j-MuiButtonBase-root-MuiButton-root:hover': {
            //             bgcolor: '#ffffff4d',
            //         },
            //         '& .MuiBox-root': { bgcolor: colors.primary[400] },
            //     }}
            // >
            //     <Box p='20px'>
            //         <Typography variant='h5' color={colors.greenAccent[500]}>
            //             Danh sách nhân viên
            //         </Typography>
            //         <Autocomplete
            //             // id='highlights-demo'
            //             sx={{ width: '300px' }}
            //             options={mockDataContacts}
            //             getOptionLabel={(option) => option.name}
            //             renderInput={(params) => {
            //                 return (
            //                     <TextField
            //                         {...params}
            //                         label='Tìm kiếm nhân viên'
            //                         margin='normal'
            //                         variant='outlined'
            //                         sx={{
            //                             '& .css-75gcxd-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
            //                                 {
            //                                     color: '#ffffff4d',
            //                                 },
            //                         }}
            //                         inputRef={inputRef}
            //                     />
            //                 )
            //             }}
            //             renderOption={(props, option, { inputValue }) => {
            //                 const matches = match(option.name, inputValue, {
            //                     insideWords: true,
            //                 })
            //                 const parts = parse(option.name, matches)

            //                 return (
            //                     <li {...props}>
            //                         <div>
            //                             {parts.map((part, index) => (
            //                                 <span
            //                                     key={index}
            //                                     style={{
            //                                         fontWeight: part.highlight
            //                                             ? 700
            //                                             : 400,
            //                                         color: part.highlight
            //                                             ? colors
            //                                                   .greenAccent[500]
            //                                             : colors.grey[100],
            //                                     }}
            //                                 >
            //                                     {part.text}
            //                                 </span>
            //                             ))}
            //                         </div>
            //                     </li>
            //                 )
            //             }}
            //         />
            //     </Box>
            // </Popover>

            // <Popover
            //     open={openBoxAsignEmployee}
            //     anchorEl={anchorEl}
            //     onClose={handleCloseBoxAsignEmployee}
            //     anchorOrigin={{
            //         vertical: 'center',
            //         horizontal: 'center',
            //     }}
            //     transformOrigin={{
            //         vertical: 'top',
            //         horizontal: 'right',
            //     }}
            //     sx={{
            //         '& .css-3bmhjh-MuiPaper-root-MuiPopover-paper': {
            //             boxShadow: 'rgba(149, 152, 165, 0.2) 2px 2px 2px',
            //         },
            //         '& .css-jx6v87-MuiPaper-root-MuiPopover-paper': {
            //             border: '1px solid',
            //             boxShadow: 'none',
            //         },
            //         '& .css-l44o5j-MuiButtonBase-root-MuiButton-root:hover': {
            //             bgcolor: '#ffffff4d',
            //         },
            //     }}
            // >
            //     <Box p='20px' sx={{ maxHeight: '300px', overflowY: 'auto' }}>
            //         <DataGrid
            //             columns={columns}
            //             rows={mockDataContacts}
            //             pageSize={5}
            //             autoHeight
            //         />
            //         <Table>
            //             <TableHead>
            //                 <TableCell
            //                     sx={{
            //                         color: colors.greenAccent[400],
            //                         fontWeight: 600,
            //                         paddingTop: 0,
            //                     }}
            //                 >
            //                     Danh sách nhân viên
            //                 </TableCell>
            //             </TableHead>
            //             <TableBody>
            //                 {mockDataContacts.map((employee) => {
            //                     console.log(employee.name)
            //                     return (
            //                         <TableRow
            //                             key={employee.id}
            //                             sx={{
            //                                 '&:last-child td, &:last-child th':
            //                                     { border: 0 },
            //                                 cursor: 'pointer',
            //                             }}
            //                         >
            //                             <TableCell component='th' scope='row'>
            //                                 {employee.name}
            //                             </TableCell>
            //                         </TableRow>
            //                     )
            //                 })}
            //             </TableBody>
            //         </Table>
            //     </Box>
            // </Popover>
        )
    }

    const handleOpenBoxAsignEmployee = (row, event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseBoxAsignEmployee = () => {
        setAnchorEl(null)
    }

    const handleOpenEdit = (row) => {
        setOpenEdit(true)
        setData(row)
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
                    title='QUẢN LÝ ĐƠN HÀNG'
                    subtitle='Trang quản lý đơn hàng'
                />
                {/* <Button
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
                    THÊM
                </Button> */}
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
                    rows={mockDataOrder}
                    columns={columns}
                    pageSize={pageSize}
                    initialState={{
                        ...mockDataOrder.initialState,
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    pagination
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                    onPageSizeChange={handlePageSizeChange}
                    getRowClassName={getRowClassName}
                    sx={{
                        '& .cancelled-row': {
                            background:
                                theme.palette.mode === 'dark'
                                    ? 'linear-gradient(to right, #200122, #6f0000)'
                                    : 'linear-gradient(to right, #ffc6b9, #feb47b)',
                            '&:hover': {
                                background:
                                    theme.palette.mode === 'dark'
                                        ? 'linear-gradient(to right, #641325, #960808)'
                                        : 'linear-gradient(to right, #ffd5c7, #ffedbc)',
                            },
                        },
                        '& .pending-row': {
                            background:
                                theme.palette.mode === 'dark'
                                    ? 'linear-gradient(to right, #172e1d, #19413a)'
                                    : 'linear-gradient(to right, #b4f3bb, #a3e0ff)',
                            '&:hover': {
                                background:
                                    theme.palette.mode === 'dark'
                                        ? 'linear-gradient(to right, #275433, #194d44)'
                                        : 'linear-gradient(to right, #d7fddc, #d1efff)',
                            },
                        },
                    }}
                />
            </Box>
            <ModalAdd open={openAdd} setOpen={setOpenAdd}></ModalAdd>
            <ModalEdit
                open={openEdit}
                setOpen={setOpenEdit}
                data={data}
            ></ModalEdit>
            {ModalDetails()}
        </Box>
    )
}

export default Workflow
