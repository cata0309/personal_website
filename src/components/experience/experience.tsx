import * as React from 'react';
import ExperienceItem from './experience_item';
import content from './content';

const posterIcon = require('../../assets/img/icons/poster.png');
const presentationIcon = require('../../assets/img/icons/presentation.png');

class Experience extends React.Component<any, any> {
  public render() {
    return (
      <div className="experience">
        <h1 className="experience-title">
          Work Experience
          <a
            className="experience-pdf-tip"
            href="dist/resume/PeterFonsecaResume.pdf"
            target="blank"
          >
            [PDF]
          </a>
        </h1>
        <div>
          {content.workExperiences.map((experienceItem, idx) => (
            <ExperienceItem experience={experienceItem} key={idx} />
          ))}
        </div>
        <div>
          <h2 className="experience-title">Education</h2>
        </div>
        <div>
          {content.education.map((experienceItem, idx) => (
            <ExperienceItem experience={experienceItem} key={idx} />
          ))}
        </div>
        <div>
          <h2 className="experience-title">Posters/Presentations</h2>
          <div className="experience-item-interactive">
            <div className="experience-item-content">
              <div className="experience-item-left">
                <img src={posterIcon} className="experience-item-icon" alt="poster" />
              </div>
              <div className="experience-item-right">
                <p>
                  Dissociations in Socioemotional Test Performance Predict Neurodegeneration in
                  Intrinsic Connectivity Networks
                </p>
                <p>
                  <span className="experience-item-date">2016</span>
                  <span className="experience-item-dot">·</span>
                  <span>poster</span>
                  <span className="experience-item-dot">·</span>
                  AAN
                </p>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-item-content">
              <div className="experience-item-left">
                <img src={presentationIcon} className="experience-item-icon" alt="presentation" />
              </div>
              <div className="experience-item-right">
                <p>
                  PP2A-Rts1: Master Regulator of Nutrient-Modulated Cell Size Control in
                  <em>S. cerevisiae</em>
                </p>
                <p>
                  <span className="experience-item-date">2014</span>
                  <span className="experience-item-dot">·</span>
                  presentation
                  <span className="experience-item-dot">·</span>
                  Kellogg Lab Undergraduate Researchers Talks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
