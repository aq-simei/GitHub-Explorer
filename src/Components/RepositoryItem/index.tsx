export interface RepositoryItemProps {
	id?: number; //Repository's ID, not necessary
	name: string; //Repository's name on the API
	description: string; //Repository description on the API
	html_url: string; //Repository's link on the API
}

export function RepositoryItem({ name, description, html_url }: RepositoryItemProps) {
	return (
		<li>
			<strong>{name ? name : 'No name'}</strong>
			<p> {description} </p>
			<a target="_blank" href={html_url}>
				Acesse {name}
			</a>
		</li>
	);
}
