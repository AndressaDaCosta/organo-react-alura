import './rodape.css';

const Rodape = () => {
	return (
		<footer className="footer">
			<section>
				<ul>
					<li>
						<a
							href="/"
							target="_blank">
							<img
								src="/imagens/facebook.png"
								alt=""
							/>
						</a>
					</li>
					<li>
						<a
							href="/"
							target="_blank">
							<img
								src="/imagens/twitter.png"
								alt=""
							/>
						</a>
					</li>
					<li>
						<a
							href="/"
							target="_blank">
							<img
								src="/imagens/instagram.png"
								alt=""
							/>
						</a>
					</li>
				</ul>
			</section>
			<section>
				<img
					src="/imagens/logo.png"
					alt=""
				/>
			</section>
			<section>
				<p>Desenvolvido por Andressa Da Costa</p>
			</section>
		</footer>
	);
};

export default Rodape;
