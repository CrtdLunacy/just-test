import Image from "next/image";
import {Car} from "@/app/api/cars/route";

interface CarCardProps {
  car: Car;
}

const DetailsCarCard = ({ car }: CarCardProps) => {

  return (
    <div className={'flex p-5 backdrop-blur-sm bg-white/30 ' +
      'rounded-2xl justify-between items-center'}>
      <div>
        <Image
          className={'w-[500px] h-[300px]'}
          src={car.Image}
          objectFit={'contain'}
          width={1000}
          height={1000}
          alt={car.Brand}
        />
      </div>
      <div className={'flex items-center gap-10 text-white grow px-20'}>
        <div className={'flex flex-col'}>
          <h3>{`Марка автомобиля: ${car.Brand}`}</h3>
          <p>{`Модель автомобиля: ${car.Model}`}</p>
          <p>{`Год выпуска автомобиля: ${car.Year}`}</p>
          <p>{`Цвет автомобиля: ${car.Color}`}</p>
        </div>
        <div>
          <p>{`Тип двигателя: ${car.Engine_Type}`}</p>
          <p>{`Стоимость: ${car.Price} $`}</p>
          {car.Engine_Type !== 'Electric' && <p>{`Трансмиссия: ${car.Transmission}`}</p>}
          {car.Engine_Type === 'Electric' && <p>{`Запас хода: ${car.Range} км`}</p>}
        </div>
      </div>
    </div>
  );
}

export default DetailsCarCard;
