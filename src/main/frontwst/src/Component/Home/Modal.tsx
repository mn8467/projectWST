import React, {useState} from 'react';
import Datepicker from "tailwind-datepicker-react"


const DemoComponent = () => {
  const [show, setShow] = useState(false); // 모달 창의 표시 여부를 관리하는 상태
  const handleChange = (selectedDate) => {
    console.log(selectedDate); // 선택된 날짜를 콘솔에 출력하는 함수
  };
  const handleClose = (state) => {
    setShow(state); // 모달 창의 표시 여부를 변경하는 함수
  };

  const options = {
	title: "Demo Title",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-gray-700 dark:bg-gray-800",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-red-500",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span>Previous</span>,
		next: () => <span>Next</span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date("2022-01-01"),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "numeric",
		year: "numeric"
	}
}
  return (
    <div>
      {/* Datepicker 컴포넌트를 사용하여 날짜 선택 */}
      <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
    </div>
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
          <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2">날짜</th>
              <th className="border border-gray-200 px-4 py-2">품목</th>    {/* 여기서 Foreach로 드롭박스? */}
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
            <td id="date" className=""  ></td>
           </tr>
          </tbody>
        </table>
            {/* 버튼 그룹 */}
            <div className="flex justify-end">
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