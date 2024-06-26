import React from 'react'
import userLogo from './img/user.svg';
import './css/style.css'; // "./" 까지는 현재 폴더까지 이미 경로가 설정되어있는 것 여기서의 현재폴더는 ./Component/Home 이므로 그 다음 적용할 하위 폴더를 적어주면 됨!
import Overview from './OverView.tsx';
import RecentTable from './RecentSales.tsx';
import Modal from './Modal.tsx';
import Funx from './js/funx.tsx';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function Main (){
  
const [data, setData] = useState(null); // 데이터를 저장할 상태 변수

useEffect(() => {
    // 데이터를 가져오는 함수
    const fetchData = async () => {
        try {
            const response = await axios.post('/codes/trashtype'); // API 엔드포인트에 요청
            setData(response.data); // 받은 데이터를 상태에 저장
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData(); // 데이터를 가져오는 함수 호출

}, []); 

        return(
        <>
                <head>
                        <meta charSet="utf-8"></meta>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>  
                        <link rel="shortcut icon" href="./img/fav.png" type="image/x-icon"></link>
                        <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.12.1/css/pro.min.css"></link>
                        <title>Project - WST</title>
                </head>
              <body className="bg-gray-100">
              
              
              {/* start navbar */} 
              <div className="md:fixed md:w-full md:top-0 md:z-20 flex justify-end flex-wrap items-center bg-white p-6 border-b border-gray-300">
                  
                  {/* logo */}
                  <div className="flex-none w-56 flex flex-row items-center">
                    <strong className="capitalize ml-1 flex-1">WST</strong>
              
                    <button id="sliderBtn" className = "flex-none text-right text-gray-900 hidden md:block">
                      <i className="fad fa-list-ul"></i>
                    </button>

                

                  </div>
                {/* end logo */}


                  
              
                  {/* navbar content */}
                  <div id="navbar" className="animated md:hidden md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flex-row flex-wrap justify-end items-center md:flex-col md:items-center">
                          
                    {/* right */}
                    <div className="flex  items-center"> 
              
                      {/* user */}
                      <div className="relative md:static">
              
                        <button className="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center">
                          <div className="w-8 h-8 overflow-hidden rounded-full">
                            <img className="w-full h-full object-cover" src={userLogo} ></img>
                          </div> 
              
                          <div className="ml-2 capitalize flex ">
                            <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">정민호</h1>
                          </div>                        
                        </button>
                        
                        <button className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>
              
                        <div className="text-gray-500 menu hidden md:mt-10 md:w-full rounded bg-white shadow-md absolute z-20 right-0 w-40 mt-5 py-2 animated faster">
              
                          {/* item */}
                          <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                            <i className="fad fa-user-edit text-xs mr-1"></i> 
                            edit my profile
                          </a>     
                          {/* end item */}

                        </div>
                      </div>
                      {/* end user */}

                      

                    </div>
                    {/* <!-- end right --> */}
                  </div>
                  {/* <!-- end navbar content --> */}
              
                </div>
              {/* <!-- end navbar --> */}
              
              
              {/* <!-- strat wrapper --> */}
              <div className="h-screen flex flex-row flex-wrap">
                
                  {/* <!-- start sidebar --> */}
                <div id="sideBar" className="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster">
                  
              
                  {/* <!-- sidebar content --> */}
                  <div className="flex flex-col">
              
                    {/* <!-- sidebar toggle --> */}
                    <div className="text-right hidden md:block mb-4">
                      <button id="sideBarHideBtn">
                        <i className="fad fa-times-circle"></i>
                      </button>
                    </div>
                    {/* <!-- end sidebar toggle --> */}
              
                    <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">dash board</p>
              
                    {/*  link  */} 
                    <a href="./index.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                      <i className="fad fa-chart-pie text-xs mr-2"></i>                
                      데이터 분석 대시보드
                    </a>
                    {/* <!-- end link --> */}
              
                    {/* link  */} 
                    <a href="./index-1.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                      <i className="fad fa-shopping-cart text-xs mr-2"></i>
                      매출 데이터 대시보드
                    </a>
                    {/* <!-- end link --> */}
              
                    <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Not yet</p>
              
                    {/* {/*  link  */} 
                    <a href="./email.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                      <i className="fad fa-envelope-open-text text-xs mr-2"></i>
                      email
                    </a>
                    {/* <!-- end link --> */}

                           {/* ----------------------Data input frame in-----------------------------*/}

                                    <Funx/>
                                        
                           {/* ----------------------Data input frame end----------------------*/}

                  </div>
                  {/* <!-- end sidebar content --> */}
              
                </div>
                {/* <!-- end sidbar --> */}
              
                {/* <!-- strat content --> */}
                <div className="bg-gray-100 flex-1 p-6 md:mt-16"> 
              
                  
                  {/* <!-- General Report --> */}
                  <div className="grid grid-cols-4 gap-6 xl:grid-cols-1">
                              
              

              
              </div>
                  {/* <!-- End General Report --> */}


              
                      {/* OverView start */}
                  <Overview />
                      {/* OverView end */}
              
                  {/* <!-- start numbers --> */}
                  <div className="grid grid-cols-5 gap-6 xl:grid-cols-2">
                  

       
              </div>
                  {/* <!-- end nmbers --> */}
              
                  {/* <!-- start quick Info --> */}
                  <div className="grid grid-cols-2 gap-6 mt-6 xl:grid-cols-1">
              
              
                 
              
                                           {/* <!--------------------- Start RecentSales -----------------------> */}
                                                    <RecentTable />
                                           {/*  <!----------------------- End RecentSales -----------------------> */}
              
              
              </div>
                  {/* <!-- end quick Info --> */}
                      
                  {data ? (
                <div>
                    <h1>받아온 데이터</h1>
                    <p>대분류 코드: {data.majorCode}</p>
                    <p>대분류 이름: {data.majorName}</p>
                    <p>중분류 코드: {data.subCode}</p>
                    <p>중분류 이름: {data.subName}</p>
                    <p>소분류 코드: {data.detailCode}</p>
                    <p>소분류 이름: {data.nameCode}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}

                </div>
                {/* <!-- end content --> */}

              
              </div>
              {/* <!-- end wrapper --> */}
              
              {/* <!-- script --> */}
              <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
              <script src="js/scripts.js"></script>
              {/* <!-- end script --> */}
              
              </body>
        </>
        )
}