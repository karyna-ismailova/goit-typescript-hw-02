import s from "./LoadMoreBtn.module.css";
type Props = {
  onLoadMore: () => void;
};

const LoadMoreBtn = ({ onLoadMore }: Props) => {
  return (
    <div>
      <button className={s.button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
