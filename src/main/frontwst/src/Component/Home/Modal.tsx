import React, { useEffect,useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import axios from 'axios'



const items1 = ["대분류 코드"]; // 드롭다운 목록
const items2 = ["중분류 코드"]; // 드롭다운 목록
const items3 = ["소분류 코드"]; // 드롭다운 목록

// majorCode 담당
function GetMajorCodeComponent({ onSelectMajorCode }) {
  const [resultList, setResultList] = useState<any[]>([]); // 초기 값은 빈 배열
  const [selectedMajorCode, setSelectedMajorCode] = useState(""); // 사용자가 선택한 majorCode를 저장할 상태

  useEffect(() => {
    fetch("/codes/major-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        setResultList(data.resultList); // 받아온 데이터의 resultList를 상태에 저장
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  const handleChange = (e) => {
    const selectedCode = e.target.value;
    setSelectedMajorCode(selectedCode); // 선택된 값을 상태에 저장
    onSelectMajorCode(selectedCode); // 부모 컴포넌트에 선택된 majorCode를 전달
  };

  return (
    <select 
      className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2"
      onChange={handleChange}
      value={selectedMajorCode}
    >
      <option value="">▶대분류 코드</option>
      {resultList.map((item) => (
        <option key={item.majorCode} value={item.majorCode}>
          {item.majorName}
        </option>
      ))}
    </select>
  );
}

//subCode 담당
function GetSubCodeComponent({ majorCode, onSelectSubCode}) {
  const [resultList, setResultList] = useState<any[]>([]); // 초기 값은 빈 배열
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태 관리
  const [selectedSubCode, setSelectedSubCode] = useState("");

  interface SubCode {
    subCode: string;
    subName: string;
  }
  
  interface SubCodeResponse {
    resultList: SubCode[];
  }

  

  useEffect(() => {
    if (majorCode) {
      setLoading(true); // 로딩 시작
      fetch("/codes/api/waste-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ majorCode }), // 선택된 majorCode를 JSON 형식으로 변환하여 전송
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log("Success:", data);
          if (data.resultList && Array.isArray(data.resultList)) {
            setResultList(data.resultList); // 받아온 데이터의 resultList를 상태에 저장
            
          } else {
            
            console.error("Unexpected data format:", data);
          }

          
        })
        
        .catch(error => {
          console.error("Error:", error);
          setError(error.message); // 에러 메시지 상태 업데이트
        })
        .finally(() => {
          setLoading(false); // 로딩 종료
        });
    }
  }, [majorCode]); // majorCode가 변경될 때마다 useEffect 실행

  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleChange = (e) => {
    const selectedCode = e.target.value;
    setSelectedSubCode(selectedCode); // 선택된 값을 상태에 저장
    onSelectSubCode(selectedCode); // 부모 컴포넌트에 선택된 subCode를 전달
  };

  return (
    <select
      className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2"
      onChange={handleChange}
      value={selectedSubCode}
    >
      <option value="">▶중분류 코드</option>
      {resultList.length > 0 ? (
        resultList.map((item) => (
          <option key={item.subCode} value={item.subCode}>
            {item.subName}
          </option>
        ))
      ) : (
        <option value="">No data available</option>
      )}
    </select>
  );
}

//DetailCode 담당
function GetDetailCodeComponent({ majorCode, subCode }) {
  const [resultList, setResultList] = useState<any[]>([]); // 초기 값은 빈 배열
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태 관리

  interface DetailCode{
    detailCode : string;
    nameCode : string;
  }

  interface DetailCodeResponse {
    resultList: DetailCode[];
  }

  useEffect(() => {
    if (majorCode && subCode ) {
      setLoading(true); // 로딩 시작
      fetch("/codes/api/waste-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ majorCode, subCode }), // 선택된 majorCode를 JSON 형식으로 변환하여 전송
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log("Success:", data);
          if (data.resultList && Array.isArray(data.resultList)) {
            setResultList(data.resultList); // 받아온 데이터의 resultList를 상태에 저장
            
          } else {
            
            console.error("Unexpected data format:", data);
          }

          
        })
        
        .catch(error => {
          console.error("Error:", error);
          setError(error.message); // 에러 메시지 상태 업데이트
        })
        .finally(() => {
          setLoading(false); // 로딩 종료
        });
    }
  }, [majorCode,subCode]); // majorCode,subCode 변경될 때마다 useEffect 실행

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  

  return (
    <select
      className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2"
    >
      <option value="">▶소분류 코드</option>
      {resultList.length > 0 ? (
        resultList.map((item) => (
          <option key={item.detailCode} value={item.detailCode}>
            {item.nameCode}
          </option>
        ))
      ) : (
        <option value="">No data available</option>
      )}
    </select>
  );
}

// 부모 컴포넌트
function ParentComponent() {
  const [selectedMajorCode, setSelectedMajorCode] = useState(""); // 부모 컴포넌트에서 선택된 majorCode를 관리
  const [selectedSubCode, setSelectedSubCode] = useState("");

  const handleSelectMajorCode = (majorCode) => {
    setSelectedMajorCode(majorCode); // majorCode를 상태에 저장
  };

  const handleSelectSubCode = (subCode) => {
    setSelectedSubCode(subCode); // majorCode를 상태에 저장
  };

  return (
    <div className="flex">
      <GetMajorCodeComponent onSelectMajorCode={handleSelectMajorCode} />
      <GetSubCodeComponent majorCode={selectedMajorCode} onSelectSubCode = {handleSelectSubCode}/>
      <GetDetailCodeComponent majorCode={selectedMajorCode} subCode={selectedSubCode} />
    </div>
  );
}


const DataTable = () => {
  const [date, setDate] = useState(new Date());

  /* fetch << 여기에 뭘 넣을꺼냐? th 태그의 value 값을 넣고 back 과 통신할거임 ㅋㅋ */

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
          <div className="flex flex-row">
            <ParentComponent />
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