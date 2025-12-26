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
      entre plataformas como <strong>Tiny ERP, Chatwoot, PostgreSQL, Pipedrive</strong> e muito mais, incluindo o desenvolvimento de <strong>agentes de IA</strong>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      No meu tempo livre gosto de ir na <strong>Academia</strong>, explorar tecnologias, jogar e estudar inteligência
      artificial. Estou sempre aberto a conversar sobre novos projetos e desafios.
    </Text>
  </Fragment>
);
