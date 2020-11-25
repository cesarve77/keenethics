import React from 'react';

import Layout from '../components/layout/main';
import Background from '../components/content/background';
import Navigation from '../components/project/navigation';
import PortfolioTechnologyTags from '../components/portfolio/PortfolioTechnologyTags';
import CallToActionButton from '../components/content/CallToActionButton';

const baseColor = '#ab2e6b';

const ProjectPhenix = () => (
  <Layout>
    <div className="content-wrap">
      <div className="content-block content-block-project">
        <div className="project-content">
          <div className="project-content-summary" style={{ background: baseColor }}>
            <div className="project-content-summary-inner">
              <h2 className="title">Phenix</h2>
              <h3 className="duration">
                <span>Duration:</span>
                {' '}
                5 months, project continues
              </h3>
              <p className="description">
                Online video-streaming
              </p>
              <PortfolioTechnologyTags tags={['Meteor', 'React', 'Redux']} />
            </div>
            <div className="project-content-preview">
              <div className="project-content-preview-inner">
                <img src="/static/images/project/macbook.png" alt="macbook" className="macbook" />
                <img src="/static/images/project/phenix.png" alt="Phenix" className="screen" />
              </div>
            </div>
            <Background />
          </div>
          <div className="project-content-more">
            <p>
              Web app that allows to publish different types of streams is several ways:
              peer-to-peer, multi-party-chat-room, sync-watch, etc.
            </p>
            <div className="project-achievements">
              <h3>Achievements</h3>
              <ul>
                <li>
                  Created several npm independent npm packages for app. Like ChatView, Player,
                  GUMConfiguration, GUMVerification;
                </li>
                <li>
                  Importing user&apos;s photo from Gravatar by email;
                </li>
                <li>
                  Multiple themes (dark/light);
                </li>
                <li>
                  Adaptive design;
                </li>
              </ul>
            </div>

            <h2>Do You Have a Similar Project Idea?</h2>
            <CallToActionButton
              title="SHARE YOUR IDEA"
              buttonBefore={(
                <a
                  href="https://phenixp2p.com"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <button type="button" className="call-to-cation-btn -secondary">
                    CHECK THE PROJECT
                  </button>
                </a>
              )}
            />
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPhenix;
