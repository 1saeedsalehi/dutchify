import { getAllPostsWithFrontMatter } from "@/lib/mdx";
import AppList from "../../components/AppList";

export async function getStaticProps() {
  const applications = await getAllPostsWithFrontMatter("apps");

  function groupBy<T>(arr: T[], fn: (item: T) => any) {
    return arr.reduce<Record<string, T[]>>((prev, curr) => {
      const groupKey = fn(curr);
      const group = prev[groupKey] || [];
      group.push(curr);
      return { ...prev, [groupKey]: group };
    }, {});
  }

  const grouppedApp = groupBy(applications, (property) => property.data.category);

  return { props: { apps: grouppedApp } };
}

export default function App({ apps }: any) {

  return (
    <div className={`relative isolate px-6 pt-14 lg:px-8 bg-cover`}>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-6xl dark:text-white">
            Useful application in Netherlands 🌷
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            A list of must-have mobile apps in the Netherlands
            <br />
            ⚠️ please download and install it at your own risk ⚠️
          </p>

          {Object.keys(apps).map(function (key) {
            return <AppList key={key} category={key} items={apps[key]} />;
          })}
        </div>
      </section>
    </div>
  );
}
