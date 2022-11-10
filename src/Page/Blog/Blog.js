import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Difference between SQL and NoSQL</h2>
          <div className="flex w-full">
            <div className="p-3 grid  flex-grow card bg-base-300 rounded-box ">
                
                  <b>SQL</b>
                    <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                    <li>
                      These databases have fixed or static or predefined
                      schema
                    </li>
                    <li>
                      These databases are not suited for hierarchical data
                      storage.
                    </li>
                    <li>
                      These databases are best suited for complex queries
                    </li>
                    <li>Vertically Scalable</li>
                    <li>
                      Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
                    </li>
                
            </div>
            <div className="divider divider-horizontal">VS</div>
            <div className="p-2 grid  flex-grow card bg-base-300 rounded-box ">
              
                  <b>NoSQL</b>
                    <li>Non-relational or distributed database system.</li>
                    <li>They have dynamic schema</li>
                    <li>
                      These databases are best suited for hierarchical data
                      storage
                    </li>
                    <li>These databases are not so good for complex queries</li>
                    <li>Horizontally scalable</li>
                    <li>
                      Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                    </li>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is JWT, and how does it work?</h2>
          <div className="p-3 grid card bg-base-300 rounded-box place-items-center">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object
          </div>
          <div className="p-3 grid card bg-base-300 rounded-box place-items-center">
            JWT is compact, readable and digitally signed using a private key/
            or a public key pair by the Identity Provider(IdP)
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is the difference between javascript and NodeJS?
          </h2>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="p-3 grid flex-grow  card bg-base-300 rounded-box ">
              <b>javascript</b>
                <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                <li>Javascript can only be run in the browsers.	</li>
                <li>It is basically used on the client-side.</li>
                <li>Javascript is capable enough to add HTML and play with the DOM. </li>
                <li>	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</li>
                <li>Javascript is used in frontend development. </li>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="p-3 grid flex-grow  card bg-base-300 rounded-box ">
            <b>NodeJS</b>
            <li>NodeJS is a Javascript runtime environment</li>
            <li>We can run Javascript outside the browser with the help of NodeJS.</li>
            <li>It is mostly used on the server-side.</li>
            <li>Nodejs does not have capability to add HTML tags.</li>
            <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
            <li>Nodejs is used in server-side development.</li>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <div className="p-3 grid card bg-base-300 rounded-box place-items-center">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
