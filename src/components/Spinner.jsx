const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <span className="loading loading-infinity loading-xs"></span>
        <span className="loading loading-infinity loading-sm"></span>
        <span className="loading loading-infinity loading-md"></span>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    </div>
  );
};

export default Spinner;
