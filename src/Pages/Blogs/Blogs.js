import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="bg-info m-5 p-4 rounded">
        <h3>1. Differences between sql and nosql databases ?</h3>
        <p>
          SQL-
          <br />
          SQL databases have fixed or static or predefined schema. SQL databases
          are vertically scalable.SQL databases are best suited for complex
          queries.
          <br />
          NOSQL-
          <br /> NoSQL databases have dynamic schema. NoSQL databases are
          horizontally scalable.Javascript is capable enough to add HTML and
          play with the DOM.
        </p>
      </div>
      <div className="bg-info m-5 p-4 rounded">
        <h3>2. When should you use nodejs and when should you use mongodb ?</h3>
        <p>
          Nodejs-
          <br />
          Any project needs a programming environment and a runtime library that
          offers you basic programming tools/support and can compile and/or
          interpret your code. Nodejs is such as tool for the Javascript
          programming language .So, if i want to write some kind of stand-alone
          program or server in Javascript, then i can use nodejs for it.
          <br />
          MongoDB-
          <br />
          If my application needs the ability to persistently store data in a
          way that you can efficiently query or update it later, then i Use
          MongoDB or any Other Database If my application needs the ability to
          persistently store data in a way that you can efficiently query or
          update it later, then i Use MongoDB or any Other Database
        </p>
      </div>
      <div className="bg-info m-5 p-4 rounded">
        <h3>3. Difference between javascript and nodejs ?</h3>
        <p>
          Javascript-
          <br />
          a ) It is basically used on the client-side.
          <br />
          b ) Javascript is used in frontend development.
          <br />
          c ) SQL databases are best suited for complex queries.
          <br />
          NodeJS-
          <br />
          a ) It is mostly used on the server-side.
          <br />
          b ) Nodejs is used in server-side development.
          <br />c ) Nodejs does not have capability to add HTML tags.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
