import * as React from "react";

export interface SidebarProps {}

const Sidebar: React.SFC = () => {
  return (
    <>
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle"
                alt="User"
              />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              {/* Status */}
              <a href="fake-url">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>
          {/* search form (Optional) */}
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input
                type="text"
                name="q"
                className="form-control"
                placeholder="Search..."
              />
              <span className="input-group-btn">
                <button
                  type="submit"
                  name="search"
                  id="search-btn"
                  className="btn btn-flat"
                >
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
          {/* /.search form */}
          {/* Sidebar Menu */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">HEADER</li>
            {/* Optionally, you can add icons to the links */}
            <li className="active">
              <a href="fake-url">
                <i className="fa fa-link" /> <span>Link</span>
              </a>
            </li>
            <li>
              <a href="fake-url">
                <i className="fa fa-link" /> <span>Another Link</span>
              </a>
            </li>
            <li className="treeview">
              <a href="">
                <i className="fa fa-link" /> <span>Multilevel</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="fake-url">Link in level 2</a>
                </li>
                <li>
                  <a href="fake-url">Link in level 2</a>
                </li>
              </ul>
            </li>
          </ul>
          {/* /.sidebar-menu */}
        </section>
        {/* /.sidebar */}
      </aside>
    </>
  );
};

export default Sidebar;
