import { getAllFilesFrontMatter } from "@/lib/mdx";
import AppList from "../../components/AppList";

export async function getStaticProps() {
  const applications = await getAllFilesFrontMatter("apps");

  // const groupBy = (list, propFn) => {
  //   return list.reduce((group, item) => {
  //     const prop = propFn(item)
  //     group[prop] = group[prop] ?? [];
  //     group[prop].push(item);
  //     return group;
  //   }, {});
  // }
  const grouppedApp = applications.reduce((group, app) => {
    const { category } = app;
    group[category] = group[category] ?? [];
    group[category].push(app);
    return group;
  }, {});

  return { props: { apps: grouppedApp } };
}

export default function App({ apps }) {
  return (
    <div
      className={`relative isolate px-6 pt-14 lg:px-8 bg-cover`}
    >
   
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Useful application in Netherlands
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            A list of must-have mobile apps in the Netherlands ⚠️ please
            download and install it at your own risk⚠️
          </p>
          {Object.keys(apps).map(function (key) {
            return <AppList key={key} category={key} items={apps[key]} />;
          })}
        </div>
      </section>
    </div>
  );
}
