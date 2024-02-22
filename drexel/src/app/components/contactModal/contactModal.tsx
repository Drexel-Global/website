import React from "react";
import styles from "./contactModal.module.scss";
import { useForm, Controller } from "react-hook-form";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

// components:
import BallSpinner from "../loaders/ballSpinner";

const EmailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

type LoginFormValues = {
  email: string;
  subject: string;
  message: string;
  serverError: string;
  success: string;
  isCaptchaSolved: boolean;
};

type modalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Function;
};

export const ContactModal = ({ isModalOpen, setIsModalOpen }: modalProps) => {
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
      isCaptchaSolved: false,
    },
  });
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const onSubmit = (data: any) => {
    const payload = {
      ...data,
    };
    console.log("PAYLOAD: ", payload);
    console.log(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      payload,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );
    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID &&
      payload &&
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          payload,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then((res) => {
          console.log("RES .THEN: ", res);
          setError("success", {
            type: "manual",
            message:
              "Your email was recieved! Please, give us a few business days and a member of the team will respond back to you. Thank you.",
          });
        })
        .catch((err) => {
          console.log("CATCH: ", err);
          setError("serverError", {
            type: "manual",
            message: err?.response?.data.error
              ? `${err?.response?.data.error}`
              : "An issue occurred. Please try again later or contact us at izharshefer@gmail.com.",
          });
        });
    }
  };

  const onReCAPTCHAChange = (captchaCode: string | null) => {
    console.log("CODE: ", captchaCode);

    if (!captchaCode) {
      return;
    }

    try {
      axios
        .post("/api/captcha", {
          captcha: captchaCode,
        })
        .then((res) => {
          console.log("CAPTCHA RES: ", res);
          setValue("isCaptchaSolved", true);
        })
        .catch((err) => {
          setValue("isCaptchaSolved", false);
        });
    } catch (error) {
      setValue("isCaptchaSolved", false);
    }
  };

  const resetForm = () => {
    reset();
  };

  const isCaptchaSolved: boolean = watch("isCaptchaSolved");

  if (
    errors?.serverError?.message === undefined &&
    errors?.success?.message === undefined
  ) {
    return (
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, top: "40%" }}
        whileInView={{ opacity: 1, top: "50%" }}
      >
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.closeContainer}>
            <CldImage
              onClick={toggleModal}
              className={styles.closeBtn}
              src="drexel-finance-website/landing/e5xv3xlnwtzcwzpgmaxe"
              width={50}
              height={50}
              //   fill={true}
              alt="tall buildings in financial district"
              //   priority={true}
              sizes="(max-width: 1201px) 100vw"
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Email</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required:
                  "email cannot be empty and must include @ email provider dot com",
                pattern: {
                  value: EmailRegex,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => <input {...field} />}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label>Subject</label>
            <Controller
              name="subject"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => <input {...field} />}
            />
            {errors.subject && (
              <p className={styles.error}>{errors.subject.message}</p>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label>Message</label>
            <Controller
              name="message"
              control={control}
              rules={{
                required: "This field is required",
                minLength: {
                  value: 1,
                  message: "must be at least 1 character long",
                },
                maxLength: {
                  value: 1500,
                  message: "must not exceed 1500 characters",
                },
              }}
              render={({ field }) => (
                <textarea className={styles.textarea} {...field} />
              )}
            />
            {errors.message && (
              <p className={styles.error}>{errors.message.message}</p>
            )}
          </div>
          <div className={styles.btnContainer}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                  ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
                  : process.env.RECAPTCHA_SITE_KEY!
              }
              onChange={onReCAPTCHAChange}
            />
            {isSubmitting ? (
              <BallSpinner />
            ) : (
              <button
                id={styles.submitBtn}
                disabled={isCaptchaSolved ? false : true}
                className={`${
                  isCaptchaSolved ? styles.enabledBtn : styles.disabledBtn
                }`}
                type="submit"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </motion.div>
    );
  }
  if (
    errors?.serverError?.message !== undefined &&
    errors?.serverError?.message.length > 0
  ) {
    return (
      <div className={styles.errorContainer}>
        <p id={styles.serverError}>
          {errors.serverError && errors.serverError.message}
        </p>
        <div className={styles.btnContainer}>
          <button className={styles.reset} type="button" onClick={resetForm}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  if (
    errors?.success?.message !== undefined &&
    errors?.success?.message.length > 0
  ) {
    return (
      <div className={styles.errorContainer}>
        <p id={styles.success}>{errors.success && errors.success.message}</p>
        <div className={styles.btnContainer}>
          <button className={styles.reset} type="button" onClick={resetForm}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  return <></>;
};
