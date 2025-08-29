import PageSection from '../components/PageSection';
import ParallaxLayer from '../components/ParallaxLayer';
import Text from '../components/Text';

export const CONTACT_PAGE_ID = 'contact';

const ContactPage = () => {
  return (
    <PageSection id={CONTACT_PAGE_ID} className="bg-white flex items-center">
      <ParallaxLayer className="w-full">
        <div className="mx-auto max-w-3xl px-6 flex flex-col gap-8 text-center">
          <Text variation="subtitle">781-249-8455</Text>
          <Text variation="subtitle">
            <a href="mailto:stwhitejr@gmail.com">stwhitejr@gmail.com</a>
          </Text>
          <Text variation="large">
            <a
              href="https://www.linkedin.com/in/steve-white-a44b19102/"
              target="_blank"
            >
              LinkedIn
            </a>{' '}
            •{' '}
            <a href="https://www.github.com/stwhitejr" target="_blank">
              Github
            </a>
          </Text>
        </div>
      </ParallaxLayer>
    </PageSection>
  );
};

export default ContactPage;
