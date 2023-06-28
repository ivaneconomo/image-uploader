import image from '../../assets/image.svg';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (event) => {
    setUploading(true);
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleDrop = (event) => {
    setUploading(true);
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedImage(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (selectedImage) {
      setUploading(true);
      // Simulación de carga de imagen (puedes reemplazarlo con tu lógica de carga real)
      setTimeout(() => {
        setUploading(false);
      }, 2000);
    }
  }, [selectedImage]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-between bg-slate-100'>
      <span></span>
      {uploading ? (
        <Loader />
      ) : (
        <div className='shrink-1 flex flex-col items-center justify-center space-y-8 rounded-xl bg-slate-50 p-8 text-center shadow-[0_4px_12px_#0000001a]'>
          <div className='space-y-4'>
            <h1 className='text-3xl'>Upload your image</h1>
            <p className='text-gray-500/70'>File should be Jpeg, Png,...</p>
          </div>

          <div
            className='flex flex-col items-center space-y-8 rounded-xl border border-dashed border-blue-500/50 bg-slate-200/60 p-8'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <img
              alt='Group'
              src={selectedImage ? URL.createObjectURL(selectedImage) : image}
            />
            <p className='text-lg text-gray-500/50'>
              Drag &amp; Drop your image here
            </p>
          </div>

          <div className='flex flex-col space-y-4'>
            <span className='text-gray-500/80'>Or</span>

            <label
              htmlFor='uploadFile'
              className='rounded-xl bg-blue-500 px-6 py-2 text-white'
            >
              <span>Choose a file</span>
              <input
                id='uploadFile'
                className='sr-only'
                type='file'
                onChange={handleFileSelect}
              />
            </label>
          </div>
        </div>
      )}
      <footer className=''>
        <p className='text-gray-500/50'>
          <span>created by </span>
          <a
            className='underline transition-colors hover:text-blue-500 active:text-blue-400'
            target='_blank'
            href='https://devchallenges.io/portfolio/ivaneconomo'
            rel='noreferrer'
          >
            ivaneconomo
          </a>
          <span> - devChallenges.io</span>
        </p>
      </footer>
    </div>
  );
};

export default ImageUploader;
