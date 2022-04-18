export default function Header() {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center text-[#444]">
        <span className="text-xl absolute top-[12%] ">React & Node</span>
        <span className="text-6xl absolute top-[15%]">BLOG</span>
      </div>
      <img
        className="w-full h-[450px] mt-20 object-cover"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
