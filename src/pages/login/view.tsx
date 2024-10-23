import { FC, memo } from "react";
import { disabledObject } from "@utils/validate";
import { ILogin } from "@interface/auth";
interface ViewProps {
  onLogin: () => void;
  onRegister: () => void;
  form: ILogin;
  setForm: React.Dispatch<React.SetStateAction<ILogin>>;
  isLoading: boolean;
}

const View: FC<ViewProps> = ({
  onLogin,
  onRegister,
  form,
  setForm,
  isLoading,
}) => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-blue-200 p-5 rounded-md">
          <h3 className="mb-3 text-center">Login</h3>
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
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
              type="password"
              minLength={6}
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />
          </label>
          <div className="my-3 text-sm">
            Don't have account?,{" "}
            <a onClick={onRegister} className="text-cyan-500 cursor-pointer">
              Create new account
            </a>
          </div>
          <div className="flex justify-center">
            <button
              className="btn btn-wide"
              disabled={disabledObject(form) || isLoading}
              onClick={onLogin}
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Sign In"
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
