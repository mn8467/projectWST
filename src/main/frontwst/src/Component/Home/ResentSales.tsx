export default function ResentTable(){
    return(
                <>
                   {/* <!-- Start Recent Sales --> */}
                   <div className="card col-span-2 xl:col-span-1">
                      <div className="card-header">Recent Sales</div>
              
                      <table className="table-auto w-full text-left">
                          <thead>
                              <tr>
                                  <th className="px-4 py-2 border-r"></th>
                                  <th className="px-4 py-2 border-r">product</th>
                                  <th className="px-4 py-2 border-r">price</th>
                                  <th className="px-4 py-2">date</th>
                              </tr>
                          </thead>
                          <tbody className="text-gray-600">
              
                              <tr>                    
                                  <td className="border border-l-0 px-4 py-2 text-center text-green-500"><i className="fad fa-circle"></i></td>
                                  <td className="border border-l-0 px-4 py-2">Lightning to USB-C Adapter Lightning.</td>
                                  <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                                  <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                              </tr>
                              <tr>                    
                                  <td className="border border-l-0 px-4 py-2 text-center text-yellow-500"><i className="fad fa-circle"></i></td>
                                  <td className="border border-l-0 px-4 py-2">Apple iPhone 8.</td>
                                  <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                                  <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                              </tr>
                              <tr>                    
                                  <td className="border border-l-0 px-4 py-2 text-center text-green-500"><i className="fad fa-circle"></i></td>
                                  <td className="border border-l-0 px-4 py-2">Apple MacBook Pro.</td>
                                  <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                                  <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
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