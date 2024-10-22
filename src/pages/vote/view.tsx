import { FC, memo } from "react";
import { ICandidates } from ".";
interface ViewProps {
  listCandidates: ICandidates[];
}

const View: FC<ViewProps> = ({ listCandidates }) => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-blue-200 p-5 rounded-md">
          <h2 className="mb-3 text-center font-bold text-xl">VOTE</h2>
          <div className="flex flex-row justify-center gap-4">
            {listCandidates.map((e, i) => {
              return (
                <div className="w-200 ">
                  <p className="font-bold">{e.name}</p>
                  <div className="avatar">
                    <div className="w-64 rounded">
                      <img className="" src={e.img} alt={i.toString()} />
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-wide">Vote!</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(View);
