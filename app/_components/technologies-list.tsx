import { Badge } from "./ui/badge";

interface TechnologiesListProps {
  names: string[];
}

const TechnologiesList = ({ names }: TechnologiesListProps) => {
  return (
    <div className="mx-auto mt-14 max-w-4xl space-y-8 px-5">
      <div className="flex flex-wrap justify-center gap-2">
        {names.map((name, index) => (
          <div key={index} className="inline">
            <Badge
              variant="outline"
              className="text-md font-normal border-white/30 px-3 py-1 rounded-lg hover:bg-white/10"
            >
              {name}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesList;
