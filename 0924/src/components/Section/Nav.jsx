import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Home from '../../assets/img/icon/home.svg';
import Like from '../../assets/img/icon/like.svg';
import Search from '../../assets/img/icon/search.svg';
import Mypage from '../../assets/img/icon/mypage.svg';
import HomeFull from '../../assets/img/icon/homefull.svg';
import LikeFull from '../../assets/img/icon/likefull.svg';
import SearchFull from '../../assets/img/icon/searchfull.svg';
import MypageFull from '../../assets/img/icon/mypagefull.svg';

const Nav = () => {
    const location = useLocation();  
    return (
        <div className='nav'>
            <Link to='/main'>
                {location.pathname === '/main' ? (
                    <img src={HomeFull} alt="home" className='homefull' />
                ) : (
                    <img src={Home} alt="home" className='home' />
                )}
            </Link>
            <Link to='/like'>
                {location.pathname === '/like' ? (
                    <img src={LikeFull} alt="like" className='likefull' />
                ) : (
                    <img src={Like} alt="like" className='like' />
                )}
            </Link>
            <Link to='/search'>
                {location.pathname === '/search' ? (
                    <img src={SearchFull} alt="search" className='searchfull' />
                ) : (
                    <img src={Search} alt="search" className='search' />
                )}
            </Link>
            <Link to='/mypage'>
                {location.pathname === '/mypage' ? (
                    <img src={MypageFull} alt="mypage" className='mypagefull' />
                ) : (
                    <img src={Mypage} alt="mypage" className='mypage' />
                )}
            </Link>
        </div>
    );
};

export default Nav;
