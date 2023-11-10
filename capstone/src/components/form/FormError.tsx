import * as React from "react";
import _get from "lodash/get";
import { useFormContext } from "react-hook-form";

interface FormErrorProps {
  name: string;
}

const FormError: React.FC<FormErrorProps> = ({ name }) => {
  const { formState } = useFormContext();

  return (
    <div>
      {formState.errors[name] && (
        <span
          style={{
            color: "red",
            textAlign: "left",
            fontSize: "12px",
            display: "block",
          }}
        >
          {_get(formState.errors, `${name}.message`, "") as string}
        </span>
      )}
    </div>
  );
};

export default FormError;
