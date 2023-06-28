const Loader = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-slate-100'>
      <div className='flex h-32 w-80 flex-col justify-between rounded-xl bg-slate-50 p-8 shadow'>
        <span className='text-lg font-semibold'>Uploading...</span>
        <div className='h-1.5 overflow-clip rounded-full bg-slate-200'>
          <div className='w-full animate-upload-progress'>
            <div className='h-1.5 w-1/3 rounded-full bg-blue-500'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
