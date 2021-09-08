import { RepositoryItem } from '../RepositoryItem';
import { Container } from './style';

const repository = {
	name: 'Repo 1',
	description: 'Info about form1',
	link: 'https://github.com/aq-simei/aq-simei'
};

export function RepositoryList() {
	return (
		<Container>
			<ul>
				<RepositoryItem name={repository.name} description={repository.description} link={repository.link} />
			</ul>
		</Container>
	);
}
