export class Quote {
    public showDescription: boolean;
    constructor(public id: number, public type: string, public description: string, public author: string, public name: string, public completeDate: Date, public Upvote: number, public Downvote: number) {
        this.showDescription = false;
    }
}
