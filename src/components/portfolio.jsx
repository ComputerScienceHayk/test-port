import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

const portfolio = [
  {
    name: <div className="project">
    <div className="project-head">
      <img src="http://dnevozhai.com/work/shopping_card.jpg" alt="" className="img-fluid card-img" />
      <div className="project-overlay">
        <h2>Some H</h2>
      </div>
      <div className="project-hover">
        <p>
          Some Huynya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error pariatur, eveniet omnis. Fugit unde, sint saepe minus assumenda tempora quam delectus adipisci, voluptatibus ipsam consequatur, sit velit libero quos voluptas.
        </p>
      </div>
    </div>

    <div className="project-body text-center">
      <h3 className="title">front</h3>

      <ul className="filters filters-tag text-center">
        tag:
        <li data-filter=".html"><a href="#!">HTML</a></li>
        <li data-filter=".css"><a href="#!">CSS</a></li>
        <li data-filter=".jquery"><a href="#!">jQuery</a></li>
      </ul>

      <div className="btn-group" role="group">
        <a href="#!" className="btn  project-btn"><i className="fas fa-code"></i> Code</a>
        <a href="#!" className="btn  project-btn"><i className="far fa-eye"></i> View</a>
      </div>
    </div>
  </div>,
    category: ["all", "frontend",]
  },
  {
    name: <div className="project">
    <div className="project-head">
      <img src="http://dnevozhai.com/work/shopping_card.jpg" alt="" className="img-fluid card-img" />
      <div className="project-overlay">
        <h2>Some H</h2>
      </div>
      <div className="project-hover">
        <p>
          Some Huynya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error pariatur, eveniet omnis. Fugit unde, sint saepe minus assumenda tempora quam delectus adipisci, voluptatibus ipsam consequatur, sit velit libero quos voluptas.
        </p>
      </div>
    </div>

    <div className="project-body text-center">
      <h3 className="title">mobile</h3>

      <ul className="filters filters-tag text-center">
        tag:
        <li data-filter=".html"><a href="#!">HTML</a></li>
        <li data-filter=".css"><a href="#!">CSS</a></li>
        <li data-filter=".jquery"><a href="#!">jQuery</a></li>
      </ul>

      <div className="btn-group" role="group">
        <a href="#!" className="btn  project-btn"><i className="fas fa-code"></i> Code</a>
        <a href="#!" className="btn  project-btn"><i className="far fa-eye"></i> View</a>
      </div>
    </div>
  </div>,
    category: ["all", "mobile", ]
  },
  {
    name: <div className="project">
    <div className="project-head">
      <img src="http://dnevozhai.com/work/shopping_card.jpg" alt="" className="img-fluid card-img" />
      <div className="project-overlay">
        <h2>Some H</h2>
      </div>
      <div className="project-hover">
        <p>
          Some Huynya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error pariatur, eveniet omnis. Fugit unde, sint saepe minus assumenda tempora quam delectus adipisci, voluptatibus ipsam consequatur, sit velit libero quos voluptas.
        </p>
      </div>
    </div>

    <div className="project-body text-center">
      <h3 className="title">Web</h3>

      <ul className="filters filters-tag text-center">
        tag:
        <li data-filter=".html"><a href="#!">HTML</a></li>
        <li data-filter=".css"><a href="#!">CSS</a></li>
        <li data-filter=".jquery"><a href="#!">jQuery</a></li>
      </ul>

      <div className="btn-group" role="group">
        <a href="#!" className="btn  project-btn"><i className="fas fa-code"></i> Code</a>
        <a href="#!" className="btn  project-btn"><i className="far fa-eye"></i> View</a>
      </div>
    </div>
  </div>,
    category: ["all", "frontend"]
  },
  {
    name: <div className="project">
    <div className="project-head">
      <img src="http://dnevozhai.com/work/shopping_card.jpg" alt="" className="img-fluid card-img" />
      <div className="project-overlay">
        <h2>Some H</h2>
      </div>
      <div className="project-hover">
        <p>
          Some Huynya Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error pariatur, eveniet omnis. Fugit unde, sint saepe minus assumenda tempora quam delectus adipisci, voluptatibus ipsam consequatur, sit velit libero quos voluptas.
        </p>
      </div>
    </div>

    <div className="project-body text-center">
      <h3 className="title">Other</h3>

      <ul className="filters filters-tag text-center">
        tag:
        <li data-filter=".html"><a href="#!">HTML</a></li>
        <li data-filter=".css"><a href="#!">CSS</a></li>
        <li data-filter=".jquery"><a href="#!">jQuery</a></li>
      </ul>

      <div className="btn-group" role="group">
        <a href="#!" className="btn  project-btn"><i className="fas fa-code"></i> Code</a>
        <a href="#!" className="btn  project-btn"><i className="far fa-eye"></i> View</a>
      </div>
    </div>
  </div>,
    category: ["all", "others"]
  }
];

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    setTimeout(() => {
      const filtered = portfolio.map(port => ({ ...port, filtered: port.category.includes(filter) }));
      setProjects(filtered);
    }, 0);
  }, [filter]);

  //a active
  function activaPortItem() {
    // document.getElementById(this).addClass("active");
    $( this ).addClass( 'active' );

  }
  activaPortItem()
  return (
    <div id="portfolio">
       <h1>Portfolio</h1>
      <>
        <div className="portfolio__labels">
          <a onclick="activaPortItem()" active={filter === "all"} onClick={() => setFilter("all")}>All</a>
          <a active={filter === "frontend"} onClick={() => setFilter("frontend")}>Frontend</a>
          <a active={filter === "mobile"} onClick={() => setFilter("mobile")}>Mobile</a>  
          <a active={filter === "others"} onClick={() => setFilter("others")}> Others</a>
        </div>
        <div className="portfolio__container">
            <div className="col-lg-12">
              <div className="projects">
                  {projects.map(item =>
                    item.filtered === true ? <span key={item.name}>{item.name}</span> : ""
                  )}
              </div>
            </div>
        </div>
      </>
    </div>
  );
}
            
export default Portfolio
