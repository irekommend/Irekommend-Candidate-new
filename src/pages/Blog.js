import { Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
    <div class="d-flex bd-highlight my-5 filter">
      <div class="p-2 bd-highlight">All Posts</div>
      <div class="ms-auto p-2 bd-highlight">Something</div>
    </div>
  );

  const other = () => (
    <div class="s-blog-container">
      <div class="s-blog-card">
        <div class="s-blog-card-header">
          <img
            src="https://source.unsplash.com/600x400/?computer"
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
        </div>
        <div class="s-blog-card-footer">
          <div class="s-blog-user">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              class="s-blog-user-image"
            />
            <div class="s-blog-user-info">
              <h5>Jane Doe</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
      <div class="s-blog-card">
        <div class="s-blog-card-header">
          <img
            src="https://source.unsplash.com/600x400/?computer"
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
        </div>
        <div class="s-blog-card-footer">
          <div class="s-blog-user">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              class="s-blog-user-image"
            />
            <div class="s-blog-user-info">
              <h5>Jane Doe</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
      <div class="s-blog-card">
        <div class="s-blog-card-header">
          <img
            src="https://source.unsplash.com/600x400/?computer"
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
        </div>
        <div class="s-blog-card-footer">
          <div class="s-blog-user">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              class="s-blog-user-image"
            />
            <div class="s-blog-user-info">
              <h5>Jane Doe</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
      <div class="s-blog-card">
        <div class="s-blog-card-header">
          <img
            src="https://source.unsplash.com/600x400/?computer"
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
        </div>
        <div class="s-blog-card-footer">
          <div class="s-blog-user">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              class="s-blog-user-image"
            />
            <div class="s-blog-user-info">
              <h5>Jane Doe</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="blog">
      <Size>
        {hero()} {filter()} {other()}
      </Size>{" "}
    </div>
  );
};

export default Blog;
