import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
// import { Label } from '../components/ui/label';
import { Upload, Trash2, Eye } from 'lucide-react';

const Gallery = () => {
  const [images, setImages] = useState([
    { id: 1, name: 'Project Image 1', url: '/assets/projects/amhara/amhara-1.jpg' },
    { id: 2, name: 'Project Image 2', url: '/assets/projects/diredawa/diredawa-1.png' },
  ]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = {
        id: Date.now(),
        name: file.name,
        url: URL.createObjectURL(file),
      };
      setImages([...images, newImage]);
    }
  };

  const handleDelete = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Media Gallery</h1>
        <p className="text-gray-600">Manage your project images and media files</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Upload New Image</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="image-upload">Select Image</Label>
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="mt-1"
              />
            </div>
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload Image
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gallery Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="border rounded-lg p-4">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <p className="text-sm font-medium mb-2">{image.name}</p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(image.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;