import axios from "axios";
import {Car} from "@/app/api/cars/route";
import DetailsCarCard from "@/components/DetailsCarCard/DetailsCarCard";

const CarDetails = async ({ params }: { params: { slug: string } }) => {
  const response = await axios.get<Car>(`${process.env.NEXT_API_CLIENT_URL}/cars/${params.slug}`);
  const data = response.data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full items-center justify-center gap-10">
        <DetailsCarCard car={data} />
      </div>
    </main>
  );
}

export default CarDetails;
