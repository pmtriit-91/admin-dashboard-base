import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { mockTransactions } from '../../data/mockData'
import Header from '../../components/Header'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import LineChart from '../../components/LineChart'
import BarChart from '../../components/BarChart'
import GeographyChart from '../../components/GeographyChart'
import ProgressCircle from '../../components/ProgressCircle'
import StatBox from '../../components/StatBox'

function Dashboard() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const dataRow1 = [
        {
            title: '12,361',
            subtitle: 'Emails Sent',
            progress: '0.75',
            increase: '+14%',
            icon: (
                <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
                />
            ),
        },
        {
            title: '431,225',
            subtitle: 'Sales Obtained',
            progress: '0.5',
            increase: '+21%',
            icon: (
                <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
                />
            ),
        },
        {
            title: '32,441',
            subtitle: 'New Clients',
            progress: '0.30',
            increase: '+5%',
            icon: (
                <PersonAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
                />
            ),
        },
        {
            title: '1,325,134',
            subtitle: 'Traffic Received',
            progress: '0.80',
            increase: '+43%',
            icon: (
                <TrafficIcon
                    sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
                />
            ),
        },
    ]

    return (
        <Box
            m='20px'
            sx={{
                '& .MuiTypography-root.MuiTypography-h2': {
                    margin: '0 0 5px 0',
                },
            }}
        >
            {/* HEADER */}
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Header
                    title='TRANG CHỦ'
                    subtitle='Chào mừng đến với trang quản lý Btaskee'
                />

                <Box
                    sx={{
                        '& .css-q34qwa-MuiButtonBase-root-MuiButton-root:hover':
                            {
                                bgcolor: colors.primary[400],
                            },
                        '& .css-3mc8sk-MuiButtonBase-root-MuiButton-root:hover':
                            {
                                bgcolor: 'rgba(4, 5, 9, 0.04)',
                                color: 'black',
                            },
                    }}
                >
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            padding: '10px 20px',
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: '10px' }} />
                        TẢI BÁO CÁO
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display='grid'
                gridTemplateColumns='repeat(12, 1fr)'
                gridAutoRows='140px'
                gap='20px'
                marginTop='30px'
                sx={{
                    '& .MuiBox-root.css-1q4qvzg, .MuiBox-root.css-mqmzkw, .MuiBox-root.css-1nue0r4, .MuiBox-root.css-1arw0df, .MuiBox-root.css-q7je8g':
                        {
                            // backgroundColor: '#fff',
                            boxShadow:
                                'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                        },
                    '& .css-59jqr3-MuiSvgIcon-root,.css-1yqlyn3-MuiSvgIcon-root':
                        {
                            fontSize: '28px',
                        },
                }}
            >
                {/* ROW 1 */}
                {dataRow1.map((data, i) => (
                    <Box
                        key={i}
                        gridColumn='span 3'
                        bgcolor={colors.primary[400]}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <StatBox
                            title={data.title}
                            subtitle={data.subtitle}
                            increase={data.increase}
                            icon={data.icon}
                            progress={data.progress}
                        />
                    </Box>
                ))}

                {/* ROW 2 */}
                <Box
                    gridColumn='span 8'
                    gridRow='span 2'
                    bgcolor={colors.primary[400]}
                >
                    <Box
                        mt='25px'
                        p='0 30px'
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Box display='flex' flexDirection='column'>
                            <Typography
                                variant='h5'
                                fontWeight='600'
                                color={colors.grey[100]}
                            >
                                Thống Kê Doanh Thu
                            </Typography>
                            <Typography
                                variant='h3'
                                fontWeight='700'
                                color={colors.greenAccent[500]}
                            >
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: '26px',
                                        color: colors.greenAccent[500],
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height='250px' mt='-20px'>
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>

                {/* TRANSACTIONS */}
                <Box
                    gridColumn='span 4'
                    gridRow='span 4'
                    bgcolor={colors.primary[400]}
                    overflow='auto'
                >
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        color={colors.grey[100]}
                        p='15px'
                    >
                        <Typography
                            variant='h5'
                            fontWeight='600'
                            color={colors.grey[100]}
                        >
                            Đơn Đặt Hàng
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => {
                        return (
                            <Box
                                key={`${transaction.txId}-${i}`}
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                borderBottom={`4px solid ${colors.primary[500]}`}
                                p='15px'
                            >
                                <Box>
                                    <Typography
                                        variant='h5'
                                        fontWeight='600'
                                        color={colors.greenAccent[500]}
                                    >
                                        {transaction.txId}
                                    </Typography>
                                    <Typography color={colors.grey[100]}>
                                        {transaction.user}
                                    </Typography>
                                </Box>
                                <Box color={colors.grey[100]}>
                                    {transaction.date}
                                </Box>
                                <Box
                                    bgcolor={colors.greenAccent[500]}
                                    padding='5px 10px'
                                    borderRadius='4px'
                                >
                                    ${transaction.cost}
                                </Box>
                            </Box>
                        )
                    })}
                </Box>

                {/* ROW 3 */}
                <Box
                    gridColumn='span 4'
                    gridRow='span 2'
                    bgcolor={colors.primary[400]}
                    p='30px'
                >
                    <Typography
                        variant='h5'
                        fontWeight='600'
                        color={colors.grey[100]}
                    >
                        Doanh thu theo ngày
                    </Typography>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        mt='25px'
                    >
                        <ProgressCircle size='125' />
                        <Typography
                            variant='h5'
                            color={colors.greenAccent[500]}
                            sx={{ mt: '15px' }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography color={colors.grey[100]}>
                            Includes extra misc expenditures and costs
                        </Typography>
                    </Box>
                </Box>

                {/*  */}
                <Box
                    gridColumn='span 4'
                    gridRow='span 2'
                    bgcolor={colors.primary[400]}
                >
                    <Typography
                        variant='h5'
                        fontWeight='600'
                        color={colors.grey[100]}
                        sx={{ p: '30px 30px 0 30px' }}
                    >
                        Người lao động
                    </Typography>
                    <Box height='250px' mt='-20px'>
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>

                {/*  */}
                {/* <Box
                    gridColumn='span 4'
                    gridRow='span 2'
                    bgcolor={colors.primary[400]}
                    p='30px'
                >
                    <Typography
                        variant='h5'
                        fontWeight='600'
                        color={colors.grey[100]}
                        sx={{ mb: '15px' }}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box height='200px'>
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box> */}
            </Box>
        </Box>
    )
}

export default Dashboard
