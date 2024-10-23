import { IVoter } from "@interface/vote";
import { FC, memo } from "react";
interface ViewProps {
  listVoter: IVoter[];
  isLoading: boolean;
}

const View: FC<ViewProps> = ({ listVoter, isLoading }) => {
  return (
    <>
      <div className="mt-24 flex items-center mx-3 justify-center">
        <div className="bg-blue-200 rounded-md">
          <h2 className="mb-3 text-center font-bold text-xl">Voter Status</h2>
          {isLoading ? (
            <>
              <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-4 w-full mb-4"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {listVoter.map((e, i) => {
                    return (
                      <tr>
                        <th>{i + 1}</th>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.voteStatus ? "Voted" : "Not Yet Voted"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(View);
