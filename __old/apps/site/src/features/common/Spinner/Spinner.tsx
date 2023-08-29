const spinnerStyle =
  'from-primary-400 via-accent to-accent shadow-2x h-12 w-12 animate-spin rounded-full bg-gradient-to-r shadow-2xl';

export default function Spinner() {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-30">
      <div className="absolute z-50 h-9 w-9 rounded-full bg-black" />
      <div className={spinnerStyle} />
      <div className={spinnerStyle + ' absolute blur-lg'} />
    </div>
  );
}
