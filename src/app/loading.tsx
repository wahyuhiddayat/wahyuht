export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div 
        className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black dark:border-white"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
} 