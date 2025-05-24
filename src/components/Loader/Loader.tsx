import { ClipLoader } from "react-spinners";

type Props = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: Props) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <ClipLoader color="rgb(255, 222, 241)" loading={isLoading} size={50} />
    </div>
  );
};
export default Loader;
