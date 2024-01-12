import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  age: Yup.number().typeError("Age must be a number").required().label("Age"),
  date: Yup.date().typeError("Date must be a date").required().label("Date"),
  gender: Yup.string()
    .oneOf(["male", "female"], "Invalid Gender Value")
    .required()
    .label("Gender"),
  department: Yup.string()
    .oneOf(["bsc", "bba", "ba"], "Invalid Department Value")
    .required()
    .label("Department"),
  skills: Yup.array(
    Yup.string().oneOf([
      "javascript",
      "typescript",
      "html",
      "css",
      "react",
      "redux",
      "node",
      "express",
      "mongodb",
    ])
  )
    .min(1)
    .max(3)
    .required()
    .label("Skills"),
  eyeColor: Yup.string().required().label("Eye Color"),
});

const BasicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "Mehedi Hasan ",
      age: 23,
    },
  });

  const handleOnSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="shadow-md rounded p-5 max-w-3xl ">
      <h4 className="mb-3 text-2xl font-medium"> Basic Form</h4>

      <form
        action=""
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="p-2 border"
            placeholder="Your Name"
          />
          <ErrorMessage
            errors={errors}
            name={"name"}
            render={(m) => <p className="text-red-700">{m.message}</p>}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              {...register("email")}
              className="p-2 border"
              placeholder="Your email"
            />
            <ErrorMessage
              errors={errors}
              name={"email"}
              render={(m) => <p className="text-red-700">{m.message}</p>}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              {...register("age", { valueAsNumber: true })}
              className="p-2 border"
              placeholder="Your Age"
            />
            <ErrorMessage
              errors={errors}
              name={"age"}
              render={(m) => <p className="text-red-700">{m.message}</p>}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              {...register("date", { valueAsDate: true })}
              className="p-2 border"
              placeholder=" Date"
            />
            <ErrorMessage
              errors={errors}
              name={"date"}
              render={(m) => <p className="text-red-700">{m.message}</p>}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="gender">Gender</label>
            <select id="gender" className="p-2 border" {...register("gender")}>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <ErrorMessage
              errors={errors}
              name={"gender"}
              render={(m) => <p className="text-red-700">{m.message}</p>}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="department">Department</label>

          <div className="flex gap-3">
            <div className="flex items-center">
              <input
                type="radio"
                value="bsc"
                {...register("department")}
                id="bsc"
                className="p-2 border"
              />
              <label htmlFor="bsc" className="p-2 ">
                BSC
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="bba"
                {...register("department")}
                id="bba"
                className="p-2 border"
              />
              <label htmlFor="bba" className="p-2 ">
                BBA
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="ba"
                {...register("department")}
                id="ba"
                className="p-2 border"
              />
              <label htmlFor="ba" className="p-2 ">
                BA
              </label>
            </div>
          </div>

          <ErrorMessage
            errors={errors}
            name={"department"}
            render={(m) => <p className="text-red-700">{m.message}</p>}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="department">Skills</label>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                value="javascript"
                {...register("skills")}
                id="javascript"
                className="p-2 border"
              />
              <label htmlFor="javascript" className="p-2 ">
                Javascript
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                value="typescript"
                {...register("skills")}
                id="typescript"
                className="p-2 border"
              />
              <label htmlFor="typescript" className="p-2 ">
                Typescript
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                value="html"
                {...register("skills")}
                id="html"
                className="p-2 border"
              />
              <label htmlFor="html" className="p-2 ">
                HTML
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                value="css"
                {...register("skills")}
                id="css"
                className="p-2 border"
              />
              <label htmlFor="css" className="p-2 ">
                CSS
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                value="react"
                {...register("skills")}
                id="react"
                className="p-2 border"
              />
              <label htmlFor="react" className="p-2 ">
                React
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                value="redux"
                {...register("skills")}
                id="redux"
                className="p-2 border"
              />
              <label htmlFor="redux" className="p-2 ">
                Redux
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                value="node"
                {...register("skills")}
                id="node"
                className="p-2 border"
              />
              <label htmlFor="node" className="p-2 ">
                Node
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                value="express"
                {...register("skills")}
                id="express"
                className="p-2 border"
              />
              <label htmlFor="express" className="p-2 ">
                Express
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                value="mongodb"
                {...register("skills")}
                id="mongodb"
                className="p-2 border"
              />
              <label htmlFor="mongodb" className="p-2 ">
                Mongodb
              </label>
            </div>
          </div>

          <ErrorMessage
            errors={errors}
            name={"skills"}
            render={(m) => <p className="text-red-700">{m.message}</p>}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="eyeColor">Eye Color</label>
          <input
            type="color"
            id="eyeColor"
            {...register("eyeColor")}
            className=" "
          />
          <ErrorMessage
            errors={errors}
            name={"eyeColor"}
            render={(m) => <p className="text-red-700">{m.message}</p>}
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
