import { FC, memo } from "react";
import { ICandidates } from ".";
interface ViewProps {
  listCandidates: ICandidates[];
  voteStatus: boolean;
  onRevote: () => void;
  onVote: (id: string) => void;
  isLoading: boolean;
}

const View: FC<ViewProps> = ({
  listCandidates,
  voteStatus,
  onRevote,
  onVote,
  isLoading,
}) => {
  // const { width, height } = useWindowDimensions();
  console.log(voteStatus);
  return (
    <>
      {/* Page content here */}
      <div className="mt-24 flex items-center justify-center">
        <div className="bg-blue-200 p-5 rounded-md">
          <h2 className="mb-3 text-center font-bold text-xl">VOTE</h2>
          {voteStatus ? (
            <>
              <div className="gap-y-4">
                <div className="mb-4">
                  <p className="text-center">You already voted</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <button className="btn text-center" onClick={onRevote}>
                    Re Vote
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-row justify-center gap-4">
              {listCandidates.map((e, i) => {
                return (
                  <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img
                        src={e.img}
                        alt={i.toString()}
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title"> {i + 1 + ". " + e.name}</h2>
                      <p>Visi dan Misi</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                      <div className="card-actions">
                        <button
                          className="btn btn-wide btn-primary text-white"
                          onClick={() => {
                            onVote(e.name);
                          }}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <span className="loading loading-spinner loading-md"></span>
                          ) : (
                            "Vote!"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  // <div className="w-200 ">
                  //   <div className="avatar">
                  //     <div className="w-64 rounded">
                  //       <img className="" src={e.img} alt={i.toString()} />
                  //     </div>
                  //   </div>
                  //   <p className="font-bold text-center">
                  //     {i + 1 + ". " + e.name}
                  //   </p>
                  //   <div className="mt-3">
                  //     <button className="btn btn-wide">Vote!</button>
                  //   </div>
                  // </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* <Confetti
      width={width}
      height={height}
    /> */}
    </>
  );
};

export default memo(View);
