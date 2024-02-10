import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./DevDetailPage.module.css";
import { createDev } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

type FormValues = {
  name: string;
  dateOfBirth: Date;
  role: string;
  checkbox: boolean;
  radio: string;
};

export const DevDetailPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    createDev({...data, profileUrl: 'https://i.pravatar.cc/150?img=1'}).then(() => {
        navigate(ROUTES.Home)
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      {/* Text Field */}
      <div className={styles.inputField}>
        <input {...register("name", { required: true })} placeholder="Name" />
        {errors.name && (
          <span className={styles.errorMsg}>This field is required</span>
        )}
      </div>

      {/* Date Field */}
      <div className={styles.inputField}>
        <input type="date" {...register("dateOfBirth", { required: true })} />
        {errors.dateOfBirth && (
          <span className={styles.errorMsg}>This field is required</span>
        )}
      </div>

      {/* Dropdown */}
      <div className={styles.selectField}>
        <select {...register("role", { required: true })}>
          <option value="">Select...</option>
          <option value="option1">Front-End Developer</option>
          <option value="option2">Back-End Developer</option>
          <option value="option3">Full-Stack Developer</option>
        </select>
        {errors.role && (
          <span className={styles.errorMsg}>This field is required</span>
        )}
      </div>

      {/* Checkbox */}
      <div className={styles.checkboxContainer}>
        <label>
          <input type="checkbox" {...register("checkbox")} />
          Check me
        </label>
      </div>

      {/* Radio Buttons */}
      <div className={styles.radioContainer}>
        <label>
          <input
            type="radio"
            value="option1"
            {...register("radio", { required: true })}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            {...register("radio", { required: true })}
          />
          Option 2
        </label>
      </div>
      {errors.radio && (
        <span className={styles.errorMsg}>This field is required</span>
      )}

      {/* Submit Button */}
      <div className={styles.submitButton}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
