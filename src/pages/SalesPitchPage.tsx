import PageSection from '../components/PageSection';
import ParallaxLayer from '../components/ParallaxLayer';
import Text from '../components/Text';

export const SALES_PITCH_PAGE_ID = 'sales_pitch';

const Image = ({
  fileName,
  position,
}: {
  fileName: string;
  position: 'left' | 'right';
}) => {
  return (
    <ParallaxLayer
      moveFrom={position === 'left' ? 'left-top' : 'right-bottom'}
      translate="x"
      className="flex-1 md:py-10 flex relative h-full"
    >
      <div
        className="w-full h-[100px] bg-center bg-cover bg-no-repeat m-auto md:m-0 md:h-full rounded-xl "
        style={{
          backgroundImage: `url(/images/${fileName}.jpg)`,
        }}
      />
    </ParallaxLayer>
  );
};

const Content = ({title, children}) => {
  return (
    <ParallaxLayer className="flex-1 pointer-events-none self-center">
      <div className="p-0 pb-7 lg:px-20">
        <Text variation="subtitle" className="mb-2 text-primary">
          {title}
        </Text>
        <Text variation="body" className="md:leading-7">
          {children}
        </Text>
      </div>
    </ParallaxLayer>
  );
};

const SalesPitchPage = () => {
  return (
    <PageSection
      id={SALES_PITCH_PAGE_ID}
      className="flex flex-col gap-5 md:gap-0 md:h-full"
    >
      <div className="flex-1 flex flex-col md:flex-row gap-4">
        <Image position="left" fileName="bridge" />
        <Content title="What Sets Me Apart">
          As a frontend engineer, I excel at bringing product, design, and
          engineering together. With a background in design, I not only deliver
          the expected results but also bridge the communication gap between
          technical and non-technical stakeholders. I translate ideas into
          usable, scalable solutions while keeping teams aligned.
        </Content>
      </div>

      <div className="flex-1 flex flex-col-reverse md:flex-row gap-4">
        <Content title="The Business Mindset">
          I love to build things—and build them the right way the first time.
          But I’m equally focused on impact: every feature should have a clear
          purpose and drive business value. I avoid perfection for its own sake
          and aim instead for pragmatic, meaningful outcomes that balance
          quality with results.
        </Content>
        <Image position="right" fileName="gears" />
      </div>
    </PageSection>
  );
};

export default SalesPitchPage;
