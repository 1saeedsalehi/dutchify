import AppCard from "./AppCard";
import { AppListProps } from "./types/AppListProps";

export default function AppList({ category, items }: AppListProps) {
  return (
    <>
      <div className="mx-auto text-left my-8">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white items-center flex">
          {category}
        </h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {items.map(function (item) {
          return <AppCard app={item} key={item.name} />;
        })}
      </div>
    </>
  );
}
