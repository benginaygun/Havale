const Endpoints = {
    AUTH:{
        LOGIN:'authenticate/login',
        REGISTER:'authenticate/register',
        LOGOUT:'authenticate/logout'
    },
    USER:{
        GETUSERDATA:'authenticate/getuser'
    },
    ADMIN:{
        WITHDRAWALS:'transfers/withdrawals',
        ACCEPTWITHDRAWALS:'Transfers/AcceptTransfer/',
        REJECTWITHDRAWALS:'Transfers/RejectTransfer/',
        INVESTS:'transfers/invests',
        TRANSFERS:'transfers/all'
    }
}

export default Endpoints;