"use client";

import { ArrowLeft, Upload, Image as ImageIcon, File } from "lucide-react";
import Link from "next/link";

export default function AdminFilesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Admin
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">File Manager</h1>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-8">
            <Upload className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Files</h3>
            <p className="text-gray-600 mb-4">
              Drag and drop files here, or click to browse
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Select Files
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <ImageIcon className="text-blue-600 mb-2" size={32} />
              <p className="text-sm font-medium text-gray-900 truncate">project-image.png</p>
              <p className="text-xs text-gray-500">256 KB</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <File className="text-gray-600 mb-2" size={32} />
              <p className="text-sm font-medium text-gray-900 truncate">resume.pdf</p>
              <p className="text-xs text-gray-500">1.2 MB</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <h3 className="font-semibold text-orange-900 mb-2">💡 Instructions</h3>
            <p className="text-orange-800 text-sm mb-2">
              Upload images and files to the <code className="bg-orange-100 px-2 py-1 rounded">img/</code> folder in your project directory.
            </p>
            <p className="text-orange-800 text-sm">
              Reference images in your markdown files using: <code className="bg-orange-100 px-2 py-1 rounded">../img/your-image.png</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
