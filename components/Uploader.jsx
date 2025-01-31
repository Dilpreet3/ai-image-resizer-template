import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Uploader({ onProcess }) {
  const onDrop = useCallback(files => {
    files.forEach(processImage);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  return (
    <div {...getRootProps()} className="upload-zone">
      <input {...getInputProps()} />
      <p>Drag & drop images or click to upload</p>
    </div>
  );
}
