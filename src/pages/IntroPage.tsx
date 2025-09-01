import PageSection from '../components/PageSection';
import ParallaxLayer from '../components/ParallaxLayer';
import Text from '../components/Text';

export const INTRO_PAGE_ID = 'introduction';

const IntroPage = () => {
  return (
    <PageSection
      id={INTRO_PAGE_ID}
      fullBleed
      className="flex flex-col-reverse md:flex-row md:h-full pt-15 md:pt-0"
    >
      <ParallaxLayer className="flex-1 p-10 md:p-20 items-center flex">
        <div>
          <Text variation="title" className="mb-1 md:mb-4">
            Hi, I’m Steve
          </Text>
          <Text
            variation="large"
            className="md:max-w-[500px] leading-7 md:leading-8"
          >
            I have <i>15+ years</i> designing and building for the web. I’m a
            Frontend focused engineer using primarily <i>React + Typescript</i>{' '}
            who loves solving both technical and human&nbsp;problems.
          </Text>
          <div className="md:hidden border-b-2 pt-5 mb-10 border-primary--light w-[50%]"></div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        translate="x"
        className="max-h-[400px] sm:max-h-[400px] md:max-h-none flex-1 md:flex-1 relative min-h-[200px] overflow-hidden"
      >
        <img
          src="/images/headshot.jpg"
          className="w-full h-full object-cover object-top"
        />
      </ParallaxLayer>
    </PageSection>
  );
};

export default IntroPage;
