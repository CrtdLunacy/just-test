import {UserButton} from "@clerk/nextjs";


const Header = () => {

  return (
    <header className={'flex w-full h-[50px] bg-sky-500/50 justify-end items-center px-20'}>
      <UserButton showName={true} />
    </header>
  );
}

export default Header;
