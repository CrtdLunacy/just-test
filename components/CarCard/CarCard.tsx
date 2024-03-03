import Image from "next/image";
import {Car} from "@/app/api/cars/route";
import Link from "next/link";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {

    return (
      <Link href={`/${car.id}`} className={'flex w-full p-5 backdrop-blur-sm bg-white/30 ' +
        'rounded-2xl justify-between hover:bg-white/50 hover:transition-all hover:scale-105'}>
        <div>
          <Image
           src={car.Image}
           width={300}
           height={300}
           alt={car.Brand}
          />
        </div>
        <div className={'flex flex-col justify-center items-center gap-10 text-white grow'}>
          <h3>{`Марка автомобиля: ${car.Brand}`}</h3>
          <p>{`Модель автомобиля: ${car.Model}`}</p>
          <p>{`Год выпуска автомобиля: ${car.Year}`}</p>
        </div>
      </Link>
    );
}

export default CarCard;
