import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.marcador}>ensaio histórico-teológico</p>
        <h1>A Reforma Calvinista: vocação, disciplina e visão de mundo</h1>
        <p className={styles.resumo}>
          A Reforma Calvinista redefiniu a fé cristã ocidental ao conjugar rigor
          teológico, reorganização social e um senso profundo de vocação. Ao
          examinar seus fundamentos, percebemos como a obra de Calvino se
          transformou em um projeto civilizacional que tocou liturgia,
          instituições políticas, práticas econômicas e a própria subjetividade
          moderna.
        </p>
      </header>

      <section className={styles.section}>
        <h2>Genebra como laboratório espiritual</h2>
        <p>
          João Calvino chegou a Genebra em 1536 com a convicção de que a cidade
          poderia se tornar uma comunidade-modelo, organizada em torno da
          soberania divina e da disciplina comunitária. Ao estabelecer a
          <strong> Ordem Eclesiástica</strong>, ele articulou um sistema em que
          pastores, doutores, presbíteros e diáconos partilhavam autoridade, com
          o consistório supervisionando a moral pública. Calvino via essa
          estrutura como um corpo vivo: cada membro chamado a servir, cada
          função regulada pela Palavra.
        </p>
        <p>
          Essa reorganização não era mero formalismo; tratava-se de moldar
          afeições, hábitos e vocações. O culto, despido de ornamentos
          considerados supérfluos, centrava-se na exposição das Escrituras e na
          participação consciente da comunidade. A disciplina tornava-se um ato
          pedagógico coletivo, destinado a reconduzir o indivíduo à vida
          reconciliada com Deus. A reforma, portanto, penetrava o cotidiano,
          transformando tavernas, mercados e lares em extensões da assembleia.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Doutrina da vocação e economia moral</h2>
        <p>
          Um dos pilares da Reforma Calvinista foi a compreensão de que toda
          atividade humana pode glorificar a Deus quando vivida como vocação.
          Ao rejeitar a hierarquia medieval entre vida religiosa e vida
          secular, Calvino afirmou que o trabalho mais simples participa da
          providência divina. Esse insight deslocou o centro da espiritualidade
          para o cotidiano e inaugurou uma ética que valorizava diligência,
          sobriedade e responsabilidade diante dos dons recebidos.
        </p>
        <p>
          Ao mesmo tempo, a visão calvinista da soberania divina e da
          predestinação não produziu fatalismo, mas um senso intenso de
          gratidão ativa. A segurança da eleição, interpretada como motivo de
          humildade, conduzia a uma disciplina rigorosa do desejo. O capital
          acumulado não era um fim em si, mas devia ser investido na edificação
          da comunidade, na assistência aos pobres e na sustentação das
          instituições educativas criadas pela reforma.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Palavra, consciência e ordenamento político</h2>
        <p>
          A ênfase calvinista na autoridade suprema das Escrituras tinha
          implicações políticas. Ao submeter príncipes e povo à mesma Palavra,
          Calvino legou uma crítica às pretensões absolutistas do século XVI.
          Pensadores posteriores, como Teodoro de Beza e os monarcômacos
          franceses, desenvolveram a ideia de que a resistência ao tirano pode
          ser um ato de fidelidade a Deus.
        </p>
        <p>
          Esse movimento não resultou em anarquia, mas em uma reconfiguração da
          obediência. A consagração da consciência ao governo de Cristo
          implicava responsabilizar magistrados e súditos por um pacto
          coletivo. Dessa forma, a Reforma Calvinista contribuiu
          decisivamente para os debates modernos sobre soberania popular,
          contrato social e limites do poder civil.
        </p>
      </section>

      <aside className={styles.destacado}>
        <p>
          “Quase toda a sabedoria que possuímos, a saber, conhecimento de Deus e
          de nós mesmos, consiste nestes dois pontos: conhecer o Criador e
          conhecer a criatura.” — João Calvino, <em>Institutas</em>, I.1.1
        </p>
      </aside>

      <section className={styles.section}>
        <h2>Redes de diáspora e legado educacional</h2>
        <p>
          A expulsão de huguenotes da França e a migração de reformados
          flamengos e ingleses espalharam a sensibilidade calvinista por
          cidades portuárias, colônias atlânticas e centros universitários. Em
          cada novo contexto, a ênfase na educação e na formação doutrinária
          gerou academias, catecismos e tratados que serviram tanto à
          evangelização quanto à consolidação cultural. O modelo genebrino
          tornou-se matriz de experiências em lugares tão distintos quanto
          Heidelberg, La Rochelle e Nova Amsterdã.
        </p>
        <p>
          As redes de impressão e correspondência, cuidadosamente coordenadas,
          permitiram que liturgias, salmos metrificados e confissões de fé
          circulassem com rapidez inédita. O calvinismo era, assim, um
          movimento textual, que ensinava cada crente a ler a Bíblia e a
          interpretar o tempo presente à luz da narrativa da redenção.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Modernidade e inquietações contemporâneas</h2>
        <p>
          Ao articular uma ética do trabalho, uma política da consciência e uma
          espiritualidade da Palavra, a Reforma Calvinista preparou terreno
          para questões que ainda habitam a modernidade tardia. O impulso para
          racionalizar instituições, registrar contratos e disciplinar afetos
          encontra ecos em debates sobre capitalismo, democracia e subjetividade.
        </p>
        <p>
          Contudo, o legado calvinista também nos confronta com tensões
          persistentes: como equilibrar o zelo comunitário e a liberdade
          individual? Como sustentar a justiça social sem abdicar da graça?
          Revisitar Calvino não significa repetir fórmulas, mas reencontrar uma
          tradição que insiste em unir fé viva e responsabilidade pública, Bíblia
          e cidade, doutrina e misericórdia.
        </p>
      </section>

      <footer className={styles.footer}>
        <span>Ensaio preparado para leitura contemplativa.</span>
        <span>Genebra, século XXI.</span>
      </footer>
    </main>
  );
}
