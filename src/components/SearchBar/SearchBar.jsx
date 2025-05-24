import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    const trimmedQuery = values.query.trim();
    if (!trimmedQuery) {
      toast.error("Please enter your request");
      return;
    }
    handleChangeQuery(trimmedQuery);

    options.resetForm();
  };
  return (
    // <header>
    //   <form
    //     className={s.wrapper}
    //     onSubmit={handleSubmit}
    //     initialValues={initialValues}
    //   >
    //     <input
    //       className={s.input}
    //       type="text"
    //       autocomplete="off"
    //       autofocus
    //       placeholder="Search images and photos"
    //     />
    //     <button className={s.button} type="submit">
    //       Search
    //     </button>
    //   </form>
    // </header>

    <header className={s.wrapper}>
      <form></form>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            name="query"
            className={s.input}
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
