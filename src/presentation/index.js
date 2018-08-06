// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
} from 'spectacle';

// Import theme
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

const images = {
  vbCourt: require('./../assets/images/court-1.png'),
  liberoCourt: require('./../assets/images/court-2.png'),
  setterCourt: require('./../assets/images/court-3.png'),
  outside1Court: require('./../assets/images/court-4.png'),
  oppositeCourt: require('./../assets/images/court-5.png'),
  middleCourt: require('./../assets/images/court-6.png'),
  outside2Court: require('./../assets/images/court-7.png'),
  rotate0: require('./../assets/images/rotate-0.png'),
  rotate1: require('./../assets/images/rotate-1.png'),
  rotate2: require('./../assets/images/rotate-2.png'),
  rotate3: require('./../assets/images/rotate-3.png'),
  oor: require('./../assets/images/out-of-rotation-example.png'),
  rotation1: require('./../assets/images/rotation-1.png'),
};

preloader(images);

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#388a96',
    quartenary: '#3cd7c4',
  },
  {
    primary: 'Montserrat',
    secondary: 'Lato',
  }
);

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck theme={theme} progress="bar">
        <Slide bgColor="quartenary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Indoor Volleyball
          </Heading>
          <Text textColor="primary" textSize="1.25em">
            Rules, Positions, & Rotations in 10 minutes
          </Text>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Volleyball is <span style={{textDecoration:'underline', fontSize: '1.75em'}}>95%</span> mentality and <span style={{fontSize: '0.5em'}}>5%</span> talent.</Quote>
            <Text textColor="primary" textFont="Didot">- Coach Donald</Text>
          </BlockQuote>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading textColor="primary">Skills</Heading>
          <List>
            <ListItem>Serving</ListItem>
            <ListItem textColor="quartenary">Passing</ListItem>
            <ListItem textColor="quartenary">Setting</ListItem>
            <ListItem textColor="quartenary">Hitting</ListItem>
            <ListItem textColor="quartenary">Blocking</ListItem>
          </List>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading textColor="primary">Skills</Heading>
          <List>
            <ListItem>Serving</ListItem>
            <ListItem>Passing</ListItem>
            <ListItem textColor="quartenary">Setting</ListItem>
            <ListItem textColor="quartenary">Hitting</ListItem>
            <ListItem textColor="quartenary">Blocking</ListItem>
          </List>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading textColor="primary">Skills</Heading>
          <List>
            <ListItem>Serving</ListItem>
            <ListItem>Passing</ListItem>
            <ListItem>Setting</ListItem>
            <ListItem textColor="quartenary">Hitting</ListItem>
            <ListItem textColor="quartenary">Blocking</ListItem>
          </List>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading textColor="primary">Skills</Heading>
          <List>
            <ListItem>Serving</ListItem>
            <ListItem>Passing</ListItem>
            <ListItem>Setting</ListItem>
            <ListItem>Hitting</ListItem>
            <ListItem textColor="quartenary">Blocking</ListItem>
          </List>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading textColor="primary">Skills</Heading>
          <List>
            <ListItem>Serving</ListItem>
            <ListItem>Passing</ListItem>
            <ListItem>Setting</ListItem>
            <ListItem>Hitting</ListItem>
            <ListItem>Blocking</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Rules</Heading>
          <Text>Touch the ball only 3 times</Text>
          <Text textColor="primary">Don't touch the ball consecutively</Text>
          <Text textColor="primary">Never touch the net</Text>
          <Text textColor="primary">Never go under the net</Text>
        </Slide>
        <Slide>
          <Heading>Rules</Heading>
          <Text>Touch the ball only 3 times</Text>
          <Text>Don't touch the ball consecutively</Text>
          <Text textColor="primary">Never touch the net</Text>
          <Text textColor="primary">Never go under the net</Text>
        </Slide>
        <Slide>
          <Heading>Rules</Heading>
          <Text>Touch the ball only 3 times</Text>
          <Text>Don't touch the ball consecutively</Text>
          <Text>Never touch the net</Text>
          <Text textColor="primary">Never go under the net</Text>
        </Slide>
        <Slide>
          <Heading>Rules</Heading>
          <Text>Touch the ball only 3 times</Text>
          <Text>Don't touch the ball consecutively</Text>
          <Text>Never touch the net</Text>
          <Text>Never go under the net</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Positions</Heading>
          <Image src={images.vbCourt.replace('/', '')}></Image>
          <Text textColor="primary">Empty</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Positions</Heading>
          <Image src={images.liberoCourt.replace('/', '')}></Image>
          <Text align="center">Libero</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Positions</Heading>
          <Image src={images.setterCourt.replace('/', '')}></Image>
          <Text align="center">Setter</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Positions</Heading>
          <Image src={images.outside1Court.replace('/', '')}></Image>
          <Text align="center">Outside Hitter 1</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Positions</Heading>
          <Image src={images.oppositeCourt.replace('/', '')}></Image>
          <Text align="center">Opposite Hitter</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Positions</Heading>
          <Image src={images.middleCourt.replace('/', '')}></Image>
          <Text align="center">Middle Hitter</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Positions</Heading>
          <Image src={images.outside2Court.replace('/', '')}></Image>
          <Text align="center">Outside Hitter 2</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Rotate</Heading>
          <Image src={images.rotate0.replace('/', '')}></Image>
          <Text textColor="primary">Empty</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Rotate</Heading>
          <Image src={images.rotate1.replace('/', '')}></Image>
          <Text textColor="primary">Empty</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Rotate</Heading>
          <Image src={images.rotate2.replace('/', '')}></Image>
          <Text textColor="primary">Empty</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Rotate</Heading>
          <Image src={images.rotate3.replace('/', '')}></Image>
          <Text textColor="primary">Empty</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Rotate</Heading>
          <Image src={images.oor.replace('/', '')}></Image>
          <Text>Out of Rotation</Text>
        </Slide>
        <Slide progressColor="tertiary" transition={['fade']} transitionDuration={500}>
          <Heading textColor="secondary">Rotate</Heading>
          <Image src={images.rotation1.replace('/', '')}></Image>
          <Text>The Solution: Rotations</Text>
        </Slide>
      </Deck>
    );
  }
}
