import { RepositoryItem } from '../RepositoryItem';
import { Container } from './style';

import { useState, useEffect } from 'react';

import { RepositoryItemProps } from '../RepositoryItem/index';

export function RepositoryList() {
	const [ repositories, setRepositories ] = useState<RepositoryItemProps[]>([]);

	useEffect(() => {
		fetch('https://api.github.com/orgs/rocketseat/repos')
			.then((response) => response.json())
			.then((data) => setRepositories(data));
	}, []);

	return (
		<Container>
			<ul>
				{repositories.map((repository) => {
					return (
						<RepositoryItem
							key={repository.id}
							name={repository.name}
							description={repository.description}
							html_url={repository.html_url}
						/>
					);
				})}
			</ul>
		</Container>
	);
}
