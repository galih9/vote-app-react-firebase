import { FC, memo } from "react";
import { IVoter } from ".";
import useWindowDimensions from "../../utils/get_window";
interface ViewProps {
  listVoter: IVoter[];
}

const View: FC<ViewProps> = ({ listVoter }) => {
  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <div className="bg-blue-200 p-5 rounded-md">
          <h2 className="mb-3 text-center font-bold text-xl">Voter Status</h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
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
                {listVoter.map((e,i) => {
                  return (
                    <tr>
                      <th>{i+1}</th>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.voteStatus ? "Voted" : "Not Yet Voted"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(View);
