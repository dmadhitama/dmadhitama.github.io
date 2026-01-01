"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function AdminBioPage() {
  const [bioData, setBioData] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/_data/bio.json")
      .then((res) => res.text())
      .then((data) => setBioData(data))
      .catch(() => setMessage("Could not load bio.json"));
  }, []);

  const handleSave = () => {
    setMessage("⚠️ To save changes, edit the file directly at: _data/bio.json");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Admin
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Bio & Resume</h1>

          {message && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
              {message}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio JSON Data
            </label>
            <textarea
              value={bioData}
              onChange={(e) => setBioData(e.target.value)}
              className="w-full h-96 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              placeholder="Loading bio.json..."
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save size={20} />
              Save Changes
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Preview
            </Link>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Instructions</h3>
            <p className="text-blue-800 text-sm">
              Edit the JSON data above to update your bio, work experience, education, skills, and interests.
              To save changes permanently, edit the file at <code className="bg-blue-100 px-2 py-1 rounded">_data/bio.json</code> in your project directory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
