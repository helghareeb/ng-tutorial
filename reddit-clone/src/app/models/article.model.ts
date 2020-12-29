// بسم الله الرحمن الرحيم

export class Article {
    title: string
    link: string
    votes: number

    constructor(title: string, link: string, votes?: number){
        this.title = title
        this.link = link
        this.votes = votes || 0
    }

    voteUp(){
        this.votes += 1
        // console.log(`Votes after Up Vote: ${this.article.votes}`)
      }
    
      voteDown(){
        this.votes -= 1
        // console.log(`Votes after Down Vote: ${this.article.votes}`)
      }
}