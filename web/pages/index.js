import React from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import Layout from "../components/Layout";

function Index(props) {
  const { events = [] } = props;
  const { posts = [] } = props;
  // console.log(events);

  return (
    <div>
      <h1>Sections</h1>
      <nav>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link href="/events">
            <a>Events</a>
          </Link>
        </div>
        <div>
          <Link href="/news">
            <a>News</a>
          </Link>
        </div>
      </nav>

      <hr />

      <h3>All news and events</h3>
      {events.map(
        ({ _id, title = "", slug = "", _updatedAt = "" }) =>
          slug && (
            <li key={_id}>
              <Link href="/event/[slug]" as={`/event/${slug.current}`}>
                <a>{title}</a>
              </Link>{" "}
              ({new Date(_updatedAt).toDateString()})
            </li>
          )
      )}
      {posts.map(
        ({ _id, title = "", slug = "", _updatedAt = "" }) =>
          slug && (
            <li key={_id}>
              <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                <a>{title}</a>
              </Link>{" "}
              ({new Date(_updatedAt).toDateString()})
            </li>
          )
      )}
    </div>
  );
}

Index.getInitialProps = async () => ({
  events: await client.fetch(groq`
    *[_type == "event"]
  `),
  posts: await client.fetch(groq`
    *[_type == "post"]|order(publishedAt desc)
  `),
});

export default Index;
