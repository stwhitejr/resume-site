import PageSection from '../components/PageSection';
import ParallaxLayer from '../components/ParallaxLayer';
import Text from '../components/Text';

export const ABOUT_PAGE_ID = 'about_me';

const Image = ({
  fileName,
  position,
  isMobileOnly,
}: {
  fileName: string;
  position: 'left' | 'right';
  isMobileOnly: boolean;
}) => {
  return (
    <ParallaxLayer
      moveFrom={position === 'left' ? 'left-top' : 'right-bottom'}
      translate="x"
      className={`flex-1  relative  ${isMobileOnly ? 'h-full flex md:h-0 md:none' : 'hidden py-0 md:flex md:py-10'}`}
    >
      <div
        className="w-full h-[200px] bg-center bg-cover bg-no-repeat m-auto md:m-0 md:h-full rounded-xl "
        style={{
          backgroundImage: `url(/images/${fileName}.jpg)`,
        }}
      />
    </ParallaxLayer>
  );
};

const Content = ({title, children, quote, image}) => {
  return (
    <ParallaxLayer translate="x" className="flex-1 self-center">
      <div className="p-0 md:p-5 lg:px-15">
        <Text variation="subtitle" className="mb-5 md:mb-2 text-primary">
          {title}
        </Text>
        {image}
        <Text variation="body" className="pt-6 md:py-0 md:leading-7">
          {children}
        </Text>
        <div className="border-primary--light border-l-2 mt-5 p-2 px-4 italic text-gray-600">
          {quote}
        </div>
      </div>
    </ParallaxLayer>
  );
};

const AboutPage = () => {
  return (
    <PageSection
      id={ABOUT_PAGE_ID}
      bottomBuffer
      className="flex flex-col gap-15 md:gap-0 md:h-full pt-0 md:pt-10"
    >
      <div className="flex-1 flex flex-col md:flex-row gap-4">
        <Image position="left" fileName="bridge" isMobileOnly={false} />
        <Content
          title="What Sets Me Apart"
          quote="I translate ideas into
          usable, scalable solutions while keeping teams aligned."
          image={<Image position="left" fileName="bridge" isMobileOnly />}
        >
          As a frontend engineer, I excel at bringing product, design, and
          engineering together. With a background in design, I not only deliver
          the expected results but also bridge the communication gap between
          technical and non-technical stakeholders.
        </Content>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-4">
        <Content
          title="The Business Mindset"
          quote="I avoid perfection for its own sake
          and aim instead for pragmatic, meaningful outcomes that balance
          quality with results."
          image={<Image position="right" fileName="gears" isMobileOnly />}
        >
          I love to build things—and build them the right way the first time.
          But I’m equally focused on impact: every feature should have a clear
          purpose and drive business value.
        </Content>
        <Image position="right" fileName="gears" isMobileOnly={false} />
      </div>
    </PageSection>
  );
};

export default AboutPage;
