import React, { useContext } from 'react'
import { Blog } from '../context/BlogContext'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'

const Create = () => {

  let { articles, setArticles, loggedInUser } = useContext(Blog)

  let navigate = useNavigate()

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  })


  let onFormSubmit = (data) => {

    console.log(data)

    let newArticle = {
      ...data,
      tags: data.tags.split(",").map(tag => tag.trim()),
      author: loggedInUser.name,
      date: new Date().toLocaleDateString(),
      status: "published",
    }

    let updatedArticles = [newArticle, ...articles]

    setArticles(updatedArticles)
    localStorage.setItem("articles", JSON.stringify(updatedArticles))

    reset()

    navigate("/")
  }

  return (
    <div className='px-80 m-8 font-heading'>
      <div className='flex gap-2 items-center'>
        <i className="ri-arrow-left-line text-black/60 text-[18px]"></i>
        <p className='text-black/60 text-[14px]'>Back to Dashboard</p>
      </div>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className='mt-6 border flex flex-col gap-6 border-black/20 p-5 rounded-xl'>

        <div className='flex flex-col'>
          <h1 className='mb-6 font-semibold'>Create New Article</h1>
          <label className='mb-2 font-medium text-[14px]'>Title</label>
          <input
            {...register("title", {
              required: "Title is required"
            })}
            className='border border-black/20 px-3 py-2 text-[14px] rounded-xl  ' type="text" placeholder='Enter a compelling title...' />
        </div>

        <div className='flex flex-col'>
          <label className='mb-2 font-medium text-[14px]'>Excerpt</label>
          <textarea
            {...register("excerpt", {
              required: "Excerpt is required"
            })}
            className='border border-black/20 px-3 py-2 text-[14px] rounded-xl  ' type="" placeholder='Write a brief summary of your article...' />
        </div>

        <div className='flex flex-col'>
          <label className='mb-2 font-medium text-[14px]'>Content</label>
          <textarea
            {...register("content", {
              required: "Content is required"
            })}
            className=' font-body border border-black/20 px-3 py-2 text-[14px] rounded-xl  ' type="text" placeholder='Write your article content here... (Markdown supported)' />
          <p className='text-[12px] mt-2 text-black/60'>Supports Markdown: ## for headers, **bold**, *italic*, `code`, etc.</p>
        </div>

        <div className='flex flex-col'>
          <label className='mb-2 font-medium text-[14px]'>Tags</label>
          <input
            {...register("tags", {
              required: "Tags is required"
            })}
            className='border border-black/20 px-3 py-2 text-[14px] rounded-xl  ' type="text" placeholder='Add tags (Press enter to add)' />
          <p className='text-[12px] mt-2 text-black/60'>Add up to 5 tags to help readers find your article</p>
        </div>

        <div className='flex gap-2 justify-end mt-6'>
          <button className='flex gap-4 border border-black/10 items-center bg-[#eeeeee5a] text-black px-3 py-1.5 rounded-lg'>
            <i class="ri-save-line"></i>
            <p className='text-[14px] font-semibold'>Save as Draft</p>
          </button>

          <button type='submit' className=' flex gap-4 items-center bg-[#0d5fac] text-white px-3 py-1.5 rounded-lg'>
            <i className="ri-send-plane-fill"></i>
            <p className='text-[14px] font-semibold'>Publish</p>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Create