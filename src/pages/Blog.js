import { Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import '../css/blog.css';
import Button from "@mui/material/Button";


import { styled } from "@mui/material/styles";

const Blog = () => {
  const Size = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      width: "80%",
      margin: "70px auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
      margin: "70px auto",
    },
  }));

  const hero = () => (
    // <Size>
    <div class="blog-container">
      <div class="blog-header">
        <div class="blog-cover">
          <div class="blog-author">
            <h3>Russ Beye</h3>
          </div>
        </div>
      </div>

      <div class="blog-body">
        <div class="blog-title">
          <h1>
            <a href="#">Blog Title</a>
          </h1>
        </div>
        <div class="blog-summary">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            quos doloribus voluptas. Voluptas hic aut distinctio. Dolor, culpa
            error deserunt earum vero blanditiis laudantium excepturi maxime
            fugiat, non consequatur laboriosam.
          </p>
        </div>
        <div class="blog-tags">
          <ul>
            <li>
              <a href="#">tag1</a>
            </li>
            <li>
              <a href="#">tag2</a>
            </li>
            <li>
              <a href="#">tag3</a>
            </li>
            <li>
              <a href="#">tag4</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="blog-footer">
        <ul>
          <li class="published-date">2 days ago</li>
          <li class="comments">
            <a href="#">
              <ChatBubbleOutlineIcon />
              <span class="numero">4</span>
            </a>
          </li>
          <li class="shares">
            <a href="#">
              <FavoriteBorderOutlinedIcon />
              <span class="numero">1</span>
            </a>
          </li>
        </ul>
      </div>

      <script
        type="text/javascript"
        src="//use.typekit.net/wtt0gtr.js"
      ></script>
    </div>
    /* </Size> */
  );

  const filter = () => (
    <div
      class="d-flex bd-highlight filter"
      style={{ margin: "80px 50px 30px 50px" }}
    >
      <div class="p-2 bd-highlight">All Posts</div>
      <div class="ms-auto p-2 bd-highlight">Something</div>
    </div>
  );

  const other = () => (
    <div class="d-flex flex-row flex-wrap justify-content-center align-items-stretch s-blog-container">
      <div class="s-blog-card">
        <div class="s-blog-card-header">
          <img
            src="/images/blog_1.png"
            alt="card__image"
            class="card__image"
            width="600"
          />
        </div>
        <div class="s-blog-card-body">
          <div class="s-blog-tags">
            <ul>
              <li>
                <a href="#">tag1</a>
              </li>
              <li>
                <a href="#">tag2</a>
              </li>
              <li>
                <a href="#">tag3</a>
              </li>
              <li>
                <a href="#">tag4</a>
              </li>
            </ul>
          </div>
          <h4>What's new in 2022 Tech</h4>
          <Button variant="contained" href="/blog/1">Read more ...</Button>
        </div>
      </div>
      <div class="s-blog-card">
        <div class="s-blog-card-header">
          <img
            src="/images/blog_2.png"
            alt="card__image"
            class="card__image"
            width="600"
          />
        </div>
        <div class="s-blog-card-body">
          <div class="s-blog-tags">
            <ul>
              <li>
                <a href="#">tag1</a>
              </li>
              <li>
                <a href="#">tag2</a>
              </li>
              <li>
                <a href="#">tag3</a>
              </li>
              <li>
                <a href="#">tag4</a>
              </li>
            </ul>
          </div>
          <h4>What's new in 2022 Tech</h4>
          <Button variant="contained" href="/blog/2">Read more ...</Button>
        </div>
      </div>
      <div class="s-blog-card">
        <div class="s-blog-card-header">
          <img
            src="/images/blog_3.png"
            alt="card__image"
            class="card__image"
            width="600"
          />
        </div>
        <div class="s-blog-card-body">
          <div class="s-blog-tags">
            <ul>
              <li>
                <a href="#">tag1</a>
              </li>
              <li>
                <a href="#">tag2</a>
              </li>
              <li>
                <a href="#">tag3</a>
              </li>
              <li>
                <a href="#">tag4</a>
              </li>
            </ul>
          </div>
          <h4>What's new in 2022 Tech</h4>
          <Button variant="contained" href="/blog/3">Read more ...</Button>
        </div>
      </div>
      <div class="s-blog-card">
        <div class="s-blog-card-header">
          <img
            src="/images/blog_4.png"
            alt="card__image"
            class="card__image"
            width="600"
          />
        </div>
        <div class="s-blog-card-body">
          <div class="s-blog-tags">
            <ul>
              <li>
                <a href="#">tag1</a>
              </li>
              <li>
                <a href="#">tag2</a>
              </li>
              <li>
                <a href="#">tag3</a>
              </li>
              <li>
                <a href="#">tag4</a>
              </li>
            </ul>
          </div>
          <h4>What's new in 2022 Tech</h4>
          <Button variant="contained" href="/blog/4">Read more ...</Button>
        </div>
      </div>
    </div>
  );


