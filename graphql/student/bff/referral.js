// const type = [
//   'accordions',
//   'multiple',
//   'unique',
//   'description'
// ]

const options = [
  { value: 'yes', label: "Sim" },
  { value: 'no', label: "Não" },
  { value: 'sometimes', label: "Ás vezes" },
]
const options1 = [
  { value: 'with_support', label: "Realiza sem apoio" },
  { value: 'without_support', label: "Realiza com apoio" },
  { value: 'unrealize', label: "Não realiza" },
  { value: 'not_observed', label: "Não foi observado" },
]

module.exports.referral = {
  title: 'Encaminhamento',
  steps: [
    {
      name: 'Suspeitas',
      type: 'common',
      questions: [
        {
          type: 'multiple',
          title: 'Transtorno de Aprendizagem',
          options: [
            { name: 'DISCALCULIA', label: "Discalculia", value: false },
            { name: 'DISGRAFIA', label: "Disgrafia", value: false },
            { name: 'DISLEXIA', label: "Dislexia", value: false },
            { name: 'DISORTOGRAFIA', label: "Disortografia", value: false },
            { name: 'TDAH', label: "TDAH", value: false },
          ],
        },
        {
          type: 'multiple',
          title: 'Transtorno de Comportamento',
          options: [
            { name: 'TOD', label: "TOD", value: false },
            { name: 'ANSIEDADE', label: "Ansiedade", value: false },
            { name: 'TOC', label: "TOC", value: false },
          ],
        },
        {
          type: 'multiple',
          title: 'Transtorno de Linguagem',
          options: [
            { name: 'DISFONIAS', label: "Disfonias", value: false },
            { name: 'AFASIA', label: "Afasia", value: false },
            { name: 'DISFEMIA', label: "Disfemia (Gagueira e Tartamudez)", value: false },
            { name: 'DISLALIA', label: "Dislalia (Cebolinha)", value: false },
          ],
        },
        {
          type: 'unique',
          title: 'Deficiência intelectual',
          options: [
            { value: 'light', label: "Leve" },
            { value: 'moderate', label: "Moderado" },
            { value: 'serious', label: "Grave" },
          ],
          value: ''
        },
        {
          type: 'describe',
          title: 'Síndromes',
          name: 'syndromes',
          value: '',
        }
      ]
    },
    {
      name: 'Habilidades',
      type: 'accordion',
      questions: [
        {
          title: 'Socioemocionais',
          questions: [
            { label: 'O estudante apresenta empatia?', type: 'unique', options, value: '' },
            { label: 'O estudante apresenta-se feliz?', type: 'unique', options, value: '' },
            { label: 'O estudante demonstra autoestima?', type: 'unique', options, value: '' },
            { label: 'O aluno demonstra comportamento ético?', type: 'unique', options, value: '' },
            { label: 'O estudante apresenta paciência?', type: 'unique', options, value: '' },
            { label: 'O estudante demonstra autoconhecimento?', type: 'unique', options, value: '' },
            { label: 'O estudante demonstra confiança em si e nos outros?', type: 'unique', options, value: '' },
            { label: 'O estudante apresenta responsabilidade com suas obrigações escolares?', type: 'unique', options, value: '' },
            { label: 'O estudante é autonomo no ambiente escolar', type: 'unique', options, value: '' },
            { label: 'O estudante demonstra criatividade?', type: 'unique', options, value: '' }
          ]
        },
        {
          title: 'Comunicação Oral',
          questions: [
            { label: 'Relata acontecimentos simples de modo compreensível?', type: 'unique', options: options1, value: '' },
            { label: 'Lembra de dar recados após, aproximadamente, dez minutos?', type: 'unique', options: options1, value: '' },
            { label: 'Comunica com outras pessoas usando um tipo de linguagem (gestos, comunicação alternativa) que não seja a oral?', type: 'unique', options: options1, value: '' },
            { label: 'Utiliza a linguagem oral para se comunicar?', type: 'unique', options: options1, value: '' }
          ]
        },
        {
          title: 'Leitura e Escrita',
          questions: [
            { label: "Conhece as letras do alfabeto?", type: 'unique', options: options1, value: '' },
            { label: "Reconhece a diferença entre letras e números?", type: 'unique', options: options1, value: '' },
            { label: "Domina sílabas simples? ", type: 'unique', options: options1, value: '' },
            { label: "Ouve histórias com atenção? ", type: 'unique', options: options1, value: '' },
            { label: "Consegue compreender erecontarhistórias?", type: 'unique', options: options1, value: '' },
            { label: "Participa de jogos, atendendo as regras?", type: 'unique', options: options1, value: '' },
            { label: "Utiliza vocabulário adequado para a faixa etária?", type: 'unique', options: options1, value: '' },
            { label: "Sabe soletrar?", type: 'unique', options: options1, value: '' },
            { label: "Consegue escrever palavras simples?", type: 'unique', options: options1, value: '' },
            { label: "É capaz de assinar seu nome?", type: 'unique', options: options1, value: '' },
            { label: "Escreve endereços (com objetivo de saber onde chegar)?", type: 'unique', options: options1, value: '' },
            { label: "Escreve pequenos textos e/ou bilhetes?", type: 'unique', options: options1, value: '' },
            { label: "Escreve sob ditado?", type: 'unique', options: options1, value: '' },
            { label: "Lê com compreensão, pequenos textos?", type: 'unique', options: options1, value: '' },
            { label: "Lê e segue instruções impressas?", type: 'unique', options: options1, value: '' },
            { label: "Utiliza a habilidade de leitura para saber informações, por exemplo em livros, jornais e revistas?", type: 'unique', options: options1, value: '' }
          ]
        },
        {
          title: 'Raciocínio Lógico Matemático',
          questions: [
            { label: "Relaciona quantidade ao número?", type: 'unique', options: options1, value: '' },
            { label: "Soluciona problemas simples?", type: 'unique', options: options1, value: '' },
            { label: "Identifica o valor do dinheiro? ", type: 'unique', options: options1, value: '' },
            { label: "Reconhece os valores dos preços de produtos? ", type: 'unique', options: options1, value: '' },
            { label: "Diferencia notas e moedas?", type: 'unique', options: options1, value: '' },
            { label: "Sabe agrupar o dinheiro para formar valores?", type: 'unique', options: options1, value: '' },
            { label: "Dá troco, quando necessário, nas atividades realizadas em sala de aula?", type: 'unique', options: options1, value: '' },
            { label: "Possui conceitos como cor, tamanho, formas geométricas, posição direita e esquerda, antecessor e sucessor?", type: 'unique', options: options1, value: '' },
            { label: "Reconhece a relação entre número e dias do mês (localização temporal)?", type: 'unique', options: options1, value: '' },
            { label: "Reconhece as medidas de tempo (ano, hora, minuto, dia, semana...)?", type: 'unique', options: options1, value: '' },
            { label: "Identifica dias da semana?", type: 'unique', options: options1, value: '' },
            {
              label: "Reconhece horas?",
              type: 'unique',
              options: options1,
              show_sub_questions: options1[0],
              sub_questions: [
                { label: "Reconhece horas em relógio digital?", type: 'unique', options: options1, value: '' },
                { label: "Reconhece horas não exatas (meia hora, sete minutos) em relógio digital?", type: 'unique', options: options1, value: '' },
                { label: "Reconhece horas exatas em relógios com ponteiros?", type: 'unique', options: options1, value: '' },
                { label: "Reconhece horas não exatas (meia hora, sete minutos) em relógio com ponteiros?", type: 'unique', options: options1, value: '' },
                { label: "Associa horários aos acontecimentos?", type: 'unique', options: options1, value: '' },
              ],
              value: ''
            },
            { label: "Compreende conceitos matemáticos, como dobro e metade?", type: 'unique', options: options1, value: '' },
            { label: "Resolve operações matemáticas (adição e subtração) com apoio de material concreto?", type: 'unique', options: options1, value: '' },
            { label: "Demonstra curiosidade. Pergunta sobre o funcionamento das coisas?", type: 'unique', options: options1, value: '' },
            { label: "Gosta de jogos envolvendo lógica, como quebra-cabeças e charadas, entre outros?", type: 'unique', options: options1, value: '' },
            { label: "Organiza figuras em ordem lógica?", type: 'unique', options: options1, value: '' },
          ]
        },
        {
          title: 'Computação na escola',
          questions: [
            { label: "Usa o computador com relativa autonomia (liga, desliga, acessa arquivos e programas)?", type: 'unique', options: options1, value: '' },
            { label: "Sabe usar o computador e a internet quando disponibilizados na escola?", type: 'unique', options: options1, value: '' },
          ]
        },
      ]
    },
    {
      name: 'Observações',
      type: 'common',
      questions: [
        {
          type: 'describe',
          title: 'Desenvolvimento cognitivo',
          name: 'cognitive_development',
          value: '',
        },
        {
          type: 'describe',
          title: 'Relacionamento social',
          name: 'socio_relational',
          value: '',
        },
        {
          type: 'describe',
          title: 'Dificudades encontradas',
          name: 'difficulties_found',
          value: '',
        },
        {
          type: 'describe',
          title: 'Possibilidades observadas',
          name: 'possibilities_observed',
          value: '',
        },
        {
          type: 'describe',
          title: 'Possibilidades observadas',
          name: 'possibilities_observed',
          value: '',
        },
        {
          type: 'describe',
          title: 'Tempo de escolaridade',
          name: 'time_before_after_current_school',
          value: '',
        },
        {
          type: 'describe',
          title: 'Aprendizagens consolidadas',
          name: 'consolidated_learning',
          value: '',
        },
        {
          type: 'describe',
          title: 'Objetivos para este aluno',
          name: 'objectives_student',
          value: '',
        },
      ]
    }
  ]
}

