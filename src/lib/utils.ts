import { profile } from '../settings'
import { template } from '../settings'

export function highlightAuthor(authors: string): string{
	const author = authors.split(', ')
	const cleanAuthorName = profile.author_name.replace(/\*/g, '') // Remove * for matching
	if (author.some(a => a.replace(/\*/g, '') === cleanAuthorName)){
		return authors.replace(new RegExp(`\\b${profile.author_name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g'), `<span class='font-bold underline'>${profile.author_name}</span>`)
	}
	return authors
}

export function trimExcerpt(excerpt: string): string {
	const excerptLength = template.excerptLength
	return excerpt.length > excerptLength ? `${excerpt.substring(0, excerptLength)}...` : excerpt
}

export function highlightJournal(journal?: string): string {
	if (!journal) return ''
	return journal.replace(/CVPR/g, `<span class="text-accent font-semibold">CVPR</span>`)
}
