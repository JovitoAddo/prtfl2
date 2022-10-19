import React from "react";

const Contents = () => {
  return (
    <container as="div" className="min-h-screen ">
      {/* HEADER */}
      {/* <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content rounded-md bg-customblue">
          <div className="max-w-md bg-transparent">
            <h1 className="mb-5 text-5xl font-bold bg-transparent">
              Hello there
            </h1>
            <p className="mb-5 bg-transparent">
              Velit eiusmod amet veniam magna nulla laborum dolor sit nulla
              occaecat fugiat in. Ut aliquip ea aute commodo consectetur
              cupidatat deserunt sunt eiusmod est nisi minim excepteur in.
              Veniam nulla pariatur non consequat voluptate pariatur nisi non
              dolore. Sit amet incididunt do proident deserunt fugiat esse ut
              irure sit non cillum.
            </p>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

      <div className="min-h-screen">
        stuff
      </div>

      {/* BODY */}
      <div className="grid">
        <div className="flex justify-evenly">
          <div className="mx-auto">
            <h1>1</h1>
          </div>
          <div className="mx-auto">
            <h2>2</h2>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div>
            <h1>1</h1>
          </div>
          <div>
            <h2>2</h2>
          </div>
        </div>
      </div>
    </container>
  );
};

export default Contents;
