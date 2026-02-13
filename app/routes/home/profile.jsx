import { Fragment } from 'react';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { DecoderText } from '~/components/decoder-text';
import styles from './profile.module.css';

export const Profile = ({ visible, id, sectionRef }) => (
  <section ref={sectionRef} id={id}>
    <Fragment>
      <Heading className={styles.title} data-visible={visible} level={3}>
        <DecoderText text="Olá, tudo bem?" start={visible} delay={500} />
      </Heading>

      <Text className={styles.description} data-visible={visible} size="l" as="p">
        Eu sou o <strong>Pedro</strong>, desenvolvedor <strong>Full Stack</strong> especializado em
        <strong> Inteligência Artificial</strong> e <strong>Automações com n8n</strong>.
        Atualmente moro em <strong>Porto Alegre</strong> e atuo no desenvolvimento de soluções
        que conectam APIs, bancos de dados e sistemas, criando fluxos inteligentes
        que automatizam processos e aumentam a eficiência de empresas e negócios.
      </Text>

      <Text className={styles.description} data-visible={visible} size="l" as="p">
        Meus projetos envolvem <strong>workflows de atendimento</strong>, automações para
        <strong> CRM</strong> e integrações entre plataformas como
        <strong> Tiny ERP, Chatwoot, PostgreSQL e Pipedrive</strong>,
        além do desenvolvimento de <strong>agentes de IA personalizados</strong>.
      </Text>

      <Text className={styles.description} data-visible={visible} size="l" as="p">
        Também desenvolvo <strong>landing pages modernas e estratégicas</strong>,
        focadas em performance e conversão.
      </Text>
    </Fragment>
  </section>
);
