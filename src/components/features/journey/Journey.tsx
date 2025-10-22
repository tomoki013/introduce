import { Journeys } from "@/types/types";

interface JourneyProps {
  journeys: Journeys[];
  title: string;
  borderClassName?: string;
  categoryClassName?: string;
}

export default function Journey({
  journeys,
  title,
  borderClassName,
  categoryClassName,
}: JourneyProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className={`mt-6 border-l-2 pl-6 ${borderClassName || ""}`}>
        {journeys.map((journey, index) => (
          <div key={index} className="relative mb-8">
            <div className="absolute -left-[calc(1.5rem+2px)] top-1 flex h-full items-start">
              <div
                className={`h-4 w-4 rounded-full border-2 bg-background ${
                  borderClassName || ""
                }`}
              />
            </div>
            <div className="ml-4">
              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  categoryClassName || ""
                }`}
              >
                {journey.category}
              </span>
              <h3 className="mt-2 font-bold text-foreground">
                {journey.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {journey.description}
              </p>
              <p className="text-sm text-muted-foreground">{journey.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
