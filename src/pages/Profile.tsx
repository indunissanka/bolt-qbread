import React from 'react';
import { useAuth } from '../hooks/useAuth';

export function Profile() {
  const { profile, isAdmin, loading, error, login, logout } = useAuth();

  if (error) {
    return (
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 p-4 rounded-md">
          <p className="text-red-700">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {profile ? (
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            {profile.pictureUrl && (
              <img
                src={profile.pictureUrl}
                alt={profile.displayName}
                className="h-16 w-16 rounded-full"
              />
            )}
            <div className="ml-4">
              <h2 className="text-xl font-bold text-gray-900">{profile.displayName}</h2>
              {profile.statusMessage && (
                <p className="text-gray-500">{profile.statusMessage}</p>
              )}
              {isAdmin && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 mt-2">
                  Admin
                </span>
              )}
            </div>
          </div>
          <button
            onClick={logout}
            className="mt-6 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Sweet Home Bakery</h2>
          <p className="text-gray-500 mb-6">Please login with your LINE account to continue</p>
          <button
            onClick={login}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
          >
            Login with LINE
          </button>
        </div>
      )}
    </div>
  );
}
