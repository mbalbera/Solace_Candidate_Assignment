import React from 'react';

const NoResultsRow = (): JSX.Element => {
  return (
    <tr className="text-center py-16">
      <td colSpan={7} className="text-gray-500 py-8 text-lg">No advocates found. Please broaden your search.</td>
    </tr>
  );
};

export default NoResultsRow;

