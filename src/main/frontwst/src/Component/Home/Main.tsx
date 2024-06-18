import React from 'react'
import userLogo from './img/user.svg';
import './css/style.css'; // "./" 까지는 현재 폴더까지 이미 경로가 설정되어있는 것 여기서의 현재폴더는 ./Component/Home 이므로 그 다음 적용할 하위 폴더를 적어주면 됨!
export default function Main (){
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
                  </div>
                  {/* <!-- end sidebar content --> */}
              
                </div>
                {/* <!-- end sidbar --> */}
              
                {/* <!-- strat content --> */}
                <div className="bg-gray-100 flex-1 p-6 md:mt-16"> 
              
                  
                  {/* <!-- General Report --> */}
                  <div className="grid grid-cols-4 gap-6 xl:grid-cols-1">
              
              
                  {/* <!-- card --> */}
                  <div className="report-card">
                      <div className="card">
                          <div className="card-body flex flex-col">
                              
                              {/* <!-- top --> */}
                              <div className="flex flex-row justify-between items-center">
                                  <div className="h6 text-indigo-700 fad fa-shopping-cart"></div>
                                  <span className="rounded-full text-white badge bg-teal-400 text-xs">
                                      12%
                                      <i className="fal fa-chevron-up ml-1"></i>
                                  </span>
                              </div>
                              {/* <!-- end top --> */}
              
                              {/* <!-- bottom --> */}
                              <div className="mt-8">
                                  <h1 className="h5 num-4"></h1>
                                  <p>items sales</p>
                              </div>                
                              {/* <!-- end bottom --> */}
                  
                          </div>
                      </div>
                      <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                  </div>
             {/* end card */} 
              
              
                  {/* <!-- card --> */}
                  <div className="report-card">
                      <div className="card">
                          <div className="card-body flex flex-col">
                              
                             {/*  <!-- top --> */}
                              <div className="flex flex-row justify-between items-center">
                                  <div className="h6 text-red-700 fad fa-store"></div>
                                  <span className="rounded-full text-white badge bg-red-400 text-xs">
                                      6%
                                      <i className="fal fa-chevron-down ml-1"></i>
                                  </span>
                              </div>
                              {/* <!-- end top --> */}
              
                              {/* <!-- bottom --> */}
                              <div className="mt-8">
                                  <h1 className="h5 num-4"></h1>
                                  <p>new orders</p>
                              </div>                
                              {/* <!-- end bottom --> */}
                  
                          </div>
                      </div>
                      <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                  </div>
                  {/* end card */}
              
              
                  {/* <!-- card --> */}
                  <div className="report-card">
                      <div className="card">
                          <div className="card-body flex flex-col">
                              
                              {/* <!-- top --> */}
                              <div className="flex flex-row justify-between items-center">
                                  <div className="h6 text-yellow-600 fad fa-sitemap"></div>
                                  <span className="rounded-full text-white badge bg-teal-400 text-xs">
                                      72%
                                      <i className="fal fa-chevron-up ml-1"></i>
                                  </span>
                              </div>
                              {/* <!-- end top --> */}
              
                              {/* <!-- bottom --> */}
                              <div className="mt-8">
                                  <h1 className="h5 num-4"></h1>
                                  <p>total Products</p>
                              </div>                
                              {/* <!-- end bottom --> */}
                  
                          </div>
                      </div>
                      <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                  </div>
                   {/* end card */} 
              
              
                  {/* <!-- card --> */}
                  <div className="report-card">
                      <div className="card">
                          <div className="card-body flex flex-col">
                              
                              {/* <!-- top --> */}
                              <div className="flex flex-row justify-between items-center">
                                  <div className="h6 text-green-700 fad fa-users"></div>
                                  <span className="rounded-full text-white badge bg-teal-400 text-xs">
                                      150%
                                      <i className="fal fa-chevron-up ml-1"></i>
                                  </span>
                              </div>
                              {/* <!-- end top --> */}
              
                             {/*  <!-- bottom --> */}
                              <div className="mt-8">
                                  <h1 className="h5 num-4"></h1>
                                  <p>new Visitor</p>
                              </div>                
                             {/*  <!-- end bottom --> */}
                  
                          </div>
                      </div>
                      <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                  </div>
                  {/* end card */} 
                  
              
              </div>
                  {/* <!-- End General Report --> */}

                  {/* ----------------------Data input frame in-----------------------------*/}

                <div className="card mt-6  justify-end">
                                    {/*  <!-- header --> */}
                                  
                                      <div className = "flex">
                                         <h1 className="h6">Data input</h1>
                                      </div>
                                        <div className="flex  items-center">
                                          <button >
                                            <a className = "">데이터 입력하기</a>
                                          </button>
                                        </div>
                              
                </div>                  
                  {/* ----------------------Data input frame end----------------------*/}
              
                  {/* <!-- Sales Overview --> */}
                  <div className="card mt-6">
              
                 {/*  <!-- header --> */}
                  <div className="card-header flex flex-row justify-between">
                      <h1 className="h6">Sales Overview</h1>
              
                      <div className="flex flex-row justify-center items-center">
              
                          <a href="">
                              <i className="fad fa-chevron-double-down mr-6"></i>
                          </a>
              
                          <a href="">
                              <i className="fad fa-ellipsis-v"></i>
                          </a>
              
                      </div>
              
                  </div>
                 {/*  <!-- end header --> */}
              
                 {/*  <!-- body --> */}
                  <div className="card-body grid grid-cols-2 gap-6 lg:grid-cols-1">
              
                      <div className="p-8">
                          <h1 className="h2">5,337</h1>
                          <p className="text-black font-medium">Sales this month</p>
              
                          <div className="mt-20 mb-2 flex items-center">
                              <div className="py-1 px-3 rounded bg-green-200 text-green-900 mr-3">
                                  <i className="fa fa-caret-up"></i>
                              </div>
                              <p className="text-black"><span className="num-2 text-green-400"></span><span className="text-green-400">% more sales</span> in comparison to last month.</p>
                          </div>
              
                          <div className="flex items-center">
                              <div className="py-1 px-3 rounded bg-red-200 text-red-900 mr-3">
                                  <i className="fa fa-caret-down"></i>
                              </div>
                              <p className="text-black"><span className="num-2 text-red-400"></span><span className="text-red-400">% revenue per sale</span> in comparison to last month.</p>
                          </div>
              
                          <a href="#" className="btn-shadow mt-6">view details</a>
              
                      </div>
                  
                      <div className="">
                          <div id="sealsOverview"></div>
                      </div>
                  
                  </div>
                  {/* <!-- end body --> */}
              
              </div>
                 {/*  <!-- end Sales Overview --> */}
              
                  {/* <!-- start numbers --> */}
                  <div className="grid grid-cols-5 gap-6 xl:grid-cols-2">
         
       
              </div>
                  {/* <!-- end nmbers --> */}
              
                  {/* <!-- start quick Info --> */}
                  <div className="grid grid-cols-3 gap-6 mt-6 xl:grid-cols-1">
              
              
                  {/* <!-- Browser Stats --> */}
                  <div className="card">
                      <div className="card-header">Browser Stats</div>
              
                     {/*  <!-- brawser --> */}
                      <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
                          <div className="flex items-center">
                              <i className="fab fa-chrome mr-4"></i>    
                              <h1>google chrome</h1>
                          </div>                
                          <div>
                              <span className="num-2"></span>%
                          </div>
                      </div>
                     {/*  <!-- end brawser --> */}
              
                      {/* <!-- brawser --> */}
                      <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
                          <div className="flex items-center">
                              <i className="fab fa-firefox mr-4"></i>    
                              <h1>firefox</h1>
                          </div>                
                          <div>
                              <span className="num-2"></span>%
                          </div>
                      </div>
                     {/*  <!-- end brawser --> */}
              
                    {/*   <!-- brawser --> */}
                      <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
                          <div className="flex items-center">
                              <i className="fab fa-internet-explorer mr-4"></i>    
                              <h1>internet explorer</h1>
                          </div>                
                          <div>
                              <span className="num-2"></span>%
                          </div>
                      </div>
                      {/* <!-- end brawser --> */}
              
                      {/* <!-- brawser --> */}
                      <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b-0">
                          <div className="flex items-center">
                              <i className="fab fa-safari mr-4"></i>    
                              <h1>safari</h1>
                          </div>                
                          <div>
                              <span className="num-2"></span>%
                          </div>
                      </div>
                     {/*  <!-- end brawser --> */}
              
                  </div>
                  {/* <!-- end Browser Stats --> */}
              
                  {/* <!-- Start Recent Sales --> */}
                  <div className="card col-span-2 xl:col-span-1">
                      <div className="card-header">최근 거래 목록</div>
              
                      <table className="table-auto w-full text-left">
                          <thead>
                              <tr>
                                  <th className="px-4 py-2 border-r">거래번호</th>
                                  <th className="px-4 py-2 border-r">거래처</th>
                                  <th className="px-4 py-2 border-r">품목</th>
                                  <th className="px-4 py-2 border-r">수량</th>
                                  <th className="px-4 py-2 border-r">거래 가격</th>
                                  <th className="px-4 py-2 border-r">세액</th>
                                  <th className="px-4 py-2 border-r">거래일</th>
                                  <th className="px-4 py-2 border-r">비고</th>
                              </tr>
                          </thead>
                          <tbody className="text-gray-600">
                              <tr>                    
                                  <td className="border border-l-0 px-4 py-2 text-center ">1</td>
                                  <td className="border border-l-0 px-4 py-2">바로텍</td>
                                  <td className="border border-l-0 px-4 py-2">폴리에틸렌<span className="num-2"></span></td>
                                  <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span>1000(kg)</td>
                                  <td className="border border-l-0 px-4 py-2 ">460000</td>
                                  <td className="border border-l-0 px-4 py-2">10%</td>
                                  <td className="border border-l-0 px-4 py-2">어제 12시간 전<span className="num-2"></span></td>
                                  <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span></td>
                              </tr>                          
                          </tbody>
                      </table>
                  </div>
                 {/*  <!-- End Recent Sales --> */}
              
              
              </div>
                  {/* <!-- end quick Info --> */}
                      
              
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