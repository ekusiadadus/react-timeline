import { Fragment } from "react";

export const TimeLine = ({
  events,
}: {
  events: {
    heading: string;
    subHeading: string;
    direction: string;
  }[];
}) => {
  return (
    <div className="flex flex-col gap-y-3 w-full my-4">
      <Circle />

      {events.map((event, key) => {
        return (
          <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
              {event.direction === "left" ? (
                <EventCard
                  heading={event.heading}
                  subHeading={event.subHeading}
                />
              ) : (
                <div />
              )}

              <Pillar />

              {event.direction === "right" ? (
                <EventCard
                  heading={event.heading}
                  subHeading={event.subHeading}
                />
              ) : (
                <div />
              )}
            </div>

            {key !== events.length - 1 && <Circle />}
          </Fragment>
        );
      })}

      <Circle />
    </div>
  );
};

const Circle = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-4 h-4 bg-blue-500 mx-auto" />
  );
};

const Pillar = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-teal-500 rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto" />
  );
};

const EventCard = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
      <div className="text-blue-800 font-bold text-lg border-b">{heading}</div>
      <div className="text-sm text-gray-700">{subHeading}</div>
    </div>
  );
};

export default TimeLine;
