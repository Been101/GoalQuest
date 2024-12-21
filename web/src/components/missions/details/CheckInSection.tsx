import React from 'react';
import { Clock } from 'lucide-react';

const CheckInSection = () => {
  const hasCheckedIn = false;
  const remainingTime = '14:30:45'; // This would be calculated in a real app

  return (
    <div className="bg-indigo-900/50 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Daily Check-in</h2>
        {!hasCheckedIn && (
          <div className="flex items-center text-purple-200">
            <Clock className="w-4 h-4 mr-2" />
            <span>{remainingTime} remaining</span>
          </div>
        )}
      </div>
      
      {hasCheckedIn ? (
        <div className="text-center py-4">
          <div className="text-green-400 font-semibold mb-2">✓ You've checked in today!</div>
          <p className="text-purple-200">Keep up the great work! See you tomorrow.</p>
        </div>
      ) : (
        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-full font-semibold transition-colors">
          Check In Now
        </button>
      )}
    </div>
  );
};

export default CheckInSection;