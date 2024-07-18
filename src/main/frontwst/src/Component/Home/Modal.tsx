import React, { useEffect,useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import axios from 'axios'


const items1 = ["대분류 코드"]; // 드롭다운 목록
const items2 = ["중분류 코드"]; // 드롭다운 목록
const items3 = ["소분류 코드"]; // 드롭다운 목록

function GetMajorCodeComponent(){
  const [getdata, setdata] = useState([]);
  const [resultList, setResultList] = useState<any[]>([]); // 초기 값은 빈 배열, any[]는 임시로 모든 타입을 허용하는 예시입니다. 실제로는 받아오는 데이터의 타입을 정의하는 것이 좋습니다.
  const [selectedMajorCode, setSelectedMajorCode] = useState(""); // 사용자가 선택한 majorCode를 저장할 상태


  useEffect(() => {
    fetch("/codes/major-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setResultList(data.resultList); // 받아온 데이터의 resultList를 상태에 저장



        // 추가적인 로직 처리나 상태 업데이트 등을 할 수 있음
      })
      .catch((error) => {
        console.error("Error:", error);
        // 에러 처리 로직을 추가할 수 있음
      });
        
  
    }, []);

    const handleChange = (e) => {
      const selectedCode = e.target.value;
      setSelectedMajorCode(selectedCode);
    };

    const handleSubmit = () => {
      fetch("/codes/api/major-code", { // 적절한 백엔드 URL로 변경해야 합니다.
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ majorCode: selectedMajorCode }), // 선택된 majorCode를 JSON 형식으로 변환하여 전송
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Submit Success:", data);
          // 성공적으로 처리된 경우 추가적인 로직을 수행할 수 있음
        })
        .catch((error) => {
          console.error("Submit Error:", error);
          // 에러 처리 로직을 추가할 수 있음
        });
    };

  return (
    <select className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2"
            onChange={handleSubmit}>
        {resultList.map((item) => (
        <option key={item.majorCode} value={item.majorName}>
           {item.majorName}
        </option>
        ))}
    </select>
  );
}

function GetSubCodeComponent(){
  const [getdata, setdata] = useState([]);
  const [resultList, setResultList] = useState<any[]>([]); // 초기 값은 빈 배열, any[]는 임시로 모든 타입을 허용하는 예시입니다. 실제로는 받아오는 데이터의 타입을 정의하는 것이 좋습니다.
  const [selectedMajorCode, setSelectedMajorCode] = useState(""); // 사용자가 선택한 majorCode를 저장할 상태


  useEffect(() => {
    fetch("/codes/major-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setResultList(data.resultList); // 받아온 데이터의 resultList를 상태에 저장



        // 추가적인 로직 처리나 상태 업데이트 등을 할 수 있음
      })
      .catch((error) => {
        console.error("Error:", error);
        // 에러 처리 로직을 추가할 수 있음
      });
      
    }, []);

  
  return (
    <select className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2"
            >
        {resultList.map((item) => (
        <option key={item.subCode} value={item.subName}>
           {item.subName}
        </option>
        ))}
    </select>
  );
}


function GetDetailCodeComponent(){

  const [getdata, setdata] = useState([]);
  const [resultList, setResultList] = useState<any[]>([]); // 초기 값은 빈 배열, any[]는 임시로 모든 타입을 허용하는 예시입니다. 실제로는 받아오는 데이터의 타입을 정의하는 것이 좋습니다.


  useEffect(() => {
    fetch("/codes/trash-type", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setResultList(data.resultList); // 받아온 데이터의 resultList를 상태에 저장

        // 추가적인 로직 처리나 상태 업데이트 등을 할 수 있음
      })
      .catch((error) => {
        console.error("Error:", error);
        // 에러 처리 로직을 추가할 수 있음
      });
  }, []);

  return (
    <select className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2">
        {resultList.map((item) => (
        <option key={item.detailCode} value={item.nameCode}>
           {item.nameCode}
        </option>
        ))}
    </select>
  );
}

const DataTable = () => {
  const [date, setDate] = useState(new Date());


  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-200 px-4 py-2">날짜</th>
          <th className="border border-gray-200 px-4 py-2">품목</th>
          <th className="border border-gray-200 px-4 py-2">수량(kg)</th>
          <th className="border border-gray-200 px-4 py-2">단가</th>
          <th className="border border-gray-200 px-4 py-2">공급가</th>
          <th className="border border-gray-200 px-4 py-2">세액</th>
          <th className="border border-gray-200 px-4 py-2">공급자</th>
          <th className="border border-gray-200 px-4 py-2">비고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-200 px-4 py-2">
            <Flatpickr
              value={date}
              onChange={(date) => setDate(date)}
              options={{ dateFormat: 'Y-m-d' }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </td>
          <td className="border border-gray-200 px-4 py-2">
          <div className="flex">
            <GetMajorCodeComponent />
            <GetSubCodeComponent />
            <GetDetailCodeComponent />
          </div>
          </td>
          <td className="border border-gray-200 px-2 py-2">
            <form>
              <input className='' >
              </input>
            </form>
          </td>
          <td className="border border-gray-200 w-4  py-2">
            <form>
              <input className=''>
              </input>
            </form>
          </td>
          <td className="border border-gray-200py-2">
          <form>
              <input className=''>
              </input>
            </form>

          </td>
          <td className="border border-gray-200  py-2">
          <form>
              <input className=''>
              </input>
            </form>
          </td>
          <td className="border border-gray-200  py-2">
          <form>
              <input className=''>
              </input>
            </form>
          </td>
          <td className="border border-gray-200 px-4 py-2">
          <form>
              <input className=''>
              </input>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span className="hidden inline-block align-middle h-screen" aria-hidden="true">&#8203;</span>

      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">명세표 입력</h3>
          <form>
            <DataTable />
            {/* 버튼 그룹 */}
            <div className="flex justify-end mt-4">
              <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 mr-2" onClick={closeModal}>
                Close
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;