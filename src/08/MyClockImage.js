import logo from './colock.png';

function MyClockImage() {
  return (
    <header className="flex flex-col justify-center items-center
                        w-full h-3/4
                        ">
      <img className="size-96 " src={logo} alt="logo" />
    </header>
  );
}

export default MyClockImage;
