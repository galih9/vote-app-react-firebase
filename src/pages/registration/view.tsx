import { FC, memo } from "react";
import { disabledObject } from "@utils/validate";
import { IRegister } from "@interface/auth";
interface ViewProps {
  onLogin: () => void;
  onRegister: () => void;
  isRegister: boolean;
  setForm: React.Dispatch<React.SetStateAction<IRegister>>;
  form: IRegister;
}

const View: FC<ViewProps> = ({
  onLogin,
  onRegister,
  isRegister,
  form,
  setForm,
}) => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-blue-200 p-5 rounded-md">
          <h3 className="mb-3 text-center">Registration</h3>
          <label className="input input-bordered flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>

            <input
              type="text"
              className="grow"
              placeholder="Email"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>

            <input
              className="grow"
              placeholder="Password"
              type="text"
              minLength={6}
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>

            <input
              type="text"
              className="grow"
              placeholder="Confirm Password"
              value={form.password2}
              minLength={6}
              onChange={(e) => {
                setForm({ ...form, password2: e.target.value });
              }}
            />
          </label>
          <div className="my-3 text-sm">
            Already have an account?,{" "}
            <a onClick={onRegister} className="text-cyan-500 cursor-pointer">
              Back to Login
            </a>
          </div>
          <div className="flex justify-center">
            <button
              className="btn btn-wide"
              onClick={(e) => {
                e.preventDefault();
                onLogin();
              }}
              disabled={disabledObject(form) || form.password != form.password2}
            >
              {isRegister ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          {/* {listCity.map((e) => {
              return <p>{e}</p>;
            })} */}
        </div>
      </div>
    </>
  );
};

export default memo(View);
