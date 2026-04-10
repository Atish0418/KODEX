import React, { useContext } from 'react'
import { Blog } from '../context/BlogContext'
import { useNavigate, useParams } from 'react-router'
import ReactMarkDown from 'react-markdown'


const BlogDetails = () => {

    let { articles } = useContext(Blog)
    let { id } = useParams()
    let navigate = useNavigate()

    let article = articles[id]


    return (
        <div className=' px-100 py-12 font-heading'>
            <div
                onClick={() => navigate("/")}
                className='cursor-pointer flex text-[14px] text-black/70 gap-2'>
                <i className="ri-arrow-left-line"></i>
                <p >Back to Articles</p>
            </div>

            <div className='flex gap-2 mt-8 flex-wrap'>
                {article.tags?.map((tag, id) => (
                    <span
                        key={id}
                        className='bg-[#EEEEEE] px-3 py-1 rounded-xl text-[12px]'
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <h2 className='text-4xl font-bold leading-9.5 tracking-tighter mt-5'>
                {article.title}
            </h2>


            <div className='flex gap-6 mt-4 text-black/60 text-[13px] items-center'>
                <div className='flex gap-2 items-center'>
                    <i className="ri-user-3-line "></i>
                    <p>{article.author}</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <i className="ri-calendar-2-line"></i>
                    <p>{article.date}</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <i className="ri-time-line"></i>
                    <p>1 min read</p>
                </div>
            </div>


            <div className='mt-8 text-[16px] leading-7 whitespace-pre-line'>
                <ReactMarkDown
                    components={{
                        h2: ({ children }) => (
                            <h2 className="text-2xl font-bold mt-6">{children}</h2>
                        ),
                        p: ({ children }) => (
                            <p className="text-[16px] leading-7 text-black/80">{children}</p>
                        ),
                        code: ({ children }) => (
                            <code className="bg-gray-200 px-1 rounded  ">{children}</code>
                        ),
                    }}
                >
                    {article.content}
                </ReactMarkDown>
            </div>
        </div>
    )
}

export default BlogDetails