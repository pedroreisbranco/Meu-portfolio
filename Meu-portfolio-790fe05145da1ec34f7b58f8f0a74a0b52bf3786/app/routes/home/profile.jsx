import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
  <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
    <DecoderText text="Olá, tudo bem?" start={visible} delay={500} />
  </Heading>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    Eu sou o <strong>Pedro</strong>, desenvolvedor <strong>Full Stack</strong> especializado em{' '}
    <strong>Inteligência Artificial</strong> e <strong>Automação com n8n</strong>. Atualmente moro em{' '}
    <strong>Porto Alegre</strong> e trabalho com desenvolvimento de soluções que conectam APIs, bancos de dados e
    automações inteligentes para empresas e negócios.
  </Text>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    Meus projetos incluem desenvolvimento de <strong>workflows de atendimento, automação para CRM</strong>, integrações
    entre plataformas como <strong>Tiny ERP, Chatwoot, PostgreSQL, Pipedrive</strong> e muito mais. Tenho também
    experiência em <strong>desenvolvimento de firmware com Arduino</strong> para diagnósticos e soluções de hardware.
  </Text>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    No meu tempo livre gosto de ir na <strong>Academia</strong>, explorar tecnologias, jogar e estudar inteligência
    artificial. Estou sempre aberto a conversar sobre novos projetos e desafios.
  </Text>
</Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Me envie uma mensagem
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Sobre mim
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
