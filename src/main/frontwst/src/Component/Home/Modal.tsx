import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const items = ["Item 1", "Item 2", "Item 3"]; // 드롭다운 목록

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
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              {items.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </td>
          <td className="border border-gray-200 px-4 py-2"></td>
          <td className="border border-gray-200 px-4 py-2"></td>
          <td className="border border-gray-200 px-4 py-2"></td>
          <td className="border border-gray-200 px-4 py-2"></td>
          <td className="border border-gray-200 px-4 py-2"></td>
          <td className="border border-gray-200 px-4 py-2"></td>
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