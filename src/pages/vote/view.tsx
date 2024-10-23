import { FC, memo } from "react";
import { ICandidates } from ".";
import useWindowDimensions from "@utils/get_window";
import Confetti from "react-confetti";
interface ViewProps {
  listCandidates: ICandidates[];
  voteStatus: boolean;
  onRevote: () => void;
  onVote: (id: string) => void;
  isLoading: boolean;
  published: boolean;
}

const View: FC<ViewProps> = ({
  listCandidates,
  voteStatus,
  onRevote,
  onVote,
  isLoading,
  published,
}) => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {voteStatus && published && <Confetti width={width} height={height} />}
      {/* Page content here */}
      <div className="mt-24 flex items-center justify-center">
        <div className="bg-blue-200 md:px-1 py-5  rounded-md mx-auto md:m-3">
          <h2 className="mb-3 text-center font-bold text-xl">
            VOTE{voteStatus && published && " RESULT"}
          </h2>
          {voteStatus ? (
            published ? (
              <div className="gap-y-4">
                <div className="mb-4 px-5">
                  <p className="text-center">Congratulation</p>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div className="card bg-base-100 w-96 shadow-xl m-3">
                    <figure className="px-10 pt-10">
                      <img
                        src={"https://placehold.co/400"}
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title"> {"Abdul"}</h2>
                      <div className="collapse collapse-open">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium pr-0">
                          Visi dan Misi
                        </div>
                        <div className="collapse-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="gap-y-4">
                  <div className="mb-4 px-5">
                    <p className="text-center">You already voted</p>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <button className="btn text-center" onClick={onRevote}>
                      Re Vote
                    </button>
                  </div>
                </div>
              </>
            )
          ) : (
            <div className="container mx-auto md:flex md:flex-row">
              {listCandidates.map((e, i) => {
                return (
                  <div className="card bg-base-100 w-96 shadow-xl m-3">
                    <figure className="px-10 pt-10">
                      <img
                        src={e.img}
                        alt={i.toString()}
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title"> {i + 1 + ". " + e.name}</h2>
                      <div className="collapse collapse-open">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium pr-0">
                          Visi dan Misi
                        </div>
                        <div className="collapse-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </div>
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
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(View);
