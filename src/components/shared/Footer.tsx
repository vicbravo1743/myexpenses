import * as React from "react";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  return (
    <>
      <footer className="main-footer">
        {/* To the right */}
        <div className="pull-right hidden-xs">Anything you want</div>
        {/* Default to the left */}
        <strong>
          Copyright © 2016 <a href="fake-url">Company</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
