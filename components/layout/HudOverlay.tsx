export function HUDOverlay() {
  return (
    <>
      <div className="fixed inset-0 hex-grid z-0 opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 scanline z-50 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-secondary-container/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary-container/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>
    </>
  );
}
