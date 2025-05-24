import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

type Props = {
  handleChangeQuery: (query: string) => void;
};
type SubmitValues = {
  query: string;
};

const SearchBar = ({ handleChangeQuery }: Props) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values: SubmitValues, options: any) => {
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
