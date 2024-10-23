import { FC, memo } from "react";
import { ICandidates } from "../vote";
interface ViewProps {
  listCandidates: ICandidates[];
}

const View: FC<ViewProps> = ({ listCandidates }) => {
  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <div className="bg-blue-200 p-5 rounded-md">
          <h2 className="mb-3 text-center font-bold text-xl">Candidates</h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Visi</th>
                  <th>Misi</th>
                  <th>Jumlah Vote</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {listCandidates.map((e, i) => {
                  return (
                    <tr>
                      <th>{i + 1}</th>
                      <td>{e.name}</td>
                      <td>{e.visi}</td>
                      <td>{e.misi}</td>
                      <td>{e.voteCount}</td>
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
