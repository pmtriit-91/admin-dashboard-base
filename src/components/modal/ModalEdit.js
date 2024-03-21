import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function ModalEdit({ open, setOpen, data = {}, modalOf = '' }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const handleClose = () => setOpen(false)

    //media query
    const matches = useMediaQuery('(min-width:900px)')

    //user
    const [name, setName] = useState(data?.name || '')
    const [age, setAge] = useState(data?.age || '')
    const [phone, setPhone] = useState(data?.phone || '')
    const [email, setEmail] = useState(data?.email || '')

    //discount
    const [createDate, setCreateDate] = useState(data?.createDate || '')
    const [expiryDate, setExpiryDate] = useState(data?.expiryDate || '')
    const [statusDiscount, setStatusDiscount] = useState(data?.status || '')

    //employee
    const [address, setAddress] = useState(data?.address || '')
    const [city, setCity] = useState(data?.city || '')

    //CompanyManagement
    const [service, setService] = useState(data?.service || '')

    //service
    const [serviceGroup, setServiceGroup] = useState(data?.serviceGroup || '')
    const [serviceName, setServiceName] = useState(data?.serviceName || '')

    useEffect(() => {
        //set state users
        setName(data?.name || '')
        setAge(data?.age || '')
        setPhone(data?.phone || '')
        setEmail(data?.email || '')

        //set state discount
        setCreateDate(data?.createDate || '')
        setExpiryDate(data?.expiryDate || '')
        setStatusDiscount(data?.status || '')

        //set state employee
        setAddress(data?.address || '')
        setCity(data?.city || '')
    }, [data])

    //handle edit
    const handleSave = () => {
        console.log('Save clicked')
        setOpen(false)
    }

    // Render input
    const renderInputs = () => {
        switch (modalOf) {
            case 'discount':
                return (
                    <>
                        <TextField
                            id='outlined-basic'
                            label='Tên ưu đãi'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Ngày khởi tạo'
                            variant='outlined'
                            color='secondary'
                            value={createDate}
                            onChange={(e) => setCreateDate(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Hạn sử dụng'
                            variant='outlined'
                            color='secondary'
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Hạn sử dụng'
                            variant='outlined'
                            color='secondary'
                            value={statusDiscount}
                            onChange={(e) => setStatusDiscount(e.target.value)}
                        />
                    </>
                )
            case 'users':
                return (
                    <>
                        <TextField
                            id='outlined-basic'
                            label='Name'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Age'
                            variant='outlined'
                            color='secondary'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Phone'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Email'
                            variant='outlined'
                            color='secondary'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </>
                )
            case 'employee':
                return (
                    <>
                        <TextField
                            id='outlined-basic'
                            label='Employee Name'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Phone'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Employee Email'
                            variant='outlined'
                            color='secondary'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Adress'
                            variant='outlined'
                            color='secondary'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Age'
                            variant='outlined'
                            color='secondary'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='City'
                            variant='outlined'
                            color='secondary'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </>
                )
            case 'companyManagement':
                return (
                    <>
                        <TextField
                            id='outlined-basic'
                            label='Tên công ty'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Dịch vụ'
                            variant='outlined'
                            color='secondary'
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Số điện thoại'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Địa chỉ'
                            variant='outlined'
                            color='secondary'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Ngày tạo'
                            variant='outlined'
                            color='secondary'
                            value={createDate}
                            onChange={(e) => setCreateDate(e.target.value)}
                        />
                    </>
                )
            case 'service':
                return (
                    <>
                        {/* <TextField
                            id='outlined-basic'
                            label='Nhóm dịch vụ'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            value={serviceGroup}
                            onChange={(e) => setServiceGroup(e.target.value)}
                        /> */}
                        <TextField
                            id='outlined-basic'
                            label='Tên dịch vụ'
                            variant='outlined'
                            color='secondary'
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Ngày tạo'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            value={createDate}
                            onChange={(e) => setCreateDate(e.target.value)}
                        />
                    </>
                )
            default:
                return null
        }
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
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
                        width: matches ? 700 : '90vw',
                        height: matches ? 'auto' : '75vh',
                        overflowY: 'auto',
                        // bgcolor: 'background.paper',
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
                        '& .css-10ijh3j>:not(style)': {
                            width: matches ? 'inherit' : '100% !important',
                        },
                    }}
                >
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                        color={colors.grey[500]}
                    >
                        {modalOf === 'users'
                            ? 'CHỈNH SỬA THÔNG TIN NGƯỜI SỬ DỤNG'
                            : modalOf === 'discount'
                              ? 'CHỈNH SỬA ƯU ĐÃI'
                              : modalOf === 'employee'
                                ? 'CHỈNH SỬA THÔNG TIN NHÂN VIÊN'
                                : modalOf === 'companyManagement'
                                  ? 'CHỈNH SỬA THÔNG TIN CÔNG TY'
                                  : 'CHỈNH SỬA'}
                    </Typography>
                    <Box id='modal-modal-description' sx={{ mt: 2 }}>
                        Mô tả thêm ...
                        <Box
                            component='form'
                            sx={{
                                '& > :not(style)': { m: 1, width: '70%' },
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            noValidate
                            autoComplete='off'
                        >
                            {renderInputs()}
                        </Box>
                        <Box mt={2} display='flex' justifyContent='flex-end'>
                            <Button
                                onClick={handleSave}
                                variant='contained'
                                color='success'
                                sx={{
                                    marginRight: '10px',
                                }}
                            >
                                Lưu
                            </Button>
                            <Button
                                onClick={handleClose}
                                variant='outlined'
                                sx={{
                                    bgcolor:
                                        theme.palette.mode === 'dark'
                                            ? colors.grey[100]
                                            : '',
                                }}
                            >
                                Huỷ
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}
