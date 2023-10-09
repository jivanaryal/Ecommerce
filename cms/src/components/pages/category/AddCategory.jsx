import { Formik, Field, Form } from "formik";

const AddCategory = () => {
  const formField = [
    {
      name: "category_id",
      type: "number",
      label: "Category ID",
    },
    {
      name: "category_name",
      type: "text",
      label: "Category Name",
    },
    {
      name: "sub_category_name",
      type: "text",
      label: "Subcategory Name",
    },
  ];

  const initialValues = {
    category_id: "",
    category_name: "",
    sub_category_name: "",
  };

  return (
    <div className="flex items-center justify-center max-h-screen">
      <div className="w-6/10 p-6 border rounded-lg shadow-lg bg-white">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            {formField.map((field) => (
              <div key={field.name} className="mb-4">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label || field.name}
                </label>
                <Field
                  name={field.name}
                  type={field.type}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddCategory;
