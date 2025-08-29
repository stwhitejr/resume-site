import PageSection from '../components/PageSection';
import ParallaxLayer from '../components/ParallaxLayer';
import Text from '../components/Text';

export const INTRO_PAGE_ID = 'introduction';

const IntroPage = () => {
  return (
    <PageSection
      id={INTRO_PAGE_ID}
      fullBleed
      className="flex flex-col-reverse md:flex-row h-full"
    >
      <ParallaxLayer className="flex-1 p-10 md:p-20 flex items-center">
        <div>
          <Text variation="title" className="mb-4">
            Hi, I’m Steve
          </Text>
          <Text variation="large" className="max-w-[500px] leading-8">
            I have <i>15+ years</i> designing and building for the web. I’m a
            Frontend focused engineer using primarily <i>React + Typescript</i>{' '}
            who loves solving both technical and human&nbsp;problems.
          </Text>
          <div className="border-b-2 pt-5 md:pt-0 border-primary--light md:border-none w-[50%]"></div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        translate="x"
        className="flex-1 relative min-h-[200px] overflow-hidden"
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
