import { FC, memo } from "react";
import { IVoter } from ".";

interface ViewProps {
  listVoter: IVoter[];
  isLoading: boolean;
  isPublished: boolean;
  setPublished: () => void;
}

const View: FC<ViewProps> = ({
  listVoter,
  isLoading,
  isPublished,
  setPublished,
}) => {
  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <div className="bg-blue-200 p-5 rounded-md">
          <h2 className="mb-3 text-center font-bold text-xl">Setting</h2>
          <ul className="menu bg-base-200 rounded-box w-56">
            <li>
              <a className="justify-between">
                Publish
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <input
                    type="checkbox"
                    className="toggle toggle-md"
                    checked={isPublished}
                    onClick={setPublished}
                  />
                )}
              </a>
            </li>
            <li>
              <a>Manage Candidates</a>
            </li>
            <li>
              <a>Manage Voter</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default memo(View);
