import { Formik } from "formik";
import { PostModel } from "../entities/posts";
import * as yup from "yup";

interface PropsPost {
  action: string;
  postItem: PostModel | undefined;
  handleSubmit: (values: PostModel) => void;
}

const AddPosts: React.FC<PropsPost> = ({ action, postItem, handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        title: postItem ? postItem.title : "",
        body: postItem ? postItem.body : "",
      }}
      validationSchema={yup.object({
        title: yup.string().required("Title Is Required"),
        body: yup.string().required("Body is Required"),
      })}
      onSubmit={(values: PostModel) => handleSubmit(values)}
    ></Formik>
  );
};
