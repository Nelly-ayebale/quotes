export class Quote {
    public showDescription: boolean;
    public Upvote: number;
    public Downvote: number;
    constructor(public id: number, public type: string, public description: string, public author: string, public name: string, public completeDate: Date) {
        this.showDescription = false;
        this.Upvote = 0;
        this.Downvote = 0;
    }
}
