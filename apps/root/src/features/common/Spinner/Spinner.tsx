export default function Spinner() {
  return (
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
      <div className="from-gradient-one via-gradient-two to-accent shadow-2x relative h-12 w-12 animate-spin rounded-full bg-gradient-to-r shadow-2xl">
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
      </div>
    </div>
  );
}
