"use client";

import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

export default function AdminEssaysPage() {
  const essays = [
    { id: "difficulty", title: "The difficult things will always be difficult" },
    { id: "smart-questions", title: "Smart Questions, Good Answers" },
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
            <h1 className="text-3xl font-bold text-gray-900">Manage Essays</h1>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Plus size={20} />
              New Essay
            </button>
          </div>

          <div className="space-y-4">
            {essays.map((essay) => (
              <div
                key={essay.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{essay.title}</h3>
                  <p className="text-sm text-gray-500">essays/{essay.id}.md</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                    <Edit size={20} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">💡 Instructions</h3>
            <p className="text-purple-800 text-sm mb-2">
              To add or edit essays, create/modify markdown files in the <code className="bg-purple-100 px-2 py-1 rounded">essays/</code> folder.
            </p>
            <p className="text-purple-800 text-sm">
              Each essay file should have frontmatter with: title, date, published, and labels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
