import { FaInstagram, FaLine, FaTiktok  } from "react-icons/fa"

export default function Footer() {
    const infoLinks = [
        { name: 'HOME', url: '/' },
        {name: 'NEW ARRIVALS', url: '/' },
        { name: 'LADIES', url: '/' },
        {name: 'CONTENTS', url: '/' },
        {name: 'CONTACT', url: '/' },
    ];

    const socialLinks = [
        { icon: FaInstagram, url: 'https://www.instagram.com/' },
        { icon: FaLine, url: 'https://line.me/' },
        { icon: FaTiktok, url: 'https://www.tiktok.com/' },
    ];

    return (
    <footer className="w-full bg-gray-100 py-6 mt-10 border-t border-gray-300">
        <div className="md:flex gap-20 justify-center mb-4 mx-4 md:mx-0">
            <div className="text-4xl md:text-6xl font-bold my-auto text-center">RIN-T</div>
            <div className="text-lg pt-4 md:pt-0">
                <div className="font-bold text-xl">SHOP INFO</div>
                <div className="grid grid-cols-3 md:grid-cols-1">
                {infoLinks.map((link) => (
                    <div key={link.name}>
                        <a href={link.url} className="text-sm text-gray-700 hover:opacity-70 no-underline">
                            {link.name}
                        </a>
                    </div>
                ))}
                </div>
                <div className="flex space-x-3 pt-4 justify-center md:justify-start">
                    {socialLinks.map(({ icon: Icon, url }, index) => (
                        <a
                            key={index}
                            href={url}
                            className="text-3xl text-gray-700 hover:opacity-70 no-underline"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
            <div className="">
                <div className="pb-2 md:pb-4 text-xl font-bold mt-4 md:mt-0">お支払い方法</div>
                <div className="flex gap-2">
                    <img src="/images/card/icon_visa.gif" alt="visa" className="w-7" />
                    <img src="/images/card/icon_jcb.gif" alt="jcb" className="w-7" />
                    <img src="/images/card/icon_master.gif" alt="master" className="w-7" />
                    <img src="/images/card/icon_amex.gif" alt="amex" className="w-7" />
                    <img src="/images/card/icon_diners.gif" alt="diners" className="w-7" />
                </div>
            </div>
            <div className="text-sm mt-4 md:mt-0">
                <div><a href="/">プライバシーポリシー</a></div>
                <div><a href="/">特定商取引法に基づく表記</a></div>
            </div>
        </div>
      <p className="text-sm text-gray-600 text-center">&copy; 2026 RIN-T. All rights reserved.</p>
    </footer>
    );
}   