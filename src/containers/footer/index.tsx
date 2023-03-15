import { Separator, Signature, Socials } from '@components';
import { Section } from '@core/theme';

export const Footer = () => (
  <footer>
    <Section>
      <Separator>
        <Signature />
        <Socials />
      </Separator>
    </Section>
  </footer>
);
