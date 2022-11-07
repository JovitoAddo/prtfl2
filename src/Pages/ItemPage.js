import React from "react";
import Models from "../Assets/Content";

const ItemPage = () => {
  return (
    <div className="min-h-screen">
      <header
        as
        div
        className="grid items-end h-36 border-2 border-customblack bg-gradient-to-r from-customblue to-customred"
      >
        <h1 className="bg-transparent text-customwhite text-5xl font-staat text-center">
          *Items Name*
        </h1>
      </header>

      <body as div className="grid pt-5">
        <div className="flex justify-around gap-3 p-4">
          <img
            src={Models.np1}
            alt=""
            className="w-96 border border-customblack"
          />
          <div className="grid justify-items-center">
            <h1>Price</h1>
            <p>
              Laboris et nulla aute sunt deserunt. Minim mollit sit ex voluptate
              officia reprehenderit. Minim minim aliqua cillum Lorem amet.
              Dolore nostrud laboris sunt nostrud dolor incididunt quis
              voluptate esse culpa ullamco anim sit. Ipsum officia eu pariatur
              dolor laboris ex dolor cillum magna. Cillum nisi eu dolore
              consectetur qui. Ea laborum in id exercitation reprehenderit.
              Velit commodo minim quis magna voluptate voluptate excepteur
              incididunt nulla officia. Aliqua occaecat officia aliquip nulla
              ullamco ullamco sit et ipsum. Laborum aliqua deserunt adipisicing
              nisi occaecat est et ex cupidatat voluptate exercitation
              incididunt.Incididunt velit anim magna amet Lorem magna. Voluptate
              veniam irure ea est anim. Consectetur dolore occaecat ipsum
              officia minim. Labore do ipsum et aliqua labore fugiat nisi velit
              consectetur ut ad exercitation. Sunt Lorem sunt eiusmod ad sit
              laborum occaecat aute nisi sint ut. Irure quis cillum elit sit
              et.Quis anim esse voluptate duis adipisicing sint elit in magna
              aute nostrud amet Lorem deserunt. Enim laborum proident deserunt
              dolore velit labore laboris id elit amet pariatur cillum veniam
              ipsum. Nisi cillum excepteur eiusmod minim culpa culpa non dolore.
              Cillum ullamco ullamco aliquip do culpa sit officia irure non
              Lorem commodo officia laborum. Nostrud enim incididunt Lorem minim
              ea. Ad aliquip do nostrud aute et ut.Qui enim ullamco veniam
              tempor laborum sunt quis proident tempor. Reprehenderit laborum
              aliquip cillum nostrud officia magna tempor aute eiusmod laboris
              ullamco veniam est deserunt. Aliqua quis dolor cillum voluptate
              voluptate aliqua dolore laborum ex tempor excepteur amet.
              Adipisicing consequat duis reprehenderit magna. Enim tempor
              adipisicing et aute culpa duis cupidatat Lorem magna. Aute eu
              aliqua qui velit.
            </p>
          </div>
        </div>

        <div className="">
          <comments as div className="">
            Id occaecat deserunt consequat velit. Consectetur ad minim quis in
            ullamco. Exercitation quis irure enim eiusmod mollit dolore
            cupidatat fugiat non officia ut et eu.Ipsum qui enim culpa culpa non
            officia tempor est pariatur ut ullamco occaecat. Minim nostrud culpa
            in laboris amet culpa nisi culpa laborum. Magna ullamco mollit sunt
            laboris non aliquip ad id est aliquip deserunt ea cillum. Officia
            sit ad exercitation voluptate quis commodo voluptate tempor laborum.
            Reprehenderit amet consectetur pariatur minim voluptate aute.
            Occaecat ullamco esse veniam sint esse in cupidatat veniam mollit
            veniam amet. Tempor sint quis Lorem sint.Consectetur sunt id
            cupidatat eiusmod adipisicing nostrud minim ut enim tempor dolor.
            Esse occaecat et sunt labore voluptate eu incididunt nisi pariatur
            reprehenderit id. Commodo esse laborum ut est duis consectetur
            fugiat minim ullamco et.
          </comments>
        </div>
      </body>
    </div>
  );
};

export default ItemPage;
