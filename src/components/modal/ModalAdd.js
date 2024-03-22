import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function ModalAdd({ open, setOpen, modalOf = '' }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const handleClose = () => setOpen(false)

    //media query
    const matches = useMediaQuery('(min-width:600px)')

    //users
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    //discount
    const [createDate, setCreateDate] = useState('')
    const [expiryDate, setExpiryDate] = useState('')

    //companyManagement
    const [address, setAddress] = useState('')

    //service
    const [serviceGroup, setServiceGroup] = useState('')
    const [serviceName, setServiceName] = useState('')

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
                            label='Ngày tạo'
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
                            fullWidth
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
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
                            label='Tên nhân viên'
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
                            fullWidth
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {/* <TextField
                            id='outlined-basic'
                            label='Nhóm dịch vụ'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            value={serviceGroup}
                            onChange={(e) => setServiceGroup(e.target.value)}
                        /> */}
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
                            fullWidth
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                        />
                    </>
                )
            default:
                return null
        }
    }

    //handle save
    const handleSave = () => {
        console.log('Save clicked')
        setOpen(false)
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
                        // bgcolor: 'background.paper',
                        bgcolor:
                            theme.palette.mode === 'dark'
                                ? '#1F2A40'
                                : '#e0e0e0',
                        border: '1px solid rgba(0, 0, 0, 0.1) 0px 4px 12px',
                        boxShadow: 24,
                        p: matches ? 4 : 2,
                        '& .css-1lybvg8-MuiButtonBase-root-MuiButton-root:hover':
                            {
                                bgcolor: '#ffffff4d',
                            },
                    }}
                >
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                        color={colors.grey[500]}
                    >
                        {(() => {
                            switch (modalOf) {
                                case 'users':
                                    return 'THÊM NGƯỜI SỬ DỤNG'
                                case 'discount':
                                    return 'THÊM ƯU ĐÃI'
                                case 'employee':
                                    return 'THÊM NHÂN VIÊN'
                                case 'service':
                                    return 'THÊM DỊCH VỤ'
                                default:
                                    return 'THÊM MỚI'
                            }
                        })()}
                    </Typography>

                    <Box id='modal-modal-description' sx={{ mt: 2 }}>
                        <Box
                            component='form'
                            sx={{
                                '& > :not(style)': { m: 1, width: '85%' },
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            noValidate
                            autoComplete='off'
                        >
                            {renderInputs()}
                            <Box
                                mt={2}
                                display='flex'
                                justifyContent='flex-end'
                            >
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
                </Box>
            </Modal>
        </div>
    )
}
