import React from "react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          🎉 Login Successful!
        </h1>
        <p className="text-gray-600">Welcome to your dashboard.</p>
      </div>
    </div>
  );
}
