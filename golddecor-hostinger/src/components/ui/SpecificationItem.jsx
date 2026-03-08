import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SpecificationItem = ({ label, value }) => {
  return (
    <div className="flex items-start gap-3 py-2 border-b border-gray-800">
      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <span className="text-gray-400 text-sm">{label}:</span>
        <span className="text-white ml-2 font-medium">{value}</span>
      </div>
    </div>
  );
};

export default SpecificationItem;