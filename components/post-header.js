import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>

      <PostTitle>{title}</PostTitle>

      <div className="text-center">
        <div className="inline-flex">
          <p className="mb-2 text-base">  
            By:&nbsp;
          </p>
          <div className="mb-2 text-base">
              <Avatar name={author.name}/>
          </div>
          <p className="mb-2 text-base">  
            &nbsp;&nbsp;|&nbsp;&nbsp; 
          </p>
          <div className=" mb-2 text-base">
              <Date dateString={date} />
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="w-auto lg:w-3/4 xl:w-7/12 inline-flex mt-5 mb-12 md:my-12">
          <CoverImage
            responsiveImage={coverImage.responsiveImage}
          />
        </div>
      </div>

    </>
  )
}
