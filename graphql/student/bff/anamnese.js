const yesNo = [
  { value: 'yes', label: 'Sim' },
  { value: 'no', label: 'Não' },
]

const hand = [
  { value: 'left', label: 'Esquerda' },
  { value: 'right', label: 'Direita' },
]

module.exports.anamnese = {
  title: 'Anamnese',
  steps: [
    {
      name: 'Concepção',
      type: 'common',
      questions: [
        {
          type: 'unique',
          title: 'Possui doença pré existente antes da gestação? ',
          options: yesNo,
        },
        {
          type: 'describe',
          title: 'Se sim, qual? ',
          value: '',
        },
        {
          type: 'unique',
          title: 'O filho é',
          options: [
            { value: 'biological', label: 'Biológico' },
            { value: 'adoptive', label: 'Adotivo' },
          ],
        },
        {
          type: 'unique',
          title: 'Foi desejado?',
          options: yesNo,
        },
        {
          type: 'unique',
          title: 'Pertubou a vida do casal oude um dos pais? ',
          options: yesNo,
        },
        {
          type: 'describe',
          title: 'Como foi a gestação ',
          value: '',
        },
        {
          type: 'unique',
          title: 'Teve coidados pré-natal? ',
          options: yesNo,
        },
        // IF yes
        {
          type: 'unique',
          title: 'Teve doença durante pré-natal? ',
          options: yesNo,
        },
        {
          type: 'describe',
          title: 'Quais? ',
          value: '',
        },
        {
          type: 'describe',
          title: 'Quais sintomas? ',
          value: '',
        },
        // ENDIF
        {
          type: 'unique',
          title: 'Como foi alimentação? ',
          options: [
            { value: 'good', label: 'Bom' },
            { value: 'bad', label: 'Ruim' },
          ],
        },
        // MUDAR PARA NUMBER FUTURAMANTE
        {
          type: 'describe',
          title: 'Descobriu a gestação com quantos meses? ',
          value: '',
        },
        {
          type: 'unique',
          title: 'Fez pré-natal? ',
          options: yesNo,
        },
        // MUDAR PARA NUMBER FUTURAMANTE
        {
          type: 'describe',
          title: 'Com quantos meses? ',
          value: '',
        },
        {
          type: 'unique',
          title: 'Realizou todos os exames? ',
          options: yesNo,
        },
        // IF yes
        {
          type: 'unique',
          title: 'Alguma alteração? ',
          options: yesNo,
        },
        {
          type: 'describe',
          title: 'Qual? ',
          value: '',
        },
        // ENDIF
        {
          type: 'unique',
          title: 'Como foi o parto? ',
          options: [
            { value: 'normal', label: 'Normal' },
            { value: 'cesarea', label: 'Cesárea' },
            { value: 'forceps', label: 'Fórceps' },
          ],
        },
        {
          type: 'describe',
          title: 'Nome do hospital: ',
          value: '',
        },
        // IF yes
        {
          type: 'unique',
          title: 'Prematuro? ',
          options: yesNo,
        },
        // MUDAR PARA NUMBER FUTURAMANTE
        {
          type: 'describe',
          title: 'Com quantos meses: ',
          value: '',
        },
        // ENDIF
        {
          type: 'describe',
          title: 'Qual peso: ',
          value: '',
        },
        {
          type: 'describe',
          title: 'Qual altura: ',
          value: '',
        },
        {
          type: 'unique',
          title: 'Chorou logo ao nascer? ',
          options: yesNo,
        },
        {
          type: 'describe',
          title: 'Intercorrência na hora do parto? ',
          value: '',
        },
        {
          type: 'describe',
          title: 'Intercorrência na hora do parto? ',
          value: '',
        },
        {
          type: 'describe',
          title: 'Apgar? ',
          value: '',
        },
        {
          type: 'describe',
          title: 'Transfusão de sangue? ',
          value: '',
        },
        {
          type: 'unique',
          title: 'Icterícia? ',
          options: yesNo,
        },
        {
          type: 'describe',
          title: 'Pediatra: ',
          value: '',
        },
        {
          type: 'unique',
          title: 'Alojamento? ',
          options: [
            { value: 'pediatric_icu', label: 'UTI Pediátrica' },
            { value: 'nursery', label: 'Berçário' },
            { value: 'mother_accommodation', label: 'Alojamento materno' },
          ],
        },
        {
          type: 'unique',
          title: 'Recebeu alta junto com a mãe? ',
          options: yesNo,
        },
        {
          type: 'describe',
          title: 'Por quê? ',
          value: '',
        },
        {
          type: 'describe',
          title: 'Alguma sequela, síndrome ou trauma? ',
          value: '',
        },
      ]
    },
    {
      name: 'Desenvolvimento',
      type: 'accordion',
      questions: [
        {
          title: 'Alimentar',
          questions: [
            { label: 'Mamou no peito? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Boa sucção? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Boa mastigação? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Boa deglutição? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Egasgava-se muito? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Iniciou a mamadeira com que idade? ', type: 'describe', value: '' },
            { label: 'Aceitou bem a passagem para o sólido? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Aceitou bem alimentos salgados? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Até quando recebeu ajuda na alimentação? ', type: 'describe', value: '' },
            { label: 'Hoje tem hora pra comer? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Come depressa? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Mastiga bem? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Comem juntos? ', type: 'unique', options: yesNo, value: '' },
          ]
        },
        {
          title: 'Higiênico',
          questions: [
            { label: 'Com que idade controlou a urina de dia? ', type: 'describe', value: '' },
            { label: 'Com que idade controlou a urina a noite? ', type: 'describe', value: '' },
            { label: 'Com que idade controlou as fezes? ', type: 'describe', value: '' },
            { label: 'Com que idade parou de usar fraudas? ', type: 'describe', value: '' },
            { label: 'Houve dificuldades nesses controles? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Qual atitude da família?', type: 'describe', value: '' },
            { label: 'Toma banho sozinho? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Faz sua higiene sozinho? ', type: 'unique', options: yesNo, value: '' },
          ]
        },
        {
          title: 'Psicomotor',
          questions: [
            { label: 'Ficou no cercadinho? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Engatinhou? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Com que idade andou? ', type: 'describe', value: '' },
            { label: 'Quem ensinou a andar? ', type: 'describe', value: '' },
            { label: 'Como aprendeu a andar? ', type: 'describe', value: '' },
            { label: 'Mostrava-se corajoso(a) ao subir escadas?', options: yesNo, value: '' },
            { label: 'Era corajoso(a) ao explorar novos espaços? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Faz sua higiene sozinho? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Como aprendeu a andar? ', type: 'describe', value: '' },
            { label: 'Como evoluiu a coordenação dos movimentos finos (segurar um brinquedo, uma colher, rabiscos ques fazia? ', type: 'describe', value: '' },
            { label: 'E os grandes músculos? ', type: 'describe', value: '' },
            { label: 'Amarra cadarços? ', type: 'unique', options: hand, value: '' },
            { label: 'Corta com a tesoura? ', type: 'unique', options: hand, value: '' },
          ]
        },
        {
          title: 'Linguagem',
          questions: [
            { label: 'Com que idade começou a falar? ', type: 'describe', value: '' },
            { label: 'Com quem fala mais? ', type: 'describe', value: '' },
            { label: 'Fala(m) pra ele(a) repetir? ', type: 'unique', options: yesNo, value: '' },
            {
              label: 'Trocava as palavras? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Quais? ', type: 'describe', value: '' },
              ]
            },
            { label: 'Falava muito errado?', options: yesNo, value: '' },
          ]
        },
      ]
    },
    {
      name: 'Atualmente',
      type: 'accordion',
      questions: [
        {
          title: 'Linguagem',
          questions: [
            { label: 'Troca letra? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Fala pouco/muito (ansioso)? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Fala de uma forma que todos entendem? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Dê um exemplo de como ele(a) fala? ', type: 'describe', value: '' },
            { label: 'Consegue dar um recado? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Consegue comprar sozinho? ', type: 'unique', options: yesNo, value: '' },
            {
              label: 'Conta história, relata caso ou novela? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Dê um exemplo? ', type: 'describe', value: '' },
                { label: 'Tem começo, meio e fim? ', type: 'unique', options: yesNo, value: '' },
              ]
            },
          ]
        },
        {
          title: 'Sono',
          questions: [
            {
              label: 'Dorme só ou acompanhado? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Com quantas pessoas? ', type: 'describe', value: '' },
                { label: 'Tem medo de dormir sozinho? ', type: 'unique', options: yesNo, value: '' },
              ]
            },
            {
              label: 'Utiliza algum objeto pra dormir? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Qual? ', type: 'describe', value: '' },
              ]
            },
            { label: 'Quando acorda vai pra cama dos pais? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Quantas horas dorme? ', type: 'describe', value: '' },
            { label: 'Custuma urinar na cama? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Acorda à noite? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Chorando? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Assustado? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Fala? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Grita? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Range os dentes? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Senta na cama? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Mexe-se? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Transpira? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Baba? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Pesadelos? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Insônia? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Sonâmbulo? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Dorme no escuro? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Faz ruídos pela boca ou nariz? ', type: 'unique', options: yesNo, value: '' },
          ]
        },
        {
          title: 'História clínica',
          questions: [
            {
              label: 'Teve ou tem alguma dessas doenças? ',
              type: 'multiple',
              options: [
                { name: 'MEASLES', label: 'Sarampo', value: false },
                { name: 'MUMPS', label: 'Caxumba', value: false },
                { name: 'CHICKENPOX', label: 'Catapora', value: false },
                { name: 'BRONCHITIS', label: 'Bronquite', value: false },
                { name: 'ALLERGY', label: 'Alergia', value: false },
                { name: 'RUBELLA', label: 'Rubéola', value: false },
                { name: 'MENINGITIS', label: 'Meningite', value: false },
                { name: 'COQUELUCHE', label: 'Coqueluche', value: false },
                { name: 'ASTHMA', label: 'Asma', value: false },
                { name: 'HEPATITIS', label: 'Hepatite', value: false },
                { name: 'PNEUMONIA', label: 'Pneumonia', value: false },
                { name: 'SURGERIES', label: 'Cirurgias', value: false },
              ],
            },
            {
              label: 'Possui alguma outra doença não listada? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Qual? ', type: 'describe', value: '' },
              ]
            },
            {
              label: 'Já foi hospitalizado? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Tratamentos realizados? ', type: 'describe', value: '' },
              ]
            },
            {
              label: 'Já passou por cirurgias? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Qual? ', type: 'describe', value: '' },
              ]
            },
          ]
        },
        {
          title: 'Tiques',
          questions: [
            { label: 'Usou chupeta até que idade? ', type: 'describe', value: '' },
            { label: 'Chupou o dedo? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Arranca cabelos? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Bate a cabeça na parede? ', type: 'unique', options: yesNo, value: '' },
            {
              label: 'Apresenta outros tiques? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Qual? ', type: 'describe', value: '' },
              ]
            },
            { label: 'Qual a atitude dos familiares? ', type: 'describe', value: '' },
            {
              label: 'Toma ou tomou alguma medicação sistematicamente? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Qual? ', type: 'describe', value: '' },
              ]
            },
          ]
        },
        {
          title: 'Sexualidade',
          questions: [
            {
              label: 'Apresenta curiosidade sexual? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Quais? ', type: 'describe', value: '' },
              ]
            },
            {
              label: 'Faz muitas perguntas? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Quais? ', type: 'describe', value: '' },
              ]
            },
          ]
        },
        {
          title: 'Sensorial',
          questions: [
            { label: 'Tem problema de visão? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Já consultou um oftalmologista? ', type: 'unique', options: yesNo, value: '' },
            {
              label: 'Usa óculos? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Por quê? ', type: 'describe', value: '' },
              ]
            },
            {
              label: 'Já teve Otites? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Quando? ', type: 'describe', value: '' },
                { label: 'Frequente? ', type: 'unique', options: yesNo, value: '' },
              ]
            },
            {
              label: 'Já fez audiometria? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Quando? ', type: 'describe', value: '' },
                { label: 'Por quê? ', type: 'describe', value: '' },
                { label: 'Qual resultado? ', type: 'describe', value: '' },
              ]
            },
            {
              label: 'Realizou algum desses exames? ',
              type: 'multiple',
              options: [
                { name: 'ELETROPHALOGRAM', label: 'Eletro encefalograma', value: false },
                { name: 'COMPUTED_TOMOGRAPHY', label: 'Tomografia Computadorizada', value: false },
                { name: 'MAGNETIC_RESONANCE', label: 'Ressonância magnética', value: false },
              ],
            },
          ]
        },
        {
          title: 'Estimulação',
          questions: [
            { label: 'NÃO SEI? ', type: 'unique', options: yesNo, value: '' },
          ]
        },
        {
          title: 'Família',
          questions: [
            { label: 'Qual atitude da família diante da falta de limite do filho? ', type: 'describe', value: '' },
            { label: 'Como a criança reage? ', type: 'describe', value: '' },
            {
              label: 'Alguém protege? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Quem? ', type: 'describe', value: '' },
              ]
            },
            { label: 'É muito sensurada? ', type: 'unique', options: yesNo, value: '' },
            {
              label: 'Relaciona-se bem com: ',
              type: 'multiple',
              options: [
                { name: 'ALCOHOLISM', label: 'Pai', value: false },
                { name: 'MENTAL_DISABILITY', label: 'Padastro', value: false },
                { name: 'EPILEPSY', label: 'Mãe', value: false },
                { name: 'DIABETES', label: 'Madastra', value: false },
                { name: 'PSYCHIATRIC_TREATMENT', label: 'Irmãos', value: false },
              ],
            },
            { label: 'Os pais sabem ler e escrever? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Quem o auxilia nas lições de casa? ', type: 'describe', value: '' },
            {
              label: 'Há casos na família? ',
              type: 'multiple',
              options: [
                { name: 'ALCOHOLISM', label: 'Alcoolismo', value: false },
                { name: 'MENTAL_DISABILITY', label: 'Deficiência mental', value: false },
                { name: 'EPILEPSY', label: 'Epilepsia', value: false },
                { name: 'DIABETES', label: 'Diabetes', value: false },
                { name: 'PSYCHIATRIC_TREATMENT', label: 'Tratamento psiquiátrico', value: false },
              ],
            },
            { label: 'O que você mais gosta nele(a)? ', type: 'describe', value: '' },
            { label: 'O que você não gosta nele(a)? ', type: 'describe', value: '' },
          ]
        },
        {
          title: 'Escola',
          questions: [
            { label: 'Frenquentou creche? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Com que idade entrou na escola? ', type: 'describe', value: '' },
            { label: 'Por quê? ', type: 'describe', value: '' },
            { label: 'Quem escolheu a escola? ', type: 'describe', value: '' },
            { label: 'Como foi a escolha? ', type: 'describe', value: '' },
            { label: 'Caso tenha havido mudança, por que mudou? ', type: 'describe', value: '' },
            {
              label: 'Repetiu de ano? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Por quê? ', type: 'describe', value: '' },
              ]
            },
            {
              label: 'Houve problema com professor(es)? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Qual? ', type: 'describe', value: '' },
              ]
            },
            { label: 'Como é a atitude em sala de aula? ', type: 'describe', value: '' },
            {
              label: 'Falta muito à escola? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Por quê? ', type: 'describe', value: '' },
              ]
            },
            {
              label: 'Faz reforço? ',
              type: 'unique',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Ele gosta do reforço? ', type: 'unique', options: yesNo, value: '' },
              ]
            },
            { label: 'O que você acha da escola? ', type: 'describe', value: '' },

          ]
        },
        {
          title: 'Sociabilidade',
          questions: [
            { label: 'Sai sem a família? ', type: 'unique', options: yesNo, value: '' },
            {
              label: 'Como reage às brigas? ',
              type: 'multiple',
              options: [
                { name: 'CRY', label: 'Chora', value: false },
                { name: 'AGGRESSIVE', label: 'Agressivo', value: false },
                { name: 'RETRACT', label: 'Retrai-se', value: false },
              ],
            },
            {
              label: 'Reações habituais ao ambiente? ',
              type: 'multiple',
              options: [
                { name: 'FEARFUL', label: 'Medroso', value: false },
                { name: 'SHY', label: 'Tímido', value: false },
                { name: 'PASSIVE', label: 'Passivo', value: false },
                { name: 'DEPENDENT', label: 'Dependente', value: false },
                { name: 'NEGATIVE', label: 'Negativista', value: false },
                { name: 'EXCITED', label: 'Excitado', value: false },
              ],
            },
            { label: 'Alguma outra reação? ', type: 'describe', value: '' },
            { label: 'Houve regressão no comportamento, quais? ', type: 'describe', value: '' },
            { label: 'Inventa fatos não ocorridos? ', type: 'describe', value: '' },
            {
              label: 'Demonstra medos? ',
              type: 'multiple',
              options: [
                { name: 'ANIMALS', label: 'Animais', value: false },
                { name: 'PEOPLE', label: 'Pessoas', value: false },
                { name: 'IMAGINARY_THINGS', label: 'Coisas imaginárias', value: false },
                { name: 'NATURE_PHENOMENA', label: 'Fenômenos da natureza', value: false },
              ],
            },
            { label: 'Quais bricadeiras preferidas? ', type: 'describe', value: '' },
            {
              label: 'A família costuma fazer visitas? ',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Como ela reage nessas ocasiões? ', type: 'describe', value: '' },
              ]
            },
            {
              label: 'Os pais gostam de ler histórias? ',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Quais tipos ele prefere? ', type: 'describe', value: '' },
              ]
            },
            {
              label: 'Gosta de animais? ',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Possui algum? ', type: 'describe', value: '' },
              ]
            },
            // MUDAR PRA NUMBER FUTURAMENTE
            { label: 'Quanto tempo de TV assiste no dia? ', type: 'describe', value: '' },
            { label: 'Quanto tempo de computador  no dia? ', type: 'describe', value: '' },
            { label: 'Quanto tempo de internet no dia? ', type: 'describe', value: '' },
            { label: 'Quanto tempo de video-game no dia? ', type: 'describe', value: '' },
            //
            {
              label: 'Pratica esporte? ',
              options: yesNo,
              value: '',
              show_sub_questions: yesNo[0],
              sub_questions: [
                { label: 'Quais atividades fora da escola? ', type: 'describe', value: '' },
              ]
            },
          ]
        },
      ]
    },
    {
      name: 'Observações',
      type: 'accordion',
      questions: [
        {
          title: 'Responsáveis',
          questions: [
            { label: 'Encaminhamento? ', type: 'describe', value: '' },
            { label: 'Psicólogo? ', type: 'describe', value: '' },
            { label: 'Neurologista? ', type: 'describe', value: '' },
            { label: 'Fonoaudiologista? ', type: 'describe', value: '' },
            { label: 'Oftalmologista? ', type: 'describe', value: '' },
            { label: 'Otorrino? ', type: 'describe', value: '' },
            { label: 'Pediatra? ', type: 'describe', value: '' },
            { label: 'Outros? ', type: 'describe', value: '' },
            { label: 'Responsável? ', type: 'describe', value: '' },
          ]
        },
        {
          title: 'Professores',
          questions: [
            { label: 'Como é  o comportamento dentro da sala de aula? Calmo ou agitado?', type: 'describe', value: '' },
            { label: 'Ele(a) presta atenção nas aulas? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Faz todas atividades propostas em sala de aula? ', type: 'unique', options: yesNo, value: '' },
            { label: 'Acompanha o ritmo da classe ou está defasada? ', type: 'unique', options: yesNo, value: '' },
          ]
        },
      ]
    },
  ]
}

