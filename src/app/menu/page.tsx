import Link from "next/link";
import React from "react";

import { menu } from "../data";

const MenuPage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
            {menu.map((category) => (
                <Link href={category.slug} key={category.id} className="w-full h-1/3 bg-cover p-8" style={{ backgroundImage: `url(${category.img})` }}>
                    <div className={`text-${category.color} w-1/2`}>
                        <h1 className="">{category.title}</h1>
                        <p className="">{category.desc}</p>
                        <button className="">Explore</button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuPage;
