/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import { FormPrompt } from "../FormPrompt";

const Education = forwardRef((props, ref) => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { isDirty },
  } = useForm({ defaultValues: state });

  const saveData = (data) => {
    setState({ ...state, ...data });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} nextStep={"/about"}>
      <FormPrompt hasUnsavedChanges={isDirty} />
      <fieldset>
        <legend>Education</legend>
        <Field label="University">
          <Input {...register("university")} id="university" />
        </Field>
        <Field label="Degree">
          <Input {...register("degree")} id="degree" />
        </Field>
        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/">
            {"<"} Previous
          </Link>
          <Button ref={ref}>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
});

export default Education;
