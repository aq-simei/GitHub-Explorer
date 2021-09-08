interface RepositoryItemProps  {
        name: string;
        description: string;
        link: string;
    }

export function RepositoryItem(repository: RepositoryItemProps) {
	return (
		<li>
			<strong>{repository.name ?? "No name"}</strong>
			<p> {repository.description} </p>
			<a target = "_blank" href={repository.link}  >Repository's link</a>
		</li>
	);
}
