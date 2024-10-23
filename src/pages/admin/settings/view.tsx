import { DailyStars, data, IVoter } from "@interface/vote";
import React from "react";
import { FC, memo } from "react";
import { AxisOptions, Chart } from "react-charts";

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
  const primaryAxis = React.useMemo(
    (): AxisOptions<DailyStars> => ({
      getValue: (datum) => datum.contestant,
      elementType: "bar",
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<DailyStars>[] => [
      { hardMin: 0, getValue: (datum) => datum.stars },
    ],
    []
  );

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
      <div className="w-4/5 h-96 my-8 border border-1 border-emerald-300 rounded-xl mx-3 overflow-x-auto">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            getDatumStyle: (e, i) => {
              return {
                color: e.originalDatum.color,
              };
            },
          }}
        />
      </div>
    </>
  );
};

export default memo(View);
