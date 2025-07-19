import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
	{
		id: 1,
		title: '5 Vantagens da Trituração de Resíduos para sua Indústria',
		excerpt:
			'Descubra como a trituração de resíduos pode reduzir custos, gerar receita e fortalecer a imagem sustentável da sua empresa.',
		category: 'Sustentabilidade',
		image: '/capaid1.png',
		readTime: '6 min',
		date: '18 Jul 2025',
		content: (
			<>
				<p>
					A trituração de resíduos industriais deixou de ser apenas uma opção e se tornou uma estratégia essencial
					para indústrias que buscam eficiência, economia e sustentabilidade. Veja como investir em equipamentos
					de trituração pode transformar sua operação.
				</p>

				<h2 className="mt-8 text-2xl font-bold">
					1. Redução significativa do volume de resíduos
				</h2>
				<p>
					Com trituradores industriais, é possível diminuir o volume dos resíduos em até 80%, facilitando o
					armazenamento e transporte. Isso significa menos custos logísticos e melhor uso do espaço na fábrica.
				</p>

				{/* Imagem interna */}
				<img
					src="/corpo_id1.png"
					alt="Volume de resíduos compactados após trituração industrial"
					className="w-full h-64 object-cover rounded-lg mb-6"
				/>

				<h2 className="mt-8 text-2xl font-bold">
					2. Economia com transporte e descarte
				</h2>
				<p>
					Menos volume resulta em menos viagens para transporte de resíduos e menor frequência de coleta. Além
					disso, evita multas por descarte inadequado e reduz taxas de aterro.
				</p>

				<h2 className="mt-8 text-2xl font-bold">
					3. Preparação de resíduos para reciclagem
				</h2>
				<p>
					A trituração facilita o reaproveitamento dos materiais, tornando-os adequados para processos de
					reciclagem ou para serem usados como matéria-prima em outros setores.
				</p>

				<h2 className="mt-8 text-2xl font-bold">
					4. Conformidade com normas ambientais
				</h2>
				<p>
					Atender às legislações ambientais se torna mais simples com a correta gestão dos resíduos sólidos. A
					trituração é uma etapa importante para adequação às normas e certificações ambientais.
				</p>

				<h2 className="mt-8 text-2xl font-bold">
					5. Sustentabilidade e imagem da marca
				</h2>
				<p>
					Empresas que investem em soluções sustentáveis como a trituração demonstram responsabilidade
					socioambiental, fortalecendo sua reputação e atraindo novos clientes.
				</p>

				<p>
					Quer saber mais sobre trituradores industriais? Confira nosso{' '}
					<Link to="/produtos" className="text-ecogrind-green underline">
						portfólio de produtos
					</Link>{' '}
					e escolha a solução ideal para sua indústria.
				</p>

				<p className="font-bold mt-6">
					Ecogrind Brasil: Tecnologia que transforma resíduos em resultados.
				</p>
			</>
		),
	},
	{
		id: 2,
		title: 'Como Escolher o Triturador Industrial Certo para seu Negócio',
		excerpt:
			'Potência, tipo de material, volume... São muitos fatores a considerar. Aprenda a escolher o equipamento ideal para suas necessidades.',
		category: 'Tecnologia',
		image: "/capa_id2.png", // substitua por uma imagem real de máquina industrial se desejar
		readTime: '8 min',
		date: '15 Jul 2025',
		content: (
			<>		
				<p>
					Escolher o triturador industrial ideal pode fazer toda a diferença no desempenho e na sustentabilidade da sua operação. Aqui estão os principais pontos para considerar antes de investir.
				</p>

				<h2 className="mt-8 text-2xl font-bold">1. Identifique os tipos de resíduos a serem processados</h2>
				<p>
					Diferentes trituradores são projetados para materiais específicos como plástico, madeira, borracha ou resíduos orgânicos. Definir o tipo de resíduo é o primeiro passo para escolher a máquina adequada.
				</p>

				{/* Imagem interna */}
				<img
					src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="Trabalhador operando painel de controle de triturador industrial"
					className="w-full h-64 object-cover rounded-lg mb-6"
				/>

				<h2 className="mt-8 text-2xl font-bold">2. Avalie a capacidade de processamento</h2>
				<p>
					Considere a quantidade de resíduos gerados por hora. Trituradores como o{' '}
					<Link to="/produtos" className="text-ecogrind-green underline">
						JZQ 500
					</Link>{' '}
					da Ecogrind processam até 1,5 toneladas/hora, ideais para operações de médio e grande porte.
				</p>

				<h2 className="mt-8 text-2xl font-bold">3. Analise a potência e eficiência energética</h2>
				<p>
					Equipamentos com motores de alto torque e inversores de frequência garantem maior desempenho com menor consumo energético.
				</p>

				<h2 className="mt-8 text-2xl font-bold">4. Verifique os recursos de segurança</h2>
				<p>
					Proteções contra sobrecarga, sistemas de travamento e sensores garantem operação segura e confiável.
				</p>

				<h2 className="mt-8 text-2xl font-bold">5. Considere o suporte técnico e treinamento</h2>
				<p>
					Prefira fornecedores que oferecem entrega técnica, treinamento e suporte pós-venda para garantir o máximo aproveitamento do equipamento.
				</p>

				<p>
					Quer saber qual triturador se encaixa no seu negócio? Entre em contato e fale com nossos especialistas.
				</p>

				<p className="font-bold mt-6">
					Ecogrind Brasil: Tecnologia para uma gestão de resíduos eficiente e sustentável.
				</p>
			</>
		),
	},
	{
		id: 3,
		title: 'Economia Circular: O Futuro da Gestão de Resíduos no Brasil',
		excerpt:
			'Descubra como a economia circular está moldando o futuro da gestão de resíduos no Brasil e as oportunidades para sua indústria ser mais sustentável.',
		category: 'Negócios',
		image: "/capa_id3.jpg", // imagem de capa sugerida
		readTime: '7 min',
		date: '12 Jul 2025',
		content: (
			<>
				<p>
					A economia circular está revolucionando a maneira como empresas e indústrias brasileiras lidam com resíduos sólidos. Em vez de descartar, o foco agora é reutilizar e transformar. Mas como sua empresa pode se beneficiar dessa tendência?
				</p>

				<h2 className="mt-8 text-2xl font-bold">1. O que é economia circular?</h2>
				<p>
					É um modelo econômico que visa reduzir o desperdício e manter os recursos em uso pelo maior tempo possível. Na prática, isso significa transformar resíduos em novos insumos para a produção.
				</p>

				{/* Imagem interna */}
				<img
					src="/corpo_id3.jpg"
					alt="Infográfico ilustrando o conceito de economia circular"
					className="w-full h-64 object-cover rounded-lg mb-6"
				/>

				<h2 className="mt-8 text-2xl font-bold">2. Benefícios para as indústrias</h2>
				<p>
					Além de reduzir custos com matéria-prima, a economia circular melhora a imagem da marca e abre portas para novos mercados focados em sustentabilidade.
				</p>

				<h2 className="mt-8 text-2xl font-bold">3. Papel dos trituradores industriais</h2>
				<p>
					Os trituradores da Ecogrind tornam o processo mais eficiente ao preparar resíduos para reciclagem ou reutilização, apoiando práticas circulares nas linhas de produção.
				</p>

				<h2 className="mt-8 text-2xl font-bold">4. Impacto ambiental positivo</h2>
				<p>
					Menos resíduos em aterros e mais materiais retornando à cadeia produtiva ajudam a reduzir a pegada de carbono das empresas.
				</p>

				<p>
					Pronto para fazer parte desse futuro?{' '}
					<Link to="/contato" className="text-ecogrind-green underline">
						Fale com a Ecogrind
					</Link>{' '}
					e descubra como podemos ajudar sua indústria.
				</p>

				<p className="font-bold mt-6">
					Ecogrind Brasil: Soluções que impulsionam a economia circular no setor industrial.
				</p>
			</>
		),
	},
	{
		id: 4,
		title: 'PNRS: Como sua Empresa Pode se Adequar à Política Nacional de Resíduos Sólidos',
		excerpt:
			'A legislação ambiental está cada vez mais rigorosa. Saiba como os equipamentos da Ecogrind ajudam sua empresa a cumprir as normas.',
		category: 'Regulamentação',
		image: "/capa_id4.jpg", // imagem de capa sugerida
		readTime: '5 min',
		date: '10 Jul 2025',
		content: (
			<>
				<p>
					A Política Nacional de Resíduos Sólidos (PNRS) é um marco regulatório que impacta diretamente empresas de todos os setores no Brasil. Adequar-se a ela não é apenas uma obrigação legal, mas também uma oportunidade estratégica para negócios que querem se destacar no mercado.
				</p>

				<h2 className="mt-8 text-2xl font-bold">1. O que é a PNRS?</h2>
				<p>
					A PNRS (Lei nº 12.305/2010) estabelece diretrizes para a gestão integrada e o gerenciamento ambientalmente correto de resíduos sólidos, com foco na responsabilidade compartilhada entre geradores e consumidores.
				</p>

				{/* Imagem interna */}
				<img
					src="/corpo_id4.png"
					alt="Representação visual de conformidade ambiental e gestão de resíduos"
					className="w-full h-64 object-cover rounded-lg mb-6"
				/>

				<h2 className="mt-8 text-2xl font-bold">2. Por que se adequar?</h2>
				<p>
					Empresas que cumprem as exigências da PNRS evitam multas, melhoram sua imagem institucional e atraem parceiros comprometidos com sustentabilidade.
				</p>

				<h2 className="mt-8 text-2xl font-bold">3. Como os trituradores auxiliam na adequação</h2>
				<p>
					Trituradores industriais da Ecogrind otimizam o processo de redução de resíduos, facilitando o armazenamento, transporte e a reciclagem, pontos exigidos pela legislação.
				</p>

				<h2 className="mt-8 text-2xl font-bold">4. Passos para implementação</h2>
				<p>
					Faça um diagnóstico de geração de resíduos, elabore um plano de gerenciamento e invista em tecnologias que garantam eficiência e conformidade ambiental.
				</p>

				<p>
					Quer garantir que sua empresa esteja dentro das normas?{' '}
					<Link to="/contato" className="text-ecogrind-green underline">
						Fale com a Ecogrind
					</Link>{' '}
					para conhecer soluções sob medida.
				</p>

				<p className="font-bold mt-6">
					Ecogrind Brasil: Parceira para uma gestão de resíduos sólida e legalmente adequada.
				</p>
			</>
		),
	},
	{
		id: 5,
		title: 'O Papel das Cooperativas na Cadeia de Reciclagem',
		excerpt:
			'Descubra a importância das cooperativas na cadeia de reciclagem e como elas contribuem para a gestão sustentável de resíduos no Brasil.',
		category: 'Impacto Social',
		image: "/capa_id5.jpg", // imagem de capa sugerida
		readTime: '6 min',
		date: '08 Jul 2025',
		content: (
			<>
				<p>
					As cooperativas de reciclagem desempenham um papel essencial na gestão de resíduos no Brasil, contribuindo para a economia circular e gerando impacto social positivo nas comunidades.
				</p>

				<h2 className="mt-8 text-2xl font-bold">1. O que são cooperativas de reciclagem?</h2>
				<p>
					São associações de catadores e trabalhadores que coletam, separam e destinam corretamente materiais recicláveis, evitando o envio de resíduos para aterros sanitários.
				</p>

				{/* Imagem interna */}
				<img
					src="/corpo_id5.jpg"
					alt="Materiais recicláveis organizados em centro de reciclagem"
					className="w-full h-64 object-cover rounded-lg mb-6"
				/>

				<h2 className="mt-8 text-2xl font-bold">2. Contribuição para a sustentabilidade</h2>
				<p>
					Essas cooperativas reduzem o impacto ambiental e fomentam a cadeia de reciclagem ao fornecer materiais já preparados para reuso industrial.
				</p>

				<h2 className="mt-8 text-2xl font-bold">3. Geração de emprego e renda</h2>
				<p>
					Além do benefício ambiental, as cooperativas geram oportunidades econômicas para milhares de famílias brasileiras.
				</p>

				<h2 className="mt-8 text-2xl font-bold">4. Papel das indústrias na parceria com cooperativas</h2>
				<p>
					Empresas podem fortalecer essas iniciativas ao destinar resíduos recicláveis e investir em soluções que facilitem o trabalho das cooperativas, como trituradores industriais.
				</p>

				<p>
					Quer apoiar a cadeia de reciclagem com tecnologia?{' '}
					<Link to="/produtos" className="text-ecogrind-green underline">
						Conheça nossos trituradores
					</Link>{' '}
					e veja como contribuir.
				</p>

				<p className="font-bold mt-6">
					Ecogrind Brasil: Conectando tecnologia e impacto social na gestão de resíduos.
				</p>
			</>
		),
	},
	{
		id: 6,
		title: 'Manutenção Preventiva: Aumente a Vida Útil do seu Triturador',
		excerpt:
			'Saiba como a manutenção preventiva pode aumentar a vida útil do seu triturador industrial e garantir eficiência contínua na operação.',
		category: 'Dicas Técnicas',
		image: "/capa_id6.jpg", // imagem de capa sugerida
		readTime: '4 min',
		date: '05 Jul 2025',
		content: (
			<>
				<p>
					A manutenção preventiva é fundamental para prolongar a vida útil dos trituradores industriais, garantindo operações seguras e eficientes, além de reduzir custos com reparos emergenciais.
				</p>

				<h2 className="mt-8 text-2xl font-bold">1. Por que a manutenção preventiva é importante?</h2>
				<p>
					Ela evita paradas inesperadas na produção, identifica problemas antes que se tornem graves e assegura o funcionamento pleno do equipamento.
				</p>

				{/* Imagem interna */}
				<img
					src="/corpo_id6.png"
					alt="Técnico inspecionando equipamentos industriais durante manutenção"
					className="w-full h-64 object-cover rounded-lg mb-6"
				/>

				<h2 className="mt-8 text-2xl font-bold">2. Principais práticas de manutenção preventiva</h2>
				<ul className="list-disc ml-6 mb-6">
					<li>Lubrificação periódica de componentes móveis.</li>
					<li>Verificação do sistema elétrico e de segurança.</li>
					<li>Inspeção das lâminas e ajustes quando necessário.</li>
					<li>Limpeza geral do equipamento para evitar acúmulo de resíduos.</li>
				</ul>

				<h2 className="mt-8 text-2xl font-bold">3. Benefícios para sua empresa</h2>
				<p>
					Com um triturador bem cuidado, sua operação ganha em produtividade, economia e maior durabilidade do investimento realizado.
				</p>

				<p>
					Quer dicas personalizadas para o seu equipamento?{' '}
					<Link to="/contato" className="text-ecogrind-green underline">
						Fale com a Ecogrind
					</Link>{' '}
					e maximize o desempenho do seu triturador.
				</p>

				<p className="font-bold mt-6">
					Ecogrind Brasil: Mais eficiência e vida útil para seus equipamentos.
				</p>
			</>
		),
	},
];

