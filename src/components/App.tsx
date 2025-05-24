import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import SearchBar from "./SearchBar/SearchBar";
import { Toaster, toast } from "react-hot-toast";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import { fetchImages } from "../services/api";
import s from "./App.module.css";

const App = () => {
  const [images, setImages] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<any>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: any) => {
    setModalImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    if (!query) return;
    const abortController = new AbortController();

    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page, abortController.signal);
        if (data.results.length === 0) {
          setNotFound(true);
          toast.error("Not found");
        } else {
          setNotFound(false);
        }
        // console.log(data);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error: any) {
        console.log(error);
        if (error.code !== "ERR_CANCELED") {
          setIsError(true);
          toast.error("Try again later...");
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();

    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleChangeQuery = (newQuery: string) => {
    // toast.success(`Query changed to ${newQuery}`);
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setNotFound(false);
  };

  return (
    <div className={s.wrapper}>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar handleChangeQuery={handleChangeQuery} />

      {isError ? (
        <ErrorMessage />
      ) : notFound ? (
        <div></div>
      ) : (
        <ImageGallery
          images={images.filter((item) => item.urls)}
          onImageClick={openModal}
        />
      )}
      {isLoading && <Loader isLoading={isLoading} />}
      {page < totalPages && !isLoading && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        isClose={closeModal}
        image={modalImage}
      />
    </div>
  );
};
export default App;
