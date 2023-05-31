import React from "react";

const subtitle = "What our Customers Say";
const title = "Client’s Feed back Latest Reviews From My Clients";

let ClientsListContent = [
  {
    Desc: "Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin",
    Name: "Rajib Raj",
    Digi: "UI Designer",
    imgUrl: "assets/images/group/group-mem/01.png",
    imgAlt: "Client Thumb",
  },
  {
    Desc: "Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin",
    Name: "Ummi Nishat",
    Digi: "Founder",
    imgUrl: "assets/images/group/group-mem/02.png",
    imgAlt: "Client Thumb",
  },
  {
    Desc: "Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin",
    Name: "Somrat Islam",
    Digi: "UI Designer",
    imgUrl: "assets/images/group/group-mem/03.png",
    imgAlt: "Client Thumb",
  },
  {
    Desc: "Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin",
    Name: "Zinat Zata",
    Digi: "Student",
    imgUrl: "assets/images/group/group-mem/04.png",
    imgAlt: "Client Thumb",
  },
  {
    Desc: "Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin",
    Name: "Sajahan Sagor",
    Digi: "UI Designer",
    imgUrl: "assets/images/group/group-mem/05.png",
    imgAlt: "Client Thumb",
  },
  {
    Desc: "Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was Procedur Arramin",
    Name: "Angel Mili",
    Digi: "UI Designer",
    imgUrl: "assets/images/group/group-mem/06.png",
    imgAlt: "Client Thumb",
  },
];

function ClientSection() {
  return (
    <section className="clints-section padding-tb">
      <div className="container">
        <div className="section-header">
          <h4 className="theme-color">{subtitle}</h4>
          <h2>{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="clients">
            {ClientsListContent.map((val, i) => (
              <div className="client-list" key={i}>
                <div className="client-content">
                  <p> {val.Desc} </p>
                  <div className="client-info">
                    <div className="name-desi">
                      <h6>{val.Name}</h6>
                      <span>{val.Digi}</span>
                    </div>
                    <div className="rating">
                      <ul>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                        <li>
                          <i className="icofont-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="client-thumb">
                  <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
