"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Briefcase, User, BookOpen } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-gray-600">
            Manage your portfolio content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/admin/bio">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <User className="text-blue-600" size={32} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Bio & Resume</h2>
              <p className="text-gray-600">
                Edit your personal information, work experience, education, and skills
              </p>
            </div>
          </Link>

          <Link href="/admin/projects">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <Briefcase className="text-green-600" size={32} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Projects</h2>
              <p className="text-gray-600">
                Add, edit, or delete your project portfolio
              </p>
            </div>
          </Link>

          <Link href="/admin/essays">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="text-purple-600" size={32} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Essays</h2>
              <p className="text-gray-600">
                Write and manage your blog posts and essays
              </p>
            </div>
          </Link>

          <Link href="/admin/files">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <FileText className="text-orange-600" size={32} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Files & Images</h2>
              <p className="text-gray-600">
                Upload and manage images and files
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">📝 How to Use</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• <strong>Bio & Resume:</strong> Edit `_data/bio.json` to update your personal information</li>
            <li>• <strong>Projects:</strong> Add/edit markdown files in the `projects/` folder</li>
            <li>• <strong>Essays:</strong> Add/edit markdown files in the `essays/` folder</li>
            <li>• <strong>Images:</strong> Upload images to the `img/` folder and reference them in your content</li>
          </ul>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => window.open('https://github.com/dmadhitama/dmadhitama.github.io', '_blank')}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              View on GitHub
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Preview Site
            </button>
            <button
              onClick={() => alert('Build and deploy your site using: npm run build')}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Build & Deploy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
