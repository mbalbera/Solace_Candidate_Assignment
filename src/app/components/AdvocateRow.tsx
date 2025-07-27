import React from 'react';
import { Advocate } from '../types/Advocate';
import phoneNumberCleanup from '../utils/phoneNumberCleanup';

const AdvocateRow = ({ advocate }: { advocate: Advocate }): JSX.Element => {
  return (
    <tr className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="px-4 py-2">{advocate.firstName}</td>
      <td className="px-4 py-2">{advocate.lastName}</td>
      <td className="px-4 py-2">{advocate.city}</td>
      <td className="px-4 py-2">{advocate.degree}</td>
      <td className="px-4 py-2">
        {advocate.specialties.map((s, i) => (
          <span
            key={i}
            className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1"
          >
            {s}
          </span>
        ))}
      </td>
      <td className="px-4 py-2">{advocate.yearsOfExperience}</td>
      <td className="px-4 py-2">{phoneNumberCleanup(advocate.phoneNumber)}</td>
    </tr>
  );
};

export default AdvocateRow;