//   const sidebar = () => (
//     <div class="sidebar pure-u-1 pure-u-md-1-4">
//         <div class="header">
//             <h1 class="brand-title">iRekommend Blog</h1>
//             <h2 class="brand-tagline">This world shall know blogs.</h2>

//             {/* <nav class="nav">
//                 <ul class="nav-list">
//                     <li class="nav-item">
//                         <a class="pure-button" href="http://purecss.io">Pure</a>
//                     </li>
//                 </ul>
//             </nav> */}
//         </div>
//     </div>
//   );

//   const biju = () => (
//     <div class="content pure-u-1 pure-u-md-3-4">
//         <div>
//             {/* <!-- A wrapper for all the blog posts --> */}
//             <div class="posts">
//                 <h1 class="content-subhead">Pinned Post</h1>

//                 {/* <!-- A single blog post --> */}
//                 <section class="post">
//                     <header class="post-header">
//                         {/* <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" class="post-avatar" src="/img/common/tilo-avatar.png" /> */}

//                         <h2 class="post-title">Welcome to Pure</h2>

//                         <p class="post-meta">
//                             By <a href="#" class="post-author">Tilo Mitra</a> under <a class="post-category post-category-design" href="#">CSS</a> <a class="post-category post-category-pure" href="#">Pure</a>
//                         </p>
//                     </header>

//                     <div class="post-description">
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                         </p>
//                     </div>
//                 </section>
//             </div>

//             <div class="posts">
//                 <h1 class="content-subhead">Recent Posts</h1>

//                 <section class="post">
//                     <header class="post-header">
//                         {/* <img width="48" height="48" alt="Eric Ferraiuolo&#x27;s avatar" class="post-avatar" src="/img/common/ericf-avatar.png" /> */}

//                         <h2 class="post-title">Everything You Need to Know About Node.js</h2>

//                         <p class="post-meta">
//                             By <a class="post-author" href="#">Eric Ferraiuolo</a> under <a class="post-category post-category-js" href="#">JavaScript</a>
//                         </p>
//                     </header>

//                     <div class="post-description">
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                         </p>
//                     </div>
//                 </section>

//                 <section class="post">
//                     <header class="post-header">
//                         {/* <img width="48" height="48" alt="Reid Burke&#x27;s avatar" class="post-avatar" src="/img/common/reid-avatar.png" /> */}

//                         <h2 class="post-title">Photos from CSSConf and JSConf</h2>

//                         <p class="post-meta">
//                             By <a class="post-author" href="#">Reid Burke</a> under <a class="post-category" href="#">Uncategorized</a>
//                         </p>
//                     </header>

//                     <div class="post-description">
//                         <div class="post-images pure-g">
//                             <div class="pure-u-1 pure-u-md-1-2">
//                                 <a href="http://www.flickr.com/photos/uberlife/8915936174/">
//                                     {/* <img alt="Photo of someone working poolside at a resort"
//                                          class="pure-img-responsive"
//                                          src="http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg" /> */}
//                                 </a>

//                                 <div class="post-image-meta">
//                                     <h3>CSSConf Photos</h3>
//                                 </div>
//                             </div>

//                             <div class="pure-u-1 pure-u-md-1-2">
//                                 <a href="http://www.flickr.com/photos/uberlife/8907351301/">
//                                     {/* <img alt="Photo of the sunset on the beach"
//                                          class="pure-img-responsive"
//                                          src="http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg" /> */}
//                                 </a>

//                                 <div class="post-image-meta">
//                                     <h3>JSConf Photos</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>

//             <div class="blog-footer">
//                 <div class="pure-menu pure-menu-horizontal">
//                     <ul>
//                         <li class="pure-menu-item"><a href="http://purecss.io/" class="pure-menu-link">About</a></li>
//                         <li class="pure-menu-item"><a href="http://github.com/pure-css/pure/" class="pure-menu-link">GitHub</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );

  return (
    // <div className="blog py-5 pure-g" id="layout">
    <div className="blog" style={{padding: "100px 0"}}>
      {/* <Size> */}
      {/* {filter()} */}
      {other()}
      {/* </Size> */}
      {/* { sidebar() } */}
      {/* { biju() } */}
    </div>
  );
};

export default Blog;
