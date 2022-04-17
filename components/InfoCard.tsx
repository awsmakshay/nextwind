type InfoCardProps = {
  title: string;
  value: string;
  icon: React.ReactElement;
};
const InfoCard = ({ icon, title, value }: InfoCardProps) => {
  return (
    <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
      <div className="flex items-center ">
        <div className="grow">
          <p className="mb-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-200">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-600 dark:text-gray-100">
            {" "}
            {value}
          </p>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default InfoCard;
