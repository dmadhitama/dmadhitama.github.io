"use client";

import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

export default function AdminProjectsPage() {
  const projects = [
    { id: "ai_vis_inspect", title: "AI-based Automatic Visual Inspection Machine" },
    { id: "asr", title: "Automatic Speech Recognition" },
    { id: "blood_cell", title: "Blood Cell Classification" },
  ];

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
            <h1 className="text-3xl font-bold text-gray-900">Manage Projects</h1>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={20} />
              New Project
            </button>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-500">projects/{project.id}.md</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit size={20} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Instructions</h3>
            <p className="text-blue-800 text-sm mb-2">
              To add or edit projects, create/modify markdown files in the <code className="bg-blue-100 px-2 py-1 rounded">projects/</code> folder.
            </p>
            <p className="text-blue-800 text-sm">
              Each project file should have frontmatter with: title, date, published, image, labels, and summary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
