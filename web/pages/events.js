import React from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import Layout from "../components/Layout";

function Index(props) {
  const { events = [] } = props;
  console.log(events);
  return (
    <div>
      <h1>All events</h1>
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
    </div>
  );
}

Index.getInitialProps = async () => ({
  events: await client.fetch(groq`
    *[_type == "event"]
  `),
});

export default Index;
