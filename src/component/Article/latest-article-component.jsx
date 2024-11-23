import React from "react";
import ArticleImage1 from "../Article/article-img/article-img-1.png";
import ArticleImage2 from "../Article/article-img/article-img-2.png";
import ArticleImage3 from "../Article/article-img/article-img-3.png";
import { Link } from "react-router-dom";

export default function LatestArticleComponent() {
    const articles = [
        {
            title: "Air Jordan x Travis Scott Event",
            img: ArticleImage1,
            navigate: "/",
        },
        {
            title: "The timeless classics on the green",
            img: ArticleImage2,
            navigate: "/",
        },
        {
            title: "The 2023 Ryder Cup",
            img: ArticleImage3,
            navigate: "/",
        },
    ];

    return (
        <div className="w-full h-full pt-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
            {/* Header */}
            <div className="flex  md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                <h1 className="font-poppins font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Latest Articles
                </h1>
                <div className="flex flex-col">
                    <h2 className="font-poppins font-medium text-sm sm:text-base text-gray-700">
                        View More →
                    </h2>
                    <h3 className="border-b-2 border-black w-24 sm:w-28"></h3>
                </div>
            </div>

            {/* Articles */}
            <div className="pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                {articles.map((eachArticle, index) => (
                    <Link
                        to={eachArticle.navigate}
                        key={index}
                        className="flex flex-col w-full justify-start"
                    >
                        <div className="w-full">
                            <div className="w-full h-auto">
                                <img
                                    src={eachArticle.img}
                                    alt=""
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                            <div className="pt-4">
                                <h1 className="font-poppins font-medium text-lg sm:text-xl">
                                    {eachArticle.title}
                                </h1>
                                <div className="pt-2">
                                    <h2 className="font-poppins font-medium text-sm sm:text-base text-black-300">
                                        Read More →
                                    </h2>
                                    <h1 className="border-b-2 border-black w-20 sm:w-28"></h1>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
