/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react";

export const Button = forwardRef(
  ({ children, variant = "primary", ...props }, ref) => {
    const buttonRef = useRef();

    useImperativeHandle(ref, () => ({
      click: () => buttonRef.current?.click(),
    }));

    return (
      <button className={`btn btn-${variant}`} ref={buttonRef} {...props}>
        {children}
      </button>
    );
  }
);
