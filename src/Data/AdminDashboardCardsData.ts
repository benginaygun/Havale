import allInvests from '../assets/images/tum-yatirimlar-icon.png';
import moneyAmount from '../assets/images/para-miktari-icon.png';
import rejectedInvests from '../assets/images/reddedilen-yatirimlar-icon.png';
import { AdminDashboardCardsType } from '../Types/AdminDashboardCardsDataType';

export const AdminDashboardCardsData:AdminDashboardCardsType[] = [
    {
        icon:allInvests,
        quantity:983,
        title:'Tüm Yatırımlar',
        isMoney:false,
        backgroundColor:'37E860'
    },
    {
        icon:moneyAmount,
        quantity:10000,
        title:'Para Miktarı',
        isMoney:true,
        backgroundColor:'FFA23F'
    },
    {
        icon:rejectedInvests,
        quantity:100,
        title:'Reddedilen Yatırımlar',
        isMoney:false,
        backgroundColor:'BD8BD8'
    },
    {
        icon:moneyAmount,
        quantity:10000,
        title:'Reddedilen Para Miktarı',
        isMoney:true,
        backgroundColor:'61A1BC'
    },
];