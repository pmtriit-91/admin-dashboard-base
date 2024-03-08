import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useTheme } from '@mui/material'
import { tokens } from '../../../theme'
import TextField from '@mui/material/TextField'

export default function ModalEdit({ open, setOpen, data = {} }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const handleClose = () => setOpen(false)

    const [name, setName] = useState(data?.name || '')
    const [cost, setCost] = useState(data?.cost || '')
    const [date, setDate] = useState(data?.date || '')
    const [jobType, setJobType] = useState(data?.jobType || '')
    const [status, setStatus] = useState(data?.status || '')

    useEffect(() => {
        // Cập nhật giá trị khi data thay đổi
        setName(data?.name || '')
        setCost(data?.cost || '')
        setDate(data?.date || '')
        setJobType(data?.jobType || '')
        setStatus(data?.status || '')
    }, [data])

    //handle edit
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
                        width: 700,
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
                    }}
                >
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                        color={colors.grey[500]}
                    >
                        EDIT USER
                    </Typography>
                    <Box id='modal-modal-description' sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
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
                            <TextField
                                label='Job Name'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                label='Cost/1h'
                                variant='outlined'
                                color='secondary'
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                            />
                            <TextField
                                label='Date'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <TextField
                                label='Job Type'
                                variant='outlined'
                                color='secondary'
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                            />
                            <TextField
                                label='Status'
                                variant='outlined'
                                color='secondary'
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
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
                                Save
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
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}
