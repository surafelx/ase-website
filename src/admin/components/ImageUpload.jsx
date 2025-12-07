import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';

const ImageUpload = ({ projectId, onUploadSuccess, existingImages = [] }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef(null);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);

    // Validate files
    const validFiles = selectedFiles.filter(file => {
      if (!file.type.startsWith('image/')) {
        setError(`${file.name} is not an image file`);
        return false;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError(`${file.name} is too large (max 5MB)`);
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      setError('');
    }
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', `projects/${projectId}`);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    return response.json();
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    if (!cloudName || !uploadPreset) {
      setError('Cloudinary configuration missing. Please check environment variables.');
      return;
    }

    setUploading(true);
    setError('');
    setSuccess('');
    setUploadProgress({});

    try {
      const uploadPromises = files.map(async (file, index) => {
        const result = await uploadToCloudinary(file);
        setUploadProgress(prev => ({
          ...prev,
          [index]: 100
        }));
        return {
          url: result.secure_url,
          public_id: result.public_id,
          filename: file.name,
          alt: file.name
        };
      });

      const uploadedImages = await Promise.all(uploadPromises);

      // Get existing projects from localStorage
      const projects = JSON.parse(localStorage.getItem('projects') || '[]');
      const projectIndex = projects.findIndex(p => p._id === projectId);

      if (projectIndex !== -1) {
        // Add new images to existing project
        const existingImgs = projects[projectIndex].images || [];
        projects[projectIndex].images = [...existingImgs, ...uploadedImages];
        localStorage.setItem('projects', JSON.stringify(projects));
      }

      setSuccess(`${files.length} image${files.length > 1 ? 's' : ''} uploaded successfully`);
      setFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      onUploadSuccess && onUploadSuccess(uploadedImages);
    } catch (error) {
      setError('Upload failed. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (imageIndex) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      // Get existing projects from localStorage
      const projects = JSON.parse(localStorage.getItem('projects') || '[]');
      const projectIndex = projects.findIndex(p => p._id === projectId);

      if (projectIndex !== -1 && projects[projectIndex].images) {
        projects[projectIndex].images.splice(imageIndex, 1);
        localStorage.setItem('projects', JSON.stringify(projects));
        onUploadSuccess && onUploadSuccess();
        setSuccess('Image deleted successfully');
      }
    } catch (error) {
      setError('Delete failed');
    }
  };

  return (
    <div className="space-y-4">
      {/* Upload Section */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <div className="text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4">
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Upload project images
              </span>
              <span className="mt-1 block text-sm text-gray-500">
                PNG, JPG, GIF up to 5MB each
              </span>
            </label>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              ref={fileInputRef}
              disabled={uploading}
            />
          </div>
        </div>
      </div>

      {/* Selected Files Preview */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Selected Files:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file, index) => (
              <div key={index} className="relative border rounded-lg p-2">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-full h-24 object-cover rounded"
                />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-600 truncate">{file.name}</span>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700"
                    disabled={uploading}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {uploadProgress[index] && (
                  <div className="mt-1 bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-blue-600 h-1 rounded-full"
                      style={{ width: `${uploadProgress[index]}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full"
          >
            {uploading ? 'Uploading...' : `Upload ${files.length} Image${files.length > 1 ? 's' : ''}`}
          </Button>
        </div>
      )}

      {/* Existing Images */}
      {existingImages.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Current Images:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {existingImages.map((image, index) => (
              <div key={index} className="relative border rounded-lg p-2">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-24 object-cover rounded"
                />
                <div className="mt-2">
                  <p className="text-xs text-gray-600 truncate" title={image.alt}>
                    {image.alt}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {image.filename}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  title="Delete image"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      {error && (
        <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-sm text-red-700">{error}</span>
        </div>
      )}

      {success && (
        <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
          <span className="text-sm text-green-700">{success}</span>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;