import React, { useState } from 'react';
import Slider from './Section/Slider';
import btn from '../assets/img/icon/search.svg';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import list from '../assets/img/icon/list.svg';

const { kakao } = window;

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [places, setPlaces] = useState([]);
    const [mapCenter, setMapCenter] = useState({ lat: 33.450701, lng: 126.570667 });
    const [isListVisible, setIsListVisible] = useState(false); // 목록 가시성 상태

    const handleSearch = () => {
        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(keyword, (data, status, pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                setPlaces(data);
                if (data.length > 0) {
                    setMapCenter({ lat: data[0].y, lng: data[0].x });
                }
            } else {
                console.error("검색 결과가 없습니다.");
                setPlaces([]);
            }
        });
    };

    const toggleList = () => {
        setIsListVisible(!isListVisible); // 목록 가시성 상태를 토글
    };

    return (
        <div className='Search_wrap container'>
            <Slider />
            <div className="searchbar">
                <input
                    type="text"
                    placeholder='장소를 검색해주세요!'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <img src={btn} alt="btn" onClick={handleSearch} />
            </div>
            <div className='map-wrap'>
                <Map
                    center={mapCenter}
                    className='map'
                    level={5}
                >
                    {places.map((place) => (
                        <MapMarker
                            key={place.id}
                            position={{ lat: place.y, lng: place.x }}
                        />
                    ))}
                </Map>
                <div className="list" onClick={toggleList}> {/* 목록보기 클릭 시 토글 */}
                    <h6>목록보기</h6>
                    <img src={list} alt="icon" />
                </div>
            </div>
            {isListVisible && ( // 목록이 보일 때만 렌더링
                <div className="list-tap">
                    <div className="list-wrap">
                        <div className="line" onClick={toggleList}></div> {/* line 클릭 시 목록 닫기 */}
                        <h2>"<span>{keyword}</span>" 주변에 있는 곳</h2>
                        <div className="inner">
                            <ul>
                                {places.map((place) => (
                                    <li className='list-item' key={place.id}>
                                        <strong>{place.place_name}</strong><br />
                         
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
