import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Ms. Satya <br />
          Devulapalli
        </SectionTitle>
        <SectionText>
        This is my portfolio that it contains Skills I have, projects I did, The achievments I had, and Timeline of my journey, My linkdin Profile and also my github profile.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;