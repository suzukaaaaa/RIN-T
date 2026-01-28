import { FaAngleDoubleRight } from "react-icons/fa"

export default function PLMAIN() {

    const newItems = [
        { pic: '/images/m-item01.jpg', link: '/', detail: '料理用Tシャツ', price: 3980, soldOut: false },
        { pic: '/images/item06.jpg', link: '/', detail: 'お家でだらだらTシャツ', price: 3980, soldOut: false },
        { pic: '/images/item05.jpg', link: '/', detail: 'ジム用Tシャツ', price: 3980, soldOut: false },
        { pic: '/images/item01.jpg', link: '/', detail: 'お散歩用Tシャツ', price: 3980, soldOut: true },
        // { pic: '/images/item05.jpg', link: '/', detail: 'お掃除用Tシャツ', price: 3980, soldOut: false },
    ]
    const ladiesItems = [
        { pic: '/images/item01.jpg', link: '/', detail: '料理用Tシャツ', price: 3980, soldOut: true },
        { pic: '/images/item02.jpg', link: '/', detail: 'お家でだらだらTシャツ', price: 3980, soldOut: true },
        { pic: '/images/item03.jpg', link: '/', detail: 'ジム用Tシャツ', price: 3980, soldOut: false },
        { pic: '/images/item04.jpg', link: '/', detail: 'お散歩用Tシャツ', price: 3980, soldOut: false },
        // { pic: '/images/item05.jpg', link: '/', detail: 'お掃除用Tシャツ', price: 3980, soldOut: false },
    ]
    const mensItems = [
        { pic: '/images/m-item01.jpg', link: '/', detail: '料理用Tシャツ', price: 3980, soldOut: false },
        { pic: '/images/m-item02.jpg', link: '/', detail: 'お家でだらだらTシャツ', price: 3980, soldOut: false },
        { pic: '/images/m-item03.jpg', link: '/', detail: 'ジム用Tシャツ', price: 3980, soldOut: false },
        { pic: '/images/m-item04.jpg', link: '/', detail: 'お散歩用Tシャツ', price: 3980, soldOut: false },
        // { pic: '/images/item05.jpg', link: '/', detail: 'お掃除用Tシャツ', price: 3980, soldOut: false },
    ]

    const contents = [
        { pic: '/images/content01.jpg', link: '/', title: 'RIN-TのTシャツができるまで', detail: 'RIN-TのTシャツができるまでのストーリーを紹介します。', },
    ]
  return (
    <div className="w-auto">
      <div>
        <div className="text-2xl font-bold p-4 bg-main flex justify-between">
          <div>NEW ARRIVALS</div>
          <a href="/" className="hover:opacity-70  items-center hidden md:flex">more<FaAngleDoubleRight className="ml-2 mt-1" /></a>
        </div>
        <div className="w-11/12 mx-auto my-10 md:my-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {newItems.map((item, index) => (
                <a href={item.link} key={index} className="relative border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-shadow hover:opacity-70">
                <img src={item.pic} alt={`Item ${index + 1}`} className="w-full h-auto" />
                {item.soldOut && <div className="absolute top-0 right-0 font-medium bg-gray-500 text-white text-lg px-2 py-1">SOLD OUT</div>}
                <div className="py-2 px-4">
                    <p className="text-base font-medium">{item.detail}</p>
                    <p className="text-xs pt-2">{item.price.toLocaleString()}円</p>
                </div>
                </a>
            ))}
            </div>
          <div className="w-fit mx-auto pt-6 text-lg"><a href="/" className="hover:opacity-70 underline text-gray-800 flex items-center md:hidden">VIEW ALL</a></div>
        </div>
      </div>
      <div >
        <div className="text-2xl font-bold p-4 bg-main flex justify-between">
          <div>LADIES</div>
          <a href="/" className="hover:opacity-70  items-center hidden md:flex">more<FaAngleDoubleRight className="ml-2 mt-1" /></a>
        </div>
        <div className="w-11/12 mx-auto my-10 md:my-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* <div className="flex overflow-x-scroll max-w-full gap-4 overscroll-contain overscroll-x-auto pb-4"> */}
            {ladiesItems.map((item, index) => (
                <a href={item.link} key={index} className="relative border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-shadow hover:opacity-70">
                <img src={item.pic} alt={`Item ${index + 1}`} className="w-full h-auto" />
                {item.soldOut && <div className="absolute top-0 right-0 font-medium bg-gray-500 text-white text-lg px-2 py-1">SOLD OUT</div>}
                <div className="py-2 px-4">
                    <p className="text-base font-medium">{item.detail}</p>
                    <p className="text-xs pt-2">{item.price.toLocaleString()}円</p>
                </div>
                </a>
            ))}
            </div>
            <div className="w-fit mx-auto pt-6 text-lg"><a href="/" className="hover:opacity-70 underline text-gray-800 flex items-center md:hidden">VIEW ALL</a></div>
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold p-4 bg-main flex justify-between">
          <div>MENS</div>
          <a href="/" className="hover:opacity-70  items-center hidden md:flex">more<FaAngleDoubleRight className="ml-2 mt-1" /></a>
        </div>
        <div className="w-11/12 mx-auto my-10 md:my-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mensItems.map((item, index) => (
                <a href={item.link} key={index} className="relative border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-shadow hover:opacity-70">
                <img src={item.pic} alt={`Item ${index + 1}`} className="w-full h-auto" />
                {item.soldOut && <div className="absolute top-0 right-0 font-medium bg-gray-500 text-white text-lg px-2 py-1">SOLD OUT</div>}
                <div className="py-2 px-4">
                    <p className="text-base font-medium">{item.detail}</p>
                    <p className="text-xs pt-2">{item.price.toLocaleString()}円</p>
                </div>
                </a>
            ))}
            </div>
            <div className="w-fit mx-auto pt-6 text-lg"><a href="/" className="hover:opacity-70 underline text-gray-800 flex items-center md:hidden">VIEW ALL</a></div>
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold p-4 title-sub flex justify-between">
          <div>CONTENTS</div>
          <a href="/" className="hover:opacity-70 items-center hidden md:flex">more<FaAngleDoubleRight className="ml-2 mt-1" /></a>
        </div>
        {contents.map((content, index) => (
            <a href={content.link} key={index} className="w-11/12 mx-auto my-10 md:my-20 border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-shadow hover:opacity-70 block md:flex">
                <img src={content.pic} alt={`Content ${index + 1}`} className="w-full md:w-[300px] h-auto" />
                <div className="py-4 px-4 md:px-6">
                    <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
                    <p className="text-sm">{content.detail}</p>
                </div>
            </a>
        ))}
        </div> 
        <div className="w-fit mx-auto pt-6 text-lg"><a href="/" className="hover:opacity-70 underline text-gray-800 flex items-center md:hidden">VIEW ALL</a></div>
    </div>
  );
}