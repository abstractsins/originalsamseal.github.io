export interface JokeQA {
    setup: string;
    punchline: string;
};

export interface JokeQACollection {
    [key: number]: JokeQA
}

export type File = string;
