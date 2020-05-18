import React from 'react'
import { Link } from 'react-router-dom'
import { BlogHeader } from './blogHeader'
import imgBlogOne from '../../assets/blog1.jpg'
import imgBlogTwo from '../../assets/food-truck-blog.jpg'
import imgBlogThree from '../../assets/mow-grass-blog.jpg'

export const blogIndex = () => {
  return (
    <>
      <BlogHeader title='TAKE YOUR BUSINESS TO THE NEXT LEVEL'/>
      <div className="blog-container u-center-text">
        <div className="blog-post_container">
          <Link to='/five-ways-to-grow-your-mobile-business-online'><img src={imgBlogOne} class="blog-img" alt="actionable-tips-to-maximize-your-mobile-business-profit"/></Link>
          <h2 className='heading-tertiary--lgfont'><Link className="blog-link" to='/five-ways-to-grow-your-mobile-business-online'>5 Ways To Grow Your Mobile Business Online</Link></h2>
          <p className='blog-body'>If you're wanting to grow your business, the best way to do so is by getting online effectively. Here are five effective ways you can grow your small business online....</p><br />
          <Link className='btn-text my2' to='/five-ways-to-grow-your-mobile-business-online'><strong>Read Article</strong> <span class=""></span></Link> <hr />
        </div>
        <div className="blog-post_container ">
          <Link to='/five-ways-to-grow-your-mobile-business-online'><img src={imgBlogTwo} class="blog-img" alt="actionable-tips-to-maximize-your-mobile-business-profit"/></Link>
          <h2 className='heading-tertiary--lgfont'><Link className="blog-link" to='/what-almost-every-mobile-business-does-wrong'>What Almost Every Mobile Business Does Wrong</Link></h2>
          <p className='blog-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, magna vitae rutrum ornare, orci nulla vestibulum quam, sit amet maximus turpis tellus sed ipsum. Suspendisse sem ligula, molestie sed euismod nec, consectetur quis diam. Mauris lobortis elit non rhoncus pellentesque. Nunc dictum nec tellus nec hendrerit...</p><br />
          <Link className='btn-text my2' to='/what-almost-every-mobile-business-does-wrong'><strong>Read Article</strong> <span class=""></span></Link> <hr />
        </div>
        <div className="blog-post_container">
          <Link to='/five-ways-to-grow-your-mobile-business-online'><img src={imgBlogThree} class="blog-img" alt="actionable-tips-to-maximize-your-mobile-business-profit"/></Link>
          <h2 className='heading-tertiary--lgfont'><Link className="blog-link" to='/why-every-mobile-business-needs-a-website'>Why Every Mobile Business Needs A Website</Link></h2>
          <p className='blog-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, magna vitae rutrum ornare, orci nulla vestibulum quam, sit amet maximus turpis tellus sed ipsum. Suspendisse sem ligula, molestie sed euismod nec, consectetur quis diam. Mauris lobortis elit non rhoncus pellentesque. Nunc dictum nec tellus nec hendrerit...</p><br />
          <Link className='btn-text my2' to='/why-every-mobile-business-needs-a-website'><strong>Read Article</strong> <span class=""></span></Link> <hr />
        </div>
      </div>
    </>
  )
}
