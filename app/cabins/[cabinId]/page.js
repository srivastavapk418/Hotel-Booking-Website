import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export const revalidate = 60; // fallback, will revalidate every 60s

// export const metadata = {
//   title: "Cabin",
// };
export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin-${name}` };
}

//Now, this route will be generated as static site not dynamic
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
  // console.log(ids); // return array of objects that is {cabinId: --}

  return ids;
}

export default async function Page({ params }) {
  // {param} is only available for the Page component
  // It creates a waterfall model where getSettings() and other below code wait for getCabin() to fetch data. Same for the below getSettings(), getBookedDatesByCabinId()
  const cabin = await getCabin(params.cabinId);
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
