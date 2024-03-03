import axios from "axios";
import CarCard from "@/components/CarCard/CarCard";
import {Car} from "@/app/api/cars/route";
import SortBar from "@/components/SortBar/SortBar";
import Link from "next/link";


const Home = async ({params, searchParams}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  const response = await axios.get<Car[]>(`${process.env.NEXT_API_CLIENT_URL}/cars?_sort=${searchParams._sort || 'Year'}`);
  const data = response.data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={'flex items-center w-full justify-between mb-20'}>
        <Link className={'bg-green-500/50 hover:bg-green-500 items-center p-5 rounded-2xl text-white'} href={'/create-car'}>
          Добавить машину
        </Link>
        <SortBar />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        {data.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </main>
  );
}

export default Home;
