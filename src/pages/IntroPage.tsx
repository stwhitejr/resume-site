import PageSection from '../components/PageSection';
import ParallaxLayer from '../components/ParallaxLayer';
import Text from '../components/Text';

export const INTRO_PAGE_ID = 'introduction';

const IntroPage = () => {
  return (
    <PageSection
      id={INTRO_PAGE_ID}
      fullBleed
      // Adding h-full will enforce the overflow hidden and cut off any excess
      className="flex flex-col-reverse md:flex-row h-full"
    >
      <ParallaxLayer className="flex-1 self-center">
        <div className="p-20">
          <Text variation="title" className="mb-4">
            Hi, I’m Steve
          </Text>
          <Text variation="large" className="leading-8">
            I have <i>15+ years</i> designing and building for the web. I’m a
            Frontend focused engineer using primarily <i>React + Typescript</i>{' '}
            who loves solving both technical and human problems.
          </Text>
        </div>
      </ParallaxLayer>

      <ParallaxLayer translate="x" className="flex-1 relative overflow-hidden">
        <img
          src="/images/headshot.jpg"
          className="w-full h-full object-cover object-[0px_-50px] md:object-top"
        />
      </ParallaxLayer>
    </PageSection>
  );
};

export default IntroPage;
