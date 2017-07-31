import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/main';

export default class AboutTeam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { url } = this.props;

    return (
      <Layout currentURL={url}>
        <div className="content-wrap content-wrap-bg">
          <div className="content-socket content-socket-a">
            <div className="title-page">
              <div className="title">Open Source</div>
              <div className="title-s">We contribute a whole lot</div>
            </div>
            <div className="orbit-wrap inner">
              <ul className="orbit">
                <li /><li /><li /><li />
              </ul>
              <div className="orbit-star orbit-star-1">
                <span />
              </div>
              <div className="orbit-star orbit-star-2">
                <span />
              </div>
              <div className="orbit-star orbit-star-3">
                <span />
              </div>
              <div className="orbit-star orbit-star-4">
                <span />
              </div>
            </div>
            <div className="stars-wrap">
              <div className="stars-1" />
              <div className="stars-2" />
              <div className="stars-3" />
              <div className="stars-4" />
            </div>
          </div>
          <div className="content-os">
            <img className="mb" src="/static/images/macbook.png" alt="" />

            <div className="content-os-socket top">
              <div className="title">Why Do We Support <br /> Open Source?</div>

              <a href="" className="btn btn-g btn-ico tablet-vis">
                <img className="ico" width="20" src="/static/images/svg/ico-git.svg" alt="" />
                VISIT OUR GITHUB
              </a>
            </div>
            <div className="content-os-socket content">
              <p>
                Whether you want it or not, businesses and regular users rely on open source
                software. Most of the servers and super-computers run Linux. Android-phones gained
                large market-share. Huge amount of web- and mobile-applications are built on top of
                open-source frameworks and libraries.
              </p>
              <p>
                The main reason for business to use open-source software is higher cost-efficiency.
                Just think about it: you can build your application on top of huge experience of
                previous developers. You can avoid their mistakes and take best parts from their
                practices. And that’s usually totally free.
              </p>
              <p>
                For example when using JavaScript for applications you can benefit from a huge
                amount (around half a million) of packages available through npm. There’s even a
                joke that you can’t think of a word that isn’t used as a name of package!
              </p>
              <p>
                node.js which is used to run JavaScript on the server-side is also totally
                open-source and supported by several companies. Chrome and Firefox together have
                more than a half of browsers’ market share. And they are also open-source.
              </p>
              <p>
                But open source is not only about cost. It’s also about quality and security. This
                kind of software can be improved or forked by any of it’s users. Issues can be
                reported and fixed pretty quickly given they affect large amount of users.
              </p>
              <p>
                And this is where ethical approach takes place. Not only we use open-source, but
                also we support it. We even have it in our competencies matrix. Open-source
                contributions:
              </p>
              <ul>
                <li>
                  can have direct benefit for a project developer works on (e. g. some bug in the
                  framework can be fixed);
                </li>
                <li>
                  increases code-quality of contributor: his code should pass code-review of other
                  developers working on the same open-source project and should fit well with their
                  architectural approach;
                </li>
                <li>
                  improves our world and increases number of problems that can be easily resolved
                  via open-source;
                </li>
              </ul>
              <p>
                Besides, working with open source is usually fun for those who are really passionate
                about software-development. When helping improve something, or when building some
                new library, usually you aren’t limited with budget, but only with your own time.
                Some even treat open-source as their hobby and build truly amazing projects just via
                their enthusiasm.
              </p>
              <a
                href="https://github.com/keenethics"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-g btn-ico tablet-hide"
              >
                <img className="ico" width="20" src="/static/images/svg/ico-git.svg" alt="" />
                VISIT OUR GITHUB
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

AboutTeam.propTypes = {
  url: PropTypes.object,
};

AboutTeam.defaultProps = {
  url: {},
};