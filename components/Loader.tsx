// components/Loader.tsx

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-white text-2xl animate-pulse">
        Loading...
      </div>
    </div>
  );
}