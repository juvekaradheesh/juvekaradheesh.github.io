import { profile } from '../settings'

export function highlightAuthor(authors: string): string{
	const author = authors.split(', ')
	const cleanAuthorName = profile.author_name.replace(/\*/g, '') // Remove * for matching
	if (author.some(a => a.replace(/\*/g, '') === cleanAuthorName)){
		return authors.replace(new RegExp(`\\b${profile.author_name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g'), `<span class='font-bold underline'>${profile.author_name}</span>`)
	}
	return authors
}