const BlogPostPage = () => {
	const { id } = useParams();
	const post = blogPosts.find((p) => p.id === Number(id));

	if (!post) {
		return (
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-2xl font-bold text-ecogrind-green">
					Post não encontrado
				</h1>
				<Link
					to="/blog"
					className="text-ecogrind-green underline mt-4 block"
				>
					Voltar ao Blog
				</Link>
			</div>
		);
	}

	return (
		<>
			<Helmet>
				<title>{post.title} - Ecogrind Blog</title>
				<meta name="description" content={post.excerpt} />
			</Helmet>
			<div className="container mx-auto px-4 py-16 md:py-24">
				<div className="max-w-2xl mx-auto bg-secondary rounded-lg shadow-lg p-8">
					<img
						src={post.image}
						alt={post.title}
						className="w-full h-64 object-cover rounded-lg mb-6"
					/>
					<h1 className="text-3xl md:text-4xl font-bold text-ecogrind-green mb-4">
						{post.title}
					</h1>
					<div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
						<div className="flex items-center space-x-1">
							<Calendar className="w-4 h-4" />
							<span>{post.date}</span>
						</div>
						<div className="flex items-center space-x-1">
							<Clock className="w-4 h-4" />
							<span>{post.readTime}</span>
						</div>
						<span className="font-semibold text-ecogrind-green">
							{post.category}
						</span>
					</div>
					<div className="prose prose-lg max-w-none text-muted-foreground">
						{post.content}
					</div>
					<Button asChild variant="link" className="mt-8 text-ecogrind-green">
						<Link to="/blog">← Voltar ao Blog</Link>
					</Button>
				</div>
			</div>
		</>
	);
};

export default BlogPostPage;