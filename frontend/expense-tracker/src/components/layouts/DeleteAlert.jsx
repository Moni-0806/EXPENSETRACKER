import React from "react";

const DeleteAlert = ({ content, onDelete, onCancel, confirmText = "Yes, Delete", cancelText = "Cancel" }) => {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-6">{content}</p>
      <div className="flex justify-end gap-3">
        <button
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          onClick={onCancel}
        >
          {cancelText}
        </button>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
          onClick={onDelete}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
