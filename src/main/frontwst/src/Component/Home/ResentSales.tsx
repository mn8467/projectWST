import React from "react"

export default function ResentTable(){
    return(
                <>
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
                             
                              <tr>                    
                                  <td className="border border-l-0 px-4 py-2 text-center text-red-500"><i className="fad fa-circle"></i></td>
                                  <td className="border border-l-0 px-4 py-2">Samsung Galaxy S9.</td>
                                  <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                                  <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                              </tr>
                              <tr>                    
                                  <td className="border border-l-0 px-4 py-2 text-center text-yellow-500"><i className="fad fa-circle"></i></td>
                                  <td className="border border-l-0 px-4 py-2">Samsung Galaxy S8 256GB.</td>
                                  <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                                  <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                              </tr>
                              <tr>                    
                                  <td className="border border-l-0 border-b-0 px-4 py-2 text-center text-green-500"><i className="fad fa-circle"></i></td>
                                  <td className="border border-l-0 border-b-0 px-4 py-2">apple watch.</td>
                                  <td className="border border-l-0 border-b-0 px-4 py-2">$<span className="num-2"></span></td>
                                  <td className="border border-l-0 border-b-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                              </tr>
                              
                          </tbody>
                      </table>
                  </div>
                 {/*  <!-- End Recent Sales --> */}
                </>
    )

